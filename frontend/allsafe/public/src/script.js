import { parseData } from './js/news/data.js'
import { createLineChart } from './js/news/lineChart.js'
import { createSunbrustChart } from './js/news/sunbrustChart.js'
// import { createPieChart } from "./js/pieChart.js";
import { createBarChart } from './js/news/barChart.js'

let selectedLevel2Category = null

let originalData // Store the original dataset globally for filtering

console.log('script.js loaded')

function initCharts() {
    console.log('Historical Scam Information Page Loaded')

    // Load the dataset
    d3.csv('historical_scam.csv')
        .then(function (data) {
            originalData = data // Store the original dataset

            parseData(data)

            // Initially display all data (on page load)
            createLineChart(data, 'scam-line-chart')
            createSunbrustChart(data, 'scam-sunbrust-chart')
            // createPieChart(data, "report-pie-chart");
            createBarChart(data, 'money-bar-chart')

            // Add drop-down event listener for year selection (affect only Sunburst and Bar chart)
            document
                .getElementById('year-dropdown')
                .addEventListener('change', function () {
                    const selectedYear = this.value

                    let filteredData
                    if (selectedYear === '2024') {
                        // Filter data for the year 2024
                        filteredData = originalData.filter(
                            (d) => d.year === 2024
                        )
                    } else {
                        // Use all data when "All" is selected
                        filteredData = originalData
                    }

                    // Log filtered data to verify it's correct
                    console.log(
                        `Filtered Data for ${selectedYear}:`,
                        filteredData
                    )

                    // Clear and re-render ONLY the Sunburst and Bar charts with the filtered data
                    updateSunburstAndBarCharts(filteredData)
                })
        })
        .catch((error) => {
            console.error('Error loading or parsing data:', error)
        })

    console.log('script.js loaded again')
}

// Function to update only Sunburst and Bar Charts with filtered data
function updateSunburstAndBarCharts(filteredData) {
    console.log('Filtered Data for 2024:', filteredData) // Log the filtered data

    // Clear the Sunburst and Bar Charts
    d3.select('#scam-sunbrust-chart').selectAll('*').remove()
    d3.select('#money-bar-chart').selectAll('*').remove()

    // Re-create the Sunburst and Bar charts with the filtered data
    createSunbrustChart(
        filteredData,
        'scam-sunbrust-chart',
        selectedLevel2Category
    )
    createBarChart(filteredData, 'money-bar-chart', selectedLevel2Category)
}

// Run immediately if DOM is already loaded, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCharts)
} else {
    initCharts()
}
