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
        .ticks(monthData2024.length))
        .call((g) =>
            g
              .append("text")
              .attr("x", width -lineMargin.right + 15)
              .attr("y", 17)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text("Month")
          );

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
                      .text("↑ Number of Reports"));

    // draw the line
    const linePath = svg.append("path")
                        .datum(monthData2024)
                        .attr("fill", "none")
                        .attr("stroke", "red")
                        .attr("stroke-width", 3)
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
            .attr('stop-color', 'orange')
            .attr('stop-opacity', 0.2);

    // draw area
    const areaPath = svg.append('path')
                        .datum(monthData2024)
                        .attr('fill', `url(#${gradientId})`)
                        .attr('stroke', 'none')
                        .attr('d', area);

    // get tooltip
    const tooltip = d3.select("body")
                      .append("div")
                      .attr("class", "tooltip")
                      .style("opacity", 0);

    // update report number format
    const formatNumber = new Intl.NumberFormat();


    // add dots with showing data details
    const dots = svg.append("g")
                    .selectAll("circle")
                    .data(monthData2024)
                    .enter()
                    .append("circle")
                    .attr("class", "line-chart-dot")
                    .attr("r", 8)
                    .attr("fill", "red")
                    .attr("cx", d => x(d.month))
                    .attr("cy", d => y(d.no_of_reports))
                    .on("mouseover", (event, d) => {
                        // change opacity
                        linePath.style("opacity", 0.5);
                        areaPath.style("opacity", 0.5);
                        dots.style("opacity", 0.5);

                        // highlight the current dot
                        d3.select(event.currentTarget).style("opacity", 1);

                        // tooltip content
                        tooltip.style("opacity", 1)
                               .html(`Date: ${d.year}/${d.month}<br>Number of Reports: ${formatNumber.format(d.no_of_reports)}`)
                               .style("left", `${event.pageX + 5}px`)
                               .style("top", `${event.pageY - 28}px`);
                    })
                    .on("mousemove", (event) => {
                        tooltip.style("left", `${event.pageX + 5}px`)
                               .style("top", `${event.pageY - 28}px`);
                    })
                    .on("mouseout", () => {
                        // reset opacity
                        linePath.style("opacity", 1);
                        areaPath.style("opacity", 1);
                        dots.style("opacity", 1);

                        tooltip.style("opacity", 0);
                    });

    // append the svg to the container
    container.appendChild(svg.node());
    
}