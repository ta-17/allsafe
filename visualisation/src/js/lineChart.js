// Create line chart
export function createLineChart(data, containerId) {
    console.log("Creating line chart...");

    // Set up dimensions and margins of the graph
    const container = document.getElementById(containerId);
    
    function getDimensions() {
        const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
        return {
            width: containerWidth,
            height: containerHeight > 400 ? containerHeight : 400 // Minimum height
        };
    }

    // Get dimension
    let { width, height } = getDimensions();
    // Set up margin
    const lineMargin = { top: 40, right: 30, bottom: 30, left: 70 };

    // Aggregate data by quarter
    function aggData(data) {
        const grouped = d3.group(data, d => {
            const quarter = Math.ceil(d.month / 3); // Count quarters
            return `${d.year}-Q${quarter}`; // Group by year and quarter
        });

        return Array.from(grouped, ([key, value]) => {
            const [year, quarter] = key.split('-Q');
            const no_of_reports = d3.sum(value, d => d.no_of_reports); // Sum by quarter
            return {
                year: +year,
                quarter: +quarter,
                no_of_reports
            };
        }).sort((a, b) => a.year - b.year || a.quarter - b.quarter); // Sorted by year and quarter to draw lines
    }

    // Get data
    const quarterData = aggData(data);
    // Check data
    console.log(quarterData);

    // Get unique years
    const years = Array.from(new Set(quarterData.map(d => d.year)));

    // Set x scale
    const x = d3.scaleLinear()
        .domain([1, 4]) // Quarter 1 - 4
        .range([lineMargin.left, width - lineMargin.right]);

    // Set y scale
    const yMax = d3.max(quarterData, d => d.no_of_reports) || 0;
    const y = d3.scaleLinear()
        .domain([0, Math.ceil(yMax / 100) * 100]) // Round up to the nearest hundred
        .nice() // Optional: for nicer tick intervals
        .range([height - lineMargin.bottom, lineMargin.top]);

    // Create SVG
    const svg = d3.select(`#${containerId}`).append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${width} ${height}`);

    // Create x-axis
    const xAxis = d3.axisBottom(x)
                    .ticks(4)
                    .tickFormat(d => `Q${d}`); // Show as 'Q1, Q2, Q3, Q4'
    
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0, ${height - lineMargin.bottom})`)
        .call(xAxis)
        .style("font-size", "14px");

    // Add x-axis label: Quarter
    svg.append("text")
        .attr("class", "x-axis-label")
        .attr("x", width / 2)
        .attr("y", height +10) // Adjust this value for better positioning
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .text("Quarter");

    // Create y-axis
    const yAxisGroup = svg.append("g")
        .attr("class", "y-axis")
        .attr("transform", `translate(${lineMargin.left}, 0)`)
        .call(d3.axisLeft(y)
            .ticks(Math.ceil(yMax / 100)) // Ensure proper tick count
            .tickValues(d3.range(0, Math.ceil(yMax / 100) * 100 + 1, 100)) // Set ticks at intervals of 100
            .tickFormat(d3.format("d")))
        .style("font-size", "14px")
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
                    .attr("x2", width - lineMargin.left - 40)
                    .attr("stroke-opacity", 0.1))

        // Add y-axis label: ↑ Number of Reports
        .call(g => g.append("text")
                      .attr("x", 5 - lineMargin.left)
                      .attr("y", lineMargin.top)
                      .attr("fill", "currentColor")
                      .attr("text-anchor", "start")
                      .style("font-weight", "bold")
                      .text("↑ Number of Reports"));

    // Create color scale
    const color = {2024: '#e52828', 2023: '#e58424', 2022: '#aa3dc0', 2021: '#3b67d4', 2020: '#4ecb57'};

    // Draw area
    const area = d3.area()
        .x(d => x(d.quarter))
        .y0(y(0))
        .y1(d => y(d.no_of_reports))
        .curve(d3.curveCatmullRom.alpha(0.5));

    // Create lines
    const line = d3.line()
        .x(d => x(d.quarter))
        .y(d => y(d.no_of_reports))
        .curve(d3.curveCatmullRom.alpha(0.5));

    // Create gradients
    const defs = svg.append("defs");

    years.forEach(year => {
        const gradientId = `gradient-${year}`;
        const gradient = defs.append("linearGradient")
            .attr("id", gradientId)
            .attr("x1", "0%")
            .attr("x2", "10%")
            .attr("y1", "0%")
            .attr("y2", "100%");
        
        gradient.append("stop").attr("offset", "0%")
                .attr("stop-color", color[year])
                .attr("stop-opacity", 0.4);
        
        gradient.append("stop").attr("offset", "100%")
                .attr("stop-color", color[year])
                .attr("stop-opacity", 0);
    });

    // Create a tooltip
    const tooltip = d3.select("#tooltip-line")
                        .style("position", "absolute")
                        .style("padding", "12px")
                        .style("text-align", "center")
                        .style("font-size", "16px")
                        .style("border", "1px solid #ddd")
                        .style("border-radius", "3px")
                        .style("transform", "translateX(15px)")
                        .style("box-shadow", "0 0 5px rgba(0,0,0,0.2)");

    // Set checkbox container
    const checkboxContainer = d3.select(`#${containerId}`).append("div")
        .attr("class", "checkbox-container")
        .style("font-size", "18px")
        .style("margin", "8px");

    // Create checkbox with default values
    years.forEach(year => {
        const label = checkboxContainer.append("label")
            .style("margin", "12px"); // Add margin to the label

        // Add checkbox
        label.append("input")
            .attr("type", "checkbox")
            .attr("value", year)
            .style("margin", "5px")
            .property("checked", year === 2022 || year === 2023 || year === 2024)
            .on("change", (event) => {
                const checkedBoxes = checkboxContainer.selectAll("input:checked").nodes();
                if (checkedBoxes.length > 3) {
                    d3.select(event.target).property("checked", false);
                } else {
                    updateChart();
                }
            });

        // Set the text for the label
        label.append("span").text(`${year}`); // Added "Year" before the year
    });

    // Update report number format
    const formatNumber = new Intl.NumberFormat();


    // Update the chart after different checkbox selection
    function updateChart() {
        svg.selectAll("path").remove();
        svg.selectAll("circle").remove();

        const selectedYears = Array.from(checkboxContainer.selectAll("input:checked").nodes())
            .map(checkbox => +checkbox.value);

        selectedYears.forEach(year => {
            const dataForYear = quarterData.filter(d => d.year === year);

            // Draw the line
            svg.append("path")
                .datum(dataForYear)
                .attr("fill", "none")
                .attr("stroke", color[year])
                .attr("stroke-width", 4)
                .style("opacity", 0.8)
                .attr("d", line)
                .on("mouseover", () => highlightYear(year))
                .on("mouseout", resetHighlight);

            // Draw the area
            svg.append("path")
                .datum(dataForYear)
                .attr("fill", `url(#gradient-${year})`)
                .attr("stroke", "none")
                .attr("d", area)
                .style("opacity", 0.7)
                .on("mouseover", (event) => {
                    const totalReports = d3.sum(dataForYear, d => d.no_of_reports);
                    tooltip.classed("hidden", false)
                            .style("visibility", "visible")
                            .html(`Year: ${year}<br>Number of Scam Reports: ${formatNumber.format(totalReports)}`)
                            .style("left", `${event.pageX + 15}px`)
                            .style("top", `${event.pageY - 28}px`);

                    highlightYear(year);
                })
                .on("mousemove", (event) => {
                    tooltip.style("left", (event.pageX + 15) + "px")
                        .style("top", (event.pageY - 28) + "px");
                })
                .on("mouseout", () => {
                    tooltip.classed("hidden", true)
                            .style("visibility", "hidden");
                    resetHighlight();
                });

            // Add dots for each data point
            svg.selectAll(`.dot-${year}`)
                .data(dataForYear)
                .enter()
                .append("circle")
                .attr("class", `dot-${year}`)
                .attr("cx", d => x(d.quarter))
                .attr("cy", d => y(d.no_of_reports))
                .attr("r", 5)
                .attr("fill", color[year])
                .on("mouseover", (event, d) => {
                    tooltip.classed("hidden", false)
                        .style("visibility", "visible")
                        .html(`Date: ${d.year}/Q${d.quarter}<br>Number of Scam Reports: ${formatNumber.format(d.no_of_reports)}`)
                        .style("left", `${event.pageX + 15}px`)
                        .style("top", `${event.pageY - 28}px`);
                    highlightYear(d.year);
                    d3.select(event.currentTarget).transition().duration(100).attr("r", 7);
                })
                .on("mousemove", (event) => {
                    tooltip.style("left", (event.pageX + 15) + "px")
                        .style("top", (event.pageY - 28) + "px");
                })
                .on("mouseout", (event) => {
                    tooltip.classed("hidden", true)
                        .style("visibility", "hidden");
                    resetHighlight();
                    d3.select(event.currentTarget).transition().duration(100).attr("r", 5);
                });
        });
    }

    // Highlight function
    function highlightYear(year) {
        svg.selectAll("path").style("opacity", 0.2);
        svg.selectAll("circle").style("opacity", 0.4);
        svg.selectAll(`.dot-${year}`).style("opacity", 1);
        svg.selectAll("path")
            .filter((d) => d[0].year === year)
            .style("opacity", 0.7);
    }

    // Reset highlight function
    function resetHighlight() {
        svg.selectAll("path").style("opacity", 0.8);
        svg.selectAll("circle").style("opacity", 1);
    }

    // Update the chart
    updateChart();

    // Enable chart to be responsive
    window.addEventListener("resize", () => {
        const newDimensions = getDimensions();
        svg.attr("viewBox", `0 0 ${newDimensions.width} ${newDimensions.height}`);
        width = newDimensions.width;
        height = newDimensions.height;

        // Update scales
        x.range([lineMargin.left, width - lineMargin.right]);
        y.range([height - lineMargin.bottom, lineMargin.top]);

        // Update axes
        svg.select(".x.axis").call(xAxis);
        svg.select(".y-axis").call(d3.axisLeft(y).ticks(Math.ceil(yMax / 100)).tickFormat(d3.format("d")));

        // Update the chart
        updateChart();
    });

    // append the svg to the container
    container.appendChild(svg.node());
}
