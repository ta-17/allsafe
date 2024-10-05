export function createModelBarChart(data, containerId) {
    const container = document.getElementById(containerId);

    // Check if data is empty (no words matched)
    if (data.length === 0) {
        console.log("No matching words found.");
        // Clear any existing chart content
        d3.select(`#${containerId}`).selectAll("*").remove();
        // Optionally, you can display a message instead of showing the empty frame
        d3.select(`#${containerId}`)
            .append("text")
            .attr("x", 100)
            .attr("y", 50)
            .style("font-size", "16px")
            .style("color", "red");
        return;
    }

    // Limit the number of bars to at most 10
    const maxBars = 6;
    const sortedData = data.sort((a, b) => b.frequency - a.frequency);  // Sort by frequency
    const chartData = sortedData.slice(0, maxBars);  // Select the top 10


    // Function to get container dimensions (same as the Sunburst chart)
    function getDimensions() {
        const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
        return {
            width: containerWidth,
            height: containerHeight > 400 ? containerHeight : 400  // Minimum height to ensure visibility
        };
    }

    let { width, height } = getDimensions();
    const margin = { top: 30, right: 50, bottom: 100, left: 50 };
    const svgWidth = width - margin.left - margin.right;
    const svgHeight = height - margin.top - margin.bottom;

    // Clear any existing chart content before rendering a new one
    d3.select(`#${containerId}`).selectAll("*").remove();

    // Create the SVG element with a viewBox for responsive scaling (same approach as the Sunburst chart)
    const svg = d3.select(`#${containerId}`)
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)  // Use viewBox for responsive behavior
        .attr("width", "100%")  // Ensure SVG takes full width of the container
        .attr("height", "100%") // Ensure SVG takes full height of the container
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Define the x scale (band scale for words)
    const x = d3.scaleBand()
        .domain(chartData.map(d => d.word))  // Words are the x-axis categories
        .range([0, svgWidth])
        .padding(0.7);

    // Define the y scale (linear scale for percentages, 0% to 20%)
    const y = d3.scaleLinear()
        .domain([0, 15])  // From 0% to 20% since the highest word frequency is around 14.6%
        .range([svgHeight, 0])
        .nice();  // Ensures that the axis is "rounded" nicely

    // Append x-axis
    svg.append("g")
        .attr("transform", `translate(0, ${svgHeight})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end")
        .style("font-size", "14px");

    // Append y-axis (with percentage formatting)
    svg.append("g")
        .call(d3.axisLeft(y).ticks(5).tickFormat(d => d + "%"))
        .style("font-size", "14px");  // Format ticks as percentages

    // ** Add X-Axis Label **
    svg.append("text")
        .attr("class", "x-axis-label")
        .attr("x", svgWidth / 2)
        .attr("y", svgHeight + margin.bottom - 10)  // Position below the x-axis
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .text("Words");  // X-axis label

    // ** Add Y-Axis Label at the top **
    svg.append("text")
        .attr("class", "y-axis-label")
        .attr("x", margin.left - 15)  // Position it near the y-axis, slightly to the left of the axis
        .attr("y", -margin.top / 2)   // Position it above the y-axis at the top
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .text("Frequency (%)");  // Y-axis label text
    
    // Tooltip element creation
    const tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("background-color", "white")
        .style("padding", "8px")
        .style("border", "1px solid #ccc")
        .style("border-radius", "4px")
        .style("box-shadow", "0px 0px 5px rgba(0, 0, 0, 0.2)")
        .style("visibility", "hidden")  // Hidden by default
        .style("pointer-events", "none");  // Ignore pointer events for the tooltip

    // Create the bars
    svg.selectAll(".bar")
        .data(chartData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.word))
        .attr("y", d => y(d.frequency))  // Frequency value maps to bar height
        .attr("width", x.bandwidth())
        .attr("height", d => svgHeight - y(d.frequency))  // Calculate the height of the bar based on percentage
        .attr("fill", "#69b3a2")
        
        // Mouseover event to show the tooltip
        .on("mouseover", function (event, d) {
            tooltip.style("visibility", "visible")
                .html(`<strong>Word:</strong> ${d.word}<br><strong>Frequency:</strong> ${d.frequency}%`);  // Tooltip content
        })
        
        // Mousemove event to move the tooltip with the cursor
        .on("mousemove", function (event) {
            tooltip.style("top", (event.pageY - 10) + "px")
                .style("left", (event.pageX + 10) + "px");
        })
        
        // Mouseout event to hide the tooltip
        .on("mouseout", function () {
            tooltip.style("visibility", "hidden");
        });

    // Add window resize listener to adjust chart when container is resized
    window.addEventListener("resize", () => {
        const newDimensions = getDimensions();
        width = newDimensions.width;
        height = newDimensions.height;

        // Clear the existing chart and re-render
        d3.select(`#${containerId}`).selectAll("*").remove();
        createModelBarChart(data, containerId);  // Recreate the chart with new dimensions
    });
}
