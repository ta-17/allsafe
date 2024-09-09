// create bar chart
export function createBarChart(data, containerId) {
    console.log("Creating bar chart...");

    // set up dimensions and margins of the graph
    const container = document.getElementById(containerId);
    const { width: containerWidth, height: containerHeight } = 
        container.getBoundingClientRect();

    const margin = { top: 30, right: 100, bottom: 30, left: 70 }
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    // console.log(width, height)

    // top 5 scam types
    const top5Scam = ['Attempts to gain your personal information', 'Buying or selling', 
        'Investment scams', 'Dating and romance', 'Jobs and employment'];

    // console.log(top5Scam);

    // flatten data by year and category_level2
    function flattenData(data) {
        // group by year and then by category_level2
        const grouped = d3.group(data, d => d.year, d => d.category_level2);
    
        // flatten the grouped data into a single array
        const flattened = [];
        
        // Iterate through grouped data
        for (const [year, categories] of grouped) {
            for (const [category, values] of categories) {
                const amount = d3.sum(values, d => d.amount);
                if (top5Scam.includes(category) && !isNaN(amount)) {
                    flattened.push({
                        year: +year,
                        category_level2: category,
                        amount: Math.round(amount * 100) / 100
                    });
                }
            }
        }
        
        return flattened;
    }

    // get data
    const yearData = flattenData(data);
    const yearData2024 = yearData.filter(d => d.year === 2024).sort((a, b) => b.amount - a.amount);

    console.log(yearData2024);

    // create x scale
    const x = d3.scaleBand()
                .domain(yearData2024.map(d => d.category_level2))
                .range([0, width])
                .padding(0.2);
    
    // create y scale
    const y = d3.scaleLinear()
                .domain([0, d3.max(yearData2024, d => d.amount) ])
                .nice()
                .range([height, 0]);

    const scamTypes = Array.from(new Set(yearData2024.map(d => d.category_level2)));
    // console.log(scamTypes);

    // set color scale
    const color = d3.scaleOrdinal()
                    .domain(scamTypes)
                    .range(new Array(scamTypes.length).fill('orange'));

    // create svg
    const svg = d3.create("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom);

    // x axis
    svg.append("g")
       .attr("transform", `translate(${margin.left},${height + margin.top})`)
       .call(d3.axisBottom(x).tickSizeOuter(0))
       .append("text")
       .attr("x", width + 30)
       .attr("y", 16)
       .attr("fill", "currentColor")
       .attr("text-anchor", "end")
       .text("Scam Types");


    // y axis
    svg.append("g")
       .attr("transform", `translate(${margin.left}, ${margin.top})`)
       .call(d3.axisLeft(y))
       .append("text")
       .attr("x", -margin.left + 5)
       .attr("y", -20)
       .attr("fill", "currentColor")
       .attr("text-anchor", "start")
       .text("↑ Amount (AUD)");

    // get tooltip
    const tooltip = d3.select("body")
                      .append("div")
                      .attr("class", "tooltip")
                      .style("opacity", 0);    
    
    // update lost amount format
    const formatNumber = new Intl.NumberFormat();
    
    // draw bars
    const bars = svg.append("g")
                    .attr("transform", `translate(${margin.left},${margin.top})`)
                    .selectAll("rect")
                    .data(yearData2024)
                    .join("rect")
                    .attr("x", d => x(d.category_level2))
                    .attr("y", d => y(d.amount))
                    .attr("width", x.bandwidth())
                    .attr("height", d => height - y(d.amount))
                    .attr("fill", d => color(d.category_level2))
                    .style("opacity", 0.6)
                    // set mouse event
                    .on("mouseover", (event, d) => {
                        // change opacity
                        bars.style("opacity", 0.4);

                        // highlight the current bar
                        d3.select(event.currentTarget)
                          .attr("fill", "red")
                          .style("opacity", 0.8);
                        
                        // tooltip content
                        tooltip.style("opacity", 1)
                               .html(`Year: ${d.year}<br>Scam Type: ${d.category_level2}<br>Total Lost Amount: $${formatNumber.format(d.amount)}`)
                               .style("left", `${event.pageX + 5}px`)
                               .style("top", `${event.pageY - 50}px`);
                    })
                    .on("mousemove", (event) => {
                        tooltip.style("left", `${event.pageX + 5}px`)
                               .style("top", `${event.pageY - 50}px`);
                    })
                    .on("mouseout", () => {
                        // reset opacity
                        bars.attr("fill", "orange").style("opacity", 0.6);
            
                        tooltip.style("opacity", 0);
                    })
       
    // append the svg to the container
    container.appendChild(svg.node());
}