// create donut chart
// reference: https://observablehq.com/@d3/donut-chart/2
export function createPieChart(data, containerId) {
    console.log("Creating pie chart...")

    // set up dimensions and margins of the graph
    const container = document.getElementById(containerId);
    const { width: containerWidth, height: containerHeight } = 
        container.getBoundingClientRect();

    const margin = { top: 40, right: 100, bottom: 30, left: 40 }
    const width = containerWidth;

    // top 5 scam types
    const top5Scam = ['Attempts to gain your personal information', 'Buying or selling', 
        'Investment scams', 'Dating and romance', 'Jobs and employment']

    // flatten data by year and category_level2
    function flattenData(data) {

        // group by year and then by category_level2
        const grouped = d3.group(data, d => d.year, d => d.category_level2);

        // flatten the grouped data into a single array
        const flattened = [];
        
        // iterate through grouped data
        for (const [year, categories] of grouped) {
            for (const [category, values] of categories) {
                if (top5Scam.includes(category)) {
                    const no_of_reports = d3.sum(values, d => d.no_of_reports);
                    flattened.push({
                        year: +year,
                        category_level2: category,
                        no_of_reports
                    });
                }            
            }
        }
        
        return flattened;
    }

    // get data
    const yearData = flattenData(data);
    const yearData2024 = yearData.filter(d => d.year === 2024);

    // check data
    console.log(yearData2024);

    // get unique scam types
    const scamTypes = Array.from(new Set(yearData2024.map(d => d.category_level2)));
    // console.log("Categories:", scamTypes);

    const height = Math.min(width, 500)
    const radius = Math.min(width, height) / 2;

    const arc = d3.arc()
                  .innerRadius(radius * 0.5)
                  .outerRadius(radius - 1);
    
   
    // create pie
    const pie = d3.pie().padAngle(1 / radius).value(d => d.no_of_reports);

    const color = d3.scaleOrdinal()
                    .domain(scamTypes)
                    .range(new Array(data.length).fill('orange'));

    // create svg
    const svg = d3.create("svg")
                  .attr("width", width)
                  .attr("height", height)
                  .attr("viewBox", [-width / 2, -height / 2, width, height])

    // get tooltip
    const tooltip = d3.select("body")
                      .append("div")
                      .attr("class", "tooltip")
                      .style("opacity", 0);
    
    // update report number format
    const formatNumber = new Intl.NumberFormat();

    // draw the pie
    const piece = svg.append("g")
                     .selectAll()
                     .data(pie(yearData2024))
                     .join("path")
                     .attr("fill", d => color(d.data.category_level2))
                     .attr("d", arc)
                     .style("opacity", 0.6)
                     // set mouse event
                     .on("mouseover", (event, d) => {
                        // change opacity
                        piece.style("opacity", 0.4);

                        // highlight the current piece
                        d3.select(event.currentTarget)
                            .attr("fill", "red")
                            .style("opacity", 0.8);              
                                        
                        // tooltip content
                        tooltip.style("opacity", 1)
                                .html(`Year: ${d.data.year}<br>Scam Type: ${d.data.category_level2}<br>Number of Reports: ${formatNumber.format(d.data.no_of_reports)}`)
                                .style("left", `${event.pageX + 5}px`)
                                .style("top", `${event.pageY - 50}px`);
                     })
                    .on("mousemove", (event) => {
                        tooltip.style("left", `${event.pageX + 5}px`)
                               .style("top", `${event.pageY - 50}px`);
                    })
                    .on("mouseout", (event) => {
                        // reset the pie
                        piece.attr("fill", "orange").style("opacity", 0.6);

                        // d3.selectAll("path").attr("fill", d => color(d.data.category_level2));
                        tooltip.style("opacity", 0);
                   });

    // add scam types on the chart
    svg.append("g")
       .selectAll("text")
       .data(pie(yearData2024))
       .join("text")
       .attr("transform", d => `translate(${arc.centroid(d)})`)
       .attr("text-anchor", "middle")
       .style("font-size", "14px")
    //    .style("font-weight", "bold")
       .style("fill", "black")
       .text(d => d.data.category_level2);
       
    // append the svg to the container
    container.appendChild(svg.node());
}