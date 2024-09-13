export function createBarChart(data, containerId, selectedLevel2Category) {
    console.log("Filtered data passed to Bar Chart:", data);  // Log the filtered data

    // Check if data is empty after filtering
    if (data.length === 0) {
        console.log("No data available for the selected year");
        d3.select(`#${containerId}`).append("text")
            .attr("x", 100)
            .attr("y", 100)
            .text("No data available for the selected year")
            .style("font-size", "16px")
            .style("color", "red");
        return;
    }

    const flattenedData = flattenData(data);
    console.log("Flattened data for Bar Chart:", flattenedData);  // Log the flattened data
    
    // set up dimensions and margins of the graph
    const container = document.getElementById(containerId);
    const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();

    const margin = { top: 30, right: 100, bottom: 30, left: 70 }
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    // flatten data by year and category_level2
    function flattenData(data) {
        const grouped = d3.group(data, d => d.category_level2, d => d.category_level3);
        const flattened = [];

        for (const [level2, level3Map] of grouped) {
            if (level2 === "unexpected money") continue;

            let totalAmountForLevel2 = 0;
            const level3Data = [];

            for (const [level3, values] of level3Map) {
                const amount = d3.sum(values, d => d.amount);
                totalAmountForLevel2 += amount;
                level3Data.push({ category_level3: level3, amount });
            }

            flattened.push({
                category_level2: level2,
                totalAmount: totalAmountForLevel2,
                level3Data
            });
        }

        const sortedData = flattened.sort((a, b) => b.totalAmount - a.totalAmount);

        if (!sortedData.some(d => d.category_level2 === 'Attempts to gain your personal information')) {
            const attemptsData = flattened.find(d => d.category_level2 === 'Attempts to gain your personal information');
            if (attemptsData) sortedData.push(attemptsData);
        }

        return sortedData.slice(0, 5);
    }

    const allYearData = flattenData(data);

    const x = d3.scaleBand()
        .domain(allYearData.map(d => d.category_level2))
        .range([0, width])
        .padding(0.2);

    const y = d3.scaleLinear()
        .domain([0, d3.max(allYearData, d => d.totalAmount)])
        .nice()
        .range([height, 0]);

    const scamTypes = Array.from(new Set(allYearData.map(d => d.category_level2)));

    // set color scale
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, scamTypes.length))
        .domain(scamTypes)
        .range(new Array(scamTypes.length).fill('orange'));

    const svg = d3.create("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

    svg.append("g")
        .attr("transform", `translate(${margin.left},${height + margin.top})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .append("text")
        .attr("x", width + 30)
        .attr("y", 16)
        .attr("fill", "currentColor")
        .attr("text-anchor", "end")
        .text("Scam Types");

    svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)
        .call(d3.axisLeft(y))
        .append("text")
        .attr("x", -margin.left + 5)
        .attr("y", -20)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("↑ Amount (AUD)");

    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    const formatNumber = new Intl.NumberFormat();

    // Create a variable to store the currently selected bar
    let selectedBar = null;

    // Draw bars
    const bars = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
        .selectAll("rect")
        .data(allYearData)
        .join("rect")
        .attr("x", d => x(d.category_level2))
        .attr("y", d => y(d.totalAmount))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.totalAmount))
        .attr("fill", d => color(d.category_level2))
        .style("opacity", 0.6)  // Set initial opacity for all bars
        // Set mouse events
        .on("mouseover", function(event, d) {
            if (selectedBar !== this) {  // Only apply hover effect if this bar is not selected
                bars.style("opacity", 0.4);  // Fade all bars
                d3.select(this).style("opacity", 0.8);  // Highlight the hovered bar
            }

            // Show tooltip content
            tooltip.style("opacity", 1)
                .html(`Scam Type: ${d.category_level2}<br>Total Lost Amount: $${formatNumber.format(d.totalAmount)}`)
                .style("left", `${event.pageX + 5}px`)
                .style("top", `${event.pageY - 50}px`);
        })
        .on("mousemove", (event) => {
            tooltip.style("left", `${event.pageX + 5}px`)
                .style("top", `${event.pageY - 50}px`);
        })
        .on("mouseout", function() {
            // Reset hover effect only if no bar is selected
            if (selectedBar === null) {
                bars.style("opacity", 0.6);  // Reset all bars to normal opacity
            } else if (selectedBar !== this) {
                // Keep the selected bar highlighted, and others faded
                bars.style("opacity", 0.4);
                d3.select(selectedBar).style("opacity", 0.8);
            }

            tooltip.style("opacity", 0);  // Hide tooltip
        })
        .on("click", function(event, d) {
            console.log("Current fill before click:", d3.select(this).style("fill"));  // Log before color change
        
            if (selectedBar === this) {
                // Deselect the currently selected bar and reset color
                d3.select(this)
                   .style("fill", "orange")  // Reset the bar color back to orange using style
                   .style("opacity", 0.6);   // Reset opacity
        
                console.log("Deselecting the same bar, reset to orange.");
        
                // Clear the selection
                selectedBar = null;
            } else {
                // If another bar was previously selected, reset that bar
                if (selectedBar) {
                    console.log("Deselecting previously selected bar.");
        
                    d3.select(selectedBar)
                       .style("fill", "orange")  // Reset previously selected bar using style
                       .style("opacity", 0.6);   // Reset opacity
        
                    console.log("Previously selected bar reset to orange.");
                }
        
                // Now select the new bar and change its color to red
                console.log("Selecting a new bar.");
                d3.select(this)
                   .style("fill", "red")  // Change the fill color to red using style
                   .style("opacity", 0.8);  // Highlight the newly selected bar with higher opacity
        
                console.log("Bar fill after selection:", d3.select(this).style("fill"));
        
                // Update the reference to the selected bar
                selectedBar = this;
        
                // Notify the sunburst chart that a new bar has been clicked
                const barClickEvent = new CustomEvent('barClick', {
                    detail: { level2Id: d.category_level2 }
                });
                window.dispatchEvent(barClickEvent);
            }
        });                   
                            
        
    // event listener for the click event from the sunburst chart
    window.addEventListener('sunburstClick', function(event) {
        const { level2Id } = event.detail;
        console.log('Bar Chart Received Sunburst Click Event, level2Id:', level2Id);  // Log the received event
    
        // Iterate over each bar to find the one that matches the level2Id
        bars.each(function(d) {
            if (d.category_level2 === level2Id) {
                console.log('Bar to Click:', d);  // Log the matched bar data
    
                // Simulate the bar click behavior
                if (selectedBar === this) {
                    // Deselect the bar
                    bars.style("opacity", 0.6);  // Reset all bars to normal opacity
                    d3.select(this).style("opacity", 0.6).attr("fill", "orange");
                    selectedBar = null;
                } else {
                    // Fade all other bars
                    bars.style("opacity", 0.4);
    
                    // Deselect previously selected bar
                    if (selectedBar) {
                        d3.select(selectedBar).style("opacity", 0.4).attr("fill", "orange");
                    }
    
                    // Highlight the newly clicked bar
                    d3.select(this)
                        .attr("fill", "red")
                        .style("opacity", 0.8);
    
                    selectedBar = this;  // Update the selected bar reference
                }
            }
        });
    });
    
    // Event listener for the reset event from the sunburst chart
    window.addEventListener('resetBarChart', function() {
        console.log('Bar Chart Received Reset Event');  // Log the received event
        
        // Reset all bars to their default state (e.g., remove highlighting)
        bars.style("opacity", 0.6).attr("fill", "orange");  // Reset all bars' opacity and color
    
        // Clear the selected bar reference
        selectedBar = null;
    });

    container.appendChild(svg.node());
}
