// Create Bar chart for 
export function createModelBarChart(data, containerId) {
    
    // set up dimensions and margins of the graph
    const container = document.getElementById(containerId);
    
    function getDimensions() {
        const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
        return {
            width: containerWidth,
            height: containerHeight > 400 ? containerHeight : 400 // Minimum height
        };
    }

    let { width, height } = getDimensions();
    const margin = { top: 30, right: 50, bottom: 150, left: 80 }
}