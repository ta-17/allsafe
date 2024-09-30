import { parseData } from "./data.js";
import { createLineChart } from "./js/lineChart.js";
import { createSunburstChart } from "./js/sunburstChart.js";
import { createBarChart } from "./js/barChart.js";
import { createModelBarChart } from "./js/ModelbarChart.js";

// let selectedLevel2Category = null;

let originalData; // Store the original dataset globally for filtering

document.addEventListener("DOMContentLoaded", () => {
    console.log("Historical Scam Information Page Loaded");

    // Load the dataset
    d3.csv("historical_scam.csv").then(data => {
        originalData = data;// Store the original dataset

        parseData(data);
        renderCharts(data);

        // Add drop-down event listener for year selection (affect only Sunburst and Bar chart)
        document.getElementById("year-dropdown").addEventListener("change", function() {
            const selectedYear = this.value;
            let filteredData;
            if (selectedYear === "2024") {
                // Filter data for the year 2024
                filteredData = originalData.filter(d => d.year === 2024);
            } else {
                // Use all data when "All" is selected
                filteredData = originalData;
            }

            // Log filtered data to verify it's correct
            console.log(`Filtered Data for ${selectedYear}:`, filteredData);

            // Clear and re-render ONLY the Sunburst and Bar charts with the filtered data            
            updateSunburstAndBarCharts(filteredData);
        });

        // Regenerate the graphs when resizing the window        
        window.addEventListener("resize", () => renderCharts(originalData));
    }).catch(error => {
        console.error('Error loading or parsing data:', error);
    });

    // Add event listener for user input (assumes an input form with id 'scam-input-form')
    document.getElementById("scam-input-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the input value
        const scamExperience = document.getElementById('scam-experience').value;

        // Process the input (this function would split and count word frequency)
        const wordFrequency = calculateWordFrequency(scamExperience);

        // Clear the existing model bar chart if necessary
        d3.select("#model-bar-chart").selectAll("*").remove();

        // Render the new bar chart based on the input
        createModelBarChart(wordFrequency, 'model-bar-chart');
    });
});

// Function to update only Sunburst and Bar Charts with filtered data
function updateSunburstAndBarCharts(filteredData) {
    console.log("Filtered Data for 2024:", filteredData);  // Log the filtered data

    // Clear existing charts for Sunburst and Bar charts
    d3.select("#sunburst-chart").selectAll("*").remove();
    d3.select("#bar-chart").selectAll("*").remove();
    
    // Re-create the Sunburst and Bar charts with the filtered data    
    createSunburstChart(filteredData, "sunburst-chart");
    createBarChart(filteredData, "bar-chart");
}

// Funtion to create new charts for initalise charts usage
function renderCharts(data) {
    // Clear existing charts before rendering
    d3.select("#line-chart").selectAll("*").remove();
    d3.select("#sunburst-chart").selectAll("*").remove();
    d3.select("#bar-chart").selectAll("*").remove();

    createLineChart(data, "line-chart");
    createSunburstChart(data, "sunburst-chart");
    createBarChart(data, "bar-chart");
}

// Function to calculate word frenquency
function calculateWordFrequency(input) {
    const words = input.split(/\s+/); // Split input into words
    const frequency = {};

    words.forEach(word => {
        const sanitizedWord = word.toLowerCase(); // Convert to lowercase for consistency
        if (sanitizedWord) {
            frequency[sanitizedWord] = (frequency[sanitizedWord] || 0) + 1;
        }
    });

    return Object.keys(frequency).map(word => ({
        word: word,
        count: frequency[word]
    }));
}

