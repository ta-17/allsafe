// create bar chart
export function createBarChart(data, containerId) {
    console.log("Creating bar chart...")

    // set up dimensions and margins of the graph
    const container = document.getElementsById(containerId);
    const { width: containerWidth, height: containerHeight } = 
        container.getBoundingClientRect();

    const margin = { top: 20, right: 20, bottom: 20, left: 20 }
    const widthBar = containerWidth - margin.left - margin.right;
    const heightBar = containerHeight - margin.top - margin.bottom;

    // get data
}