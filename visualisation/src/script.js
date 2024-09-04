console.log("Historical Scam Information Page Loaded...");

import {parseData} from "./data.js";
import {createLineChart} from "./js/lineChart.js";
import {createSunbrustChart} from "./js/sunbrustChart.js";
import {createPieChart} from "./js/pieChart.js";
import {createBarChart} from "./js/barChart.js";

// Check if page loaded: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
    console.log("Historical Scam Information Page Loaded...");

    // load data
    d3.csv("historical_scam.csv").then(function (data) {
        parseData(data);
        // console.log(data);

        // setup intersection observer
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        switch (id) {
                            case "scam-line-chart":
                                createLineChart(data, id);
                                break;
                            case "scam-sunbrust-chart":
                                createSunbrustChart(data, id);
                                break;
                            case "report-pie-chart":
                                createPieChart(date, id);
                                break;
                            case "money-bar-chart":
                                createBarChart(data, id);
                                break;
                        }
                        observer.unobserve(entry.target) // stop observing after loading
                    }
                });
            }, {threshold: 0.5} // trigger
        );

        document.querySelectorAll(".chart").forEach((chart) => {
            observer.observe(chart);
        })
    });
});