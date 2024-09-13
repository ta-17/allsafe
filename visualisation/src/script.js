import { parseData } from "./data.js";
import { createLineChart } from "./js/lineChart.js";
import { createSunbrustChart } from "./js/sunbrustChart.js";
// import { createPieChart } from "./js/pieChart.js";
import { createBarChart } from "./js/barChart.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("Historical Scam Information Page Loaded");

    // load data
    d3.csv("historical_scam.csv").then(function (data) {
        parseData(data);
        // console.log(data);
        
        // Create charts directly
        createLineChart(data, "scam-line-chart");
        createSunbrustChart(data, "scam-sunbrust-chart");
        // createPieChart(data, "report-pie-chart");
        createBarChart(data, "money-bar-chart");
    }).catch((error) => {
        console.error('Error loading or parsing data:', error);
    });
});