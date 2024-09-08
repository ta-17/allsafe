// create line chart
export function createLineChart(data, containerId) {
    console.log("Creating line chart...");
    
    // set up dimensions and margins of the graph
    const container = document.getElementById(containerId);
    const { width: containerWidth, height: containerHeight } = 
        container.getBoundingClientRect();
    
    const lineMargin = { top: 40, right: 100, bottom: 30, left: 70 }
    const width = containerWidth;
    const height = containerHeight;

    console.log(width, height);

    // aggregate data by month
    function aggByMonth(data) {
        const grouped = d3.group(data, d => `${d.year}-${d.month}`);

        return Array.from(grouped, ([key, value]) => {
            const [year, month] = key.split('-');
            const no_of_reports = d3.sum(value, d => d.no_of_reports);
            return {
                year: +year,
                month: +month,
                no_of_reports
            };
        });
    }

    // get data
    const monthData = aggByMonth(data);
    const monthData2024 = monthData.filter(d => d.year === 2024).sort((a, b) => a.month - b.month);

    console.log(monthData2024);

    // set x scale
    const x = d3.scaleLinear()
                .domain(d3.extent(monthData2024, d => d.month))
                .range([lineMargin.left, width - lineMargin.right]);
    
    // set y scale
    const y = d3.scaleLinear()
                .domain([0, d3.max(monthData2024, d => d.no_of_reports)])
                .nice()
                .range([height - lineMargin.bottom, lineMargin.top]);

    // create line
    const line = d3.line()
                   .x((d) => x(d.month))
                   .y((d) => y(d.no_of_reports))
                   .curve(d3.curveCatmullRom.alpha(0.5));

    // create svg
    const svg = d3.create("svg").attr("width", width)
                  .attr("height", height)
                //   .attr("viewbox", [0, 0, width, height])
                  .attr("class", "line-char-svg");

    // add x-axis
    svg.append("g")
        .attr("transform", `translate(0,${height - lineMargin.bottom})`)
        .call(d3.axisBottom(x).tickFormat(d3.format("d"))
        .ticks(monthData2024.length));

    // add y-axis
    svg.append("g")
        .attr("transform", `translate(${lineMargin.left}, 0)`)
        .call(d3.axisLeft(y))
        .call((g) => g.select(".domain").remove())
        .call((g) => g.selectAll(".tick line").clone()
                    .attr("x2", width - lineMargin.left - 100)
                    .attr("stroke-opacity", 0.1))
        .call((g) => g.append("text")
                      .attr("x", 5 - lineMargin.left)
                      .attr("y", 15)
                      .attr("fill", "currentColor")
                      .attr("text-anchor", "start")
                      .text("Number of Reports"));

    // draw the line
    svg.append("path")
       .datum(monthData2024)
       .attr("fill", "none")
       .attr("stroke", "red")
       .attr("stroke-width", 1.5)
       .attr("d", line);
    
    // create area
    const area = d3.area()
                   .x((d) => x(d.month))
                   .y0(y(0))
                   .y1((d) => y(d.no_of_reports))
                   .curve(d3.curveCatmullRom.alpha(0.5));
    
    // define gradient
    const defs = svg.append("defs");
    const gradientId = 'gradient-area';
    const gradient = defs.append('linearGradient')
                         .attr('id', gradientId)
                         .attr('x1', '0%')
                         .attr('x2', '0%')
                         .attr('y1', '0%')
                         .attr('y2', '100%');
    
    // gradient start
    gradient.append('stop')
            .attr('offset', '0%')
            .attr('stop-color', 'red')
            .attr('stop-opacity', 0.7);

    // gradient ends
    gradient.append('stop')
            .attr('offset', '70%')
            .attr('stop-color', 'red')
            .attr('stop-opacity', 0.2);

    // draw area
    svg.append('path')
       .datum(monthData2024)
       .attr('fill', `url(#${gradientId})`)
       .attr('stroke', 'none')
       .attr('d', area);

    // append the svg to the container
    container.appendChild(svg.node());
    
    // get tooltip
    const tooltip = d3.select("#tooltip");

    // add dot

    // set up interaction
}