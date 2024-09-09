// create sunburst chart
export function createSunbrustChart(data, containerId) {
    console.log("Creating sunburst chart...");

    // Create a tooltip div that is initially hidden
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "white")
        .style("border", "1px solid black")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("font-size", "12px")
        .style("color", "black");

    // Get the container where the chart will be rendered
    const container = document.getElementById(containerId);
    const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();

    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;
    const radius = Math.min(width, height) / 6;

    // Get the Data
    // Step 1: Group the data by category_level2 and sum up the values
    const level2Totals = Array.from(d3.rollup(data, 
        v => v.length, 
        d => d.category_level2
    )).map(([key, value]) => ({ key, value }));
    console.log("Total values for each level 2 category:", level2Totals);

    // Step 2: Sort level2 categories by the total values in descending order
    const topLevel2Categories = level2Totals
        .sort((a, b) => b.value - a.value)  // Sort descending by value
        .slice(0, 5);  // Get the top 5 level2 categories
    console.log("Top 5 Level 2 categories:", topLevel2Categories);

    // Step 3: Filter the original data to only include these top 5 level2 categories
    const filteredData = data.filter(d => 
        topLevel2Categories.some(category => category.key === d.category_level2)
    );
    console.log("Filtered data for top 5 Level 2 categories:", filteredData);

    // Step 4: Group the filtered data by category_level2 and category_level3
    const groupedData = Array.from(d3.group(filteredData, d => d.category_level2, d => d.category_level3), ([key, value]) => ({
        key,
        values: Array.from(value, ([subKey, subValue]) => ({
            key: subKey,
            value: subValue.length
        }))
    }));
    console.log("Grouped Data for Top 5:", groupedData);

    // Step 5: Convert the grouped data into a hierarchical structure
    const hierarchicalData = {
        name: "root",
        children: groupedData.map(level2 => ({
            name: level2.key,  // Level 2 category
            children: level2.values.map(level3 => ({
                name: level3.key,  // Level 3 category
                value: level3.value  // Count of occurrences
            }))
        }))
    };

    console.log("Top 5 Hierarchical Data:", hierarchicalData);

    //--------------------------------------- END OF DATA ---------------------------------------
    
    // Create the color scale.
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, hierarchicalData.children.length + 1));

    // Compute the layout.
    const hierarchy = d3.hierarchy(hierarchicalData)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value);
    const root = d3.partition()
        .size([2 * Math.PI, hierarchy.height + 1])
        (hierarchy);
    root.each(d => d.current = d);

    // Create the arc generator.
    const arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(radius * 1.5)
        .innerRadius(d => d.y0 * radius)
        .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1));

    // Create the SVG container.
    const svg = d3.select(`#${containerId}`).append("svg")
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .style("font", "10px sans-serif");

    // Append the arcs.
    const path = svg.append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .join("path")
        .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
        .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
        .attr("pointer-events", d => arcVisible(d.current) ? "auto" : "none")
        .attr("d", d => arc(d.current))

        // Tooltip interaction (add this)
        .on("mouseover", (event, d) => {
            tooltip.style("visibility", "visible")
                .html(`Scam Type: ${d.data.name}<br>Number of Reports: ${d.value}`)
                .style("left", (event.pageX + 15) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mousemove", (event) => {
            tooltip.style("left", (event.pageX + 15) + "px")
                   .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", () => tooltip.style("visibility", "hidden"));

    // Make them clickable if they have children.
    path.filter(d => d.children)
        .style("cursor", "pointer")
        .on("click", clicked);

    const label = svg.append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .selectAll("text")
        .data(root.descendants().slice(1))
        .join("text")
        .attr("dy", "0.35em")
        .attr("fill-opacity", d => +labelVisible(d.current))
        .attr("transform", d => labelTransform(d.current))
        .text(d => d.data.name);
    
    // Add the text wrapping after label creation
    label.call(wrapText, radius);

    // Function to wrap text inside the arcs
    function wrapText(text, radius) {
        text.each(function() {
            const text = d3.select(this),
                  words = text.text().split(/\s+/).reverse(),
                  lineHeight = 1.1,  // ems
                  y = text.attr("y"),
                  dy = parseFloat(text.attr("dy")) || 0;
    
            let word,
                line = [],
                lineNumber = 0,
                tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    
            // Process each word, wrapping when necessary
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                const tspanWidth = tspan.node().getComputedTextLength();
                const maxWidth = radius * 0.25;  // Adjust this value to fit more in narrower sectors
    
                if (tspanWidth > maxWidth) {
                    line.pop();  // Remove last word
                    tspan.text(line.join(" "));  // Set the current line
                    line = [word];  // Move last word to the new line
                    tspan = text.append("tspan")
                                .attr("x", 0)
                                .attr("y", y)
                                .attr("dy", ++lineNumber * lineHeight + dy + "em")
                                .text(word);
                }
            }
    
            // Center-align the wrapped text vertically
            const totalLines = lineNumber + 1;
            const adjustY = -(totalLines - 1) * lineHeight / 2;
            text.selectAll("tspan").attr("dy", (d, i) => i === 0 ? `${adjustY + dy}em` : `${lineHeight}em`);
        });
    }

    const parent = svg.append("circle")
        .datum(root)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("click", clicked);

    // Handle zoom on click.
    function clicked(event, p) {
        parent.datum(p.parent || root);

        root.each(d => d.target = {
            x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            y0: Math.max(0, d.y0 - p.depth),
            y1: Math.max(0, d.y1 - p.depth)
        });

        const t = svg.transition().duration(750);

        path.transition(t)
            .tween("data", d => {
                const i = d3.interpolate(d.current, d.target);
                return t => d.current = i(t);
            })
            .filter(function(d) {
                return +this.getAttribute("fill-opacity") || arcVisible(d.target);
            })
            .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
            .attr("pointer-events", d => arcVisible(d.target) ? "auto" : "none")
            .attrTween("d", d => () => arc(d.current));

        label.filter(function(d) {
            return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        }).transition(t)
            .attr("fill-opacity", d => +labelVisible(d.target))
            .attrTween("transform", d => () => labelTransform(d.current));
    }

    // Adjust the visibility of labels based on the sector's size
    function labelVisible(d) {
        const labelThreshold = 0.1;  // A more restrictive threshold (increase if needed)
        const minArcLength = 10; // Minimum arc length in pixels (adjust as necessary)
        const sectorArea = (d.y1 - d.y0) * (d.x1 - d.x0);  // Calculate sector area
        const arcLength = (d.x1 - d.x0) * radius;  // Calculate the length of the arc
    
        // Only show the label if the area of the sector is larger than the threshold and arc length is sufficient
        return d.y1 <= 3 && d.y0 >= 1 && sectorArea > labelThreshold && arcLength > minArcLength;
    }
    
    function arcVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
    }

    function labelTransform(d) {
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
        const y = (d.y0 + d.y1) / 2 * radius;
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }
}
