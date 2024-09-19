// create line chart
export function createLineChart(data, containerId) {
    console.log("Creating line chart...");
    
    // set up dimensions and margins of the graph
    const container = document.getElementById(containerId);
    const { width: containerWidth, height: containerHeight } = 
        container.getBoundingClientRect();
    
    const lineMargin = { top: 40, right: 30, bottom: 30, left: 70 }
    const width = containerWidth;
    const height = containerHeight;

    // console.log(width, height);

    // aggregate data by month
    function aggData(data) {
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
    const monthData = aggData(data);
    // const monthData2024 = monthData.filter(d => d.year === 2024).sort((a, b) => a.month - b.month);

    console.log(monthData);

    // get unique years
    // const allYears = Array.from(new Set(monthData.map(d => d.year)));
    
    // get needed years
    const years = [2024, 2022, 2020]

    // filtere data by required years & sort by month
    const filteredData = monthData.filter(d => years.includes(d.year))
                                  .sort((a, b) => a.year - b.year || a.month - b.month);


    // set x scale
    const x = d3.scaleLinear()
                .domain([1,12])
                .range([lineMargin.left, width - lineMargin.right]);
    
    // set y scale
    const y = d3.scaleLinear()
                .domain([0, d3.max(filteredData, d => d.no_of_reports)])
                .nice()
                .range([height - lineMargin.bottom, lineMargin.top]);

    // create line
    const line = d3.line()
                   .x((d) => x(d.month))
                   .y((d) => y(d.no_of_reports))
                   .curve(d3.curveCatmullRom.alpha(0.5));

    // create svg
    // const svg = d3.select(`#${containerId}`).append("svg")
    //     .attr("viewBox", [0, 0, width, height])
    //     .style("font", "10px sans-serif");

    const svg = d3.create("svg")
        .attr("width", width + lineMargin.left + lineMargin.right)
        .attr("height", height + lineMargin.top + lineMargin.bottom);    

    // add x-axis
    svg.append("g")
        .attr("transform", `translate(0,${height - lineMargin.bottom})`)
        .call(d3.axisBottom(x).ticks(12).tickFormat(d => d3.timeFormat("%b")(new Date(2000, d - 1, 1))))
        .style("font-size", "20px")
        // .call((g) =>
        //     g
        //       .append("text")
        //       .attr("x", width -lineMargin.right + 15)
        //       .attr("y", 10)
        //       .attr("fill", "currentColor")
        //       .attr("text-anchor", "start")
        //       .text("Month")
        //   );

    // add y-axis
    svg.append("g")
        .attr("transform", `translate(${lineMargin.left}, 0)`)
        .call(d3.axisLeft(y))
        .style("font-size", "20px")
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

    // create color scale
    const color = {2020: '#1976d2', 2022: '#f57c00', 2024: '#d32f2f'};

    // // draw the line
    // const linePath = svg.append("path")
    //                     .datum(filteredData)
    //                     .attr("fill", "none")
    //                     // .attr("stroke", color[year] || '#000000')
    //                     .attr("stroke-width", 3)
    //                     .attr("d", line);

    // create legend
    // const legend = svg.append("g")
    //                   .attr("transform", `translate(${width - lineMargin.right + 20}, ${lineMargin.top})`)
    //                   .style("font-size", "20px")
    //                   .style("anchor-text", "right bottom");

    // years.forEach((year, i) => {
    //     const legendItem = legend.append("g")
    //                              .attr("transform", `translate(0, ${i * 30})`);
        
    //     legendItem.append("rect")
    //               .attr("x", 0)
    //               .attr("width", 18)
    //               .attr("height", 18)
    //               .attr("fill", color[year] || '#000000')
    //               .style("opacity", 0.8);

    //     legendItem.append("text")
    //               .attr("x", 25)
    //               .attr("y", 9)
    //               .attr("dy", ".35em")
    //               .text(year);
    // });

    
    // create area
    const area = d3.area()
                   .x((d) => x(d.month))
                   .y0(y(0))
                   .y1((d) => y(d.no_of_reports))
                   .curve(d3.curveCatmullRom.alpha(0.5));




    // define gradient
    const defs = svg.append("defs");
    years.forEach(year => {
        const gradientId = `gradient-${year}`;
    // const gradientId = 'gradient-area';
        const gradient = defs.append('linearGradient')
                            .attr('id', gradientId)
                            .attr('x1', '0%')
                            .attr('x2', '0%')
                            .attr('y1', '0%')
                            .attr('y2', '100%');
    
        // gradient start
        gradient.append('stop')
                .attr('offset', '0%')
                .attr('stop-color',  d3.color(color[year]).brighter(0.3).toString())
                .attr('stop-opacity', 0.4);

        // gradient ends
        gradient.append('stop')
                .attr('offset', '70%')
                .attr('stop-color', color[year])
                .attr('stop-opacity', 0.1);
    });

    // create map for interaction between lines and areas
    const lineMap = new Map();
    const areaMap = new Map();

    // draw lines and areas
    years.forEach(year => {
        const dataForYear = filteredData.filter(d => d.year === year);

        // draw lines
        const lines = svg.append("path")
                            .datum(dataForYear)
                            .attr("fill", "none")
                            .attr("stroke", color[year] || '#000000')
                            .attr("stroke-width", 4)
                            .style("opacity", 0)
                            .attr("d", line);

                        // add highlight
                        lines.on("mouseover", () => {
                        svg.selectAll("path").style("opacity", 0.2);
                        lines.style("opacity", 1);
                        areaMap.get(year).style("opacity", 1);

                        })
                        .on("mouseout", () => {
                        svg.selectAll("path").style("opacity", 1)
                        lines.style("opacity", 0.8);
                        areaMap.get(year).style("opacity", 0.8);
                        });
        lines.transition().duration(2000).style("opacity", 0.8)
        lineMap.set(year, lines);

        // draw areas
        const areas = svg.append("path")
                        .datum(dataForYear)
                        .attr("fill", `url(#gradient-${year})`) // Use gradient fill
                        .attr("stroke", "none") // No stroke for area
                        .attr("d", area)
                        .on("mouseover", () => {
                            svg.selectAll("path").style("opacity", 0.2);
                            areas.style("opacity", 1);
                            lineMap.get(year).style("opacity", 1);
                        })
                        .on("mouseout", () => {
                            svg.selectAll("path").style("opacity", 1);
                            areas.style("opacity", 0.8);
                            lineMap.get(year).style("opacity", 0.8);
                        });
        areaMap.set(year, areas);

    });

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
                    .data(filteredData)
                    .enter()
                    .append("circle")
                    .attr("class", "line-chart-dot")
                    .attr("r", 8)
                    .attr("fill", d => color[d.year] || '#000000')
                    .style("opacity", 0)
                    .attr("cx", d => x(d.month))
                    .attr("cy", d => y(d.no_of_reports))
                    .on("mouseover", (event, d) => {
                        // change opacity
                        svg.selectAll("path")
                           .style("opacity", 0.5);
                        // areaPath.style("opacity", 0.5);
                        dots.style("opacity", 0.5);

                        // highlight the current dot
                        d3.select(event.currentTarget).style("opacity", 1);

                        // tooltip content
                        tooltip.style("opacity", 1)
                               .html(`Date: ${d.year}/${d.month}<br>Report Numbers: ${formatNumber.format(d.no_of_reports)}`)
                               .style("left", `${event.pageX + 5}px`)
                               .style("top", `${event.pageY - 28}px`);
                    })
                    .on("mousemove", (event) => {
                        tooltip.style("left", `${event.pageX + 5}px`)
                               .style("top", `${event.pageY - 28}px`);
                    })
                    .on("mouseout", () => {
                        // reset opacity
                        svg.selectAll().style("opacity", 1);
                        dots.style("opacity", 1);

                        tooltip.style("opacity", 0);
                    });
    dots.transition().duration(3000).style("opacity", 0.8);

    // append the svg to the container
    container.appendChild(svg.node());
    
}