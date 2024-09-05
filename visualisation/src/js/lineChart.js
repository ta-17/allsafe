// create line chart
export function createLineChart(data, containerId) {
    console.log("Creating line chart...")

    // set up dimensions and margins of the graph
    const container = document.getElementsById(containerId);
    const { width: containerWidth, height: containerHeight } = 
        container.getBoundingClientRect();
    
    const lineMargin = { top: 20, right: 20, bottom: 20, left: 20 }
    const width = containerWidth - lineMargin.left - lineMargin.right;
    const height = containerHeight - lineMargin.top - lineMargin.bottom;

    // get data




}