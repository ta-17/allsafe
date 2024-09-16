export function createLineChart(data, containerId) {
    console.log('Creating line chart...')

    // set up dimensions and margins of the graph
    const container = document.getElementById(containerId)
    const { width: containerWidth, height: containerHeight } =
        container.getBoundingClientRect()

    const lineMargin = { top: 50, right: 0, bottom: 100, left: 100 }
    const width = containerWidth
    const height = containerHeight
    const totalWidth = width * 15

    // aggregate data by month
    function aggData(data) {
        const grouped = d3.group(data, (d) => `${d.year}-${d.month}`)
        return Array.from(grouped, ([key, value]) => {
            const [year, month] = key.split('-').map(Number)
            const no_of_reports = d3.sum(value, (d) => d.no_of_reports)
            return {
                year,
                month,
                date: new Date(year, month - 1),
                no_of_reports,
            }
        })
    }

    // get data
    const monthData = aggData(data)
    const sortData = monthData.sort((a, b) => d3.ascending(a.date, b.date))

    // set x scale
    const x = d3
        .scaleTime()
        .domain(d3.extent(sortData, (d) => d.date))
        .range([lineMargin.left, totalWidth - lineMargin.right])

    // set y scale
    const y = d3
        .scaleLinear()
        .domain([0, d3.max(sortData, (d) => d.no_of_reports)])
        .nice()
        .range([height - lineMargin.bottom, lineMargin.top])

    // create line
    const line = d3
        .line()
        .x((d) => x(d.date))
        .y((d) => y(d.no_of_reports))
        .curve(d3.curveCatmullRom.alpha(0.5))

    // create y-axis svg
    const yAxisSvg = d3
        .create('svg')
        .attr('class', 'y-axis-svg')
        .attr('width', lineMargin.left)
        .attr('height', height)
        .style('position', 'absolute')
        .style('left', '0px') // Adjust to ensure it's always visible
        .style('top', '0px') // Adjust to ensure it's aligned properly

    // create y-axis
    const yAxis = d3.axisLeft(y).ticks(12)

    yAxisSvg
        .append('g')
        .attr(
            'transform',
            `translate(${lineMargin.left - 50}, ${lineMargin.bottom - 10})`
        )
        .call(yAxis)
        .style('font-size', '16px')
        .call((g) => g.select('.domain').remove())
        .call((g) =>
            g
                .append('text')
                .attr('x', -50)
                //.attr('y', -20)
                .style('font-size', '16px')
                .attr('fill', 'currentColor')
                .attr('text-anchor', 'start')
                .text('No of Reports')
        )

    // create main svg
    const mainSvg = d3
        .create('svg')
        .attr('class', 'chart-svg')
        .attr('width', totalWidth)
        .attr('height', height)
        .attr('viewBox', `0 0 ${totalWidth} ${height}`)

    // create x-axis
    const axis = fc
        .axisOrdinalBottom(x)
        .ticks(d3.timeMonth.every(1))
        .tickFormat(d3.timeFormat('%b %Y'))

    const xAxis = fc.axisLabelRotate(axis).labelRotate(30) // You can adjust this angle as needed

    mainSvg
        .append('g')
        .attr('transform', `translate(0,${height - lineMargin.bottom})`)
        .call(xAxis)
        .style('font-size', '20px')

    // define gradient
    const defs = mainSvg.append('defs')
    const gradientId = 'gradient-line-area'

    const gradient = defs
        .append('linearGradient')
        .attr('id', gradientId)
        .attr('x1', '0%')
        .attr('x2', '100%')
        .attr('y1', '50%')
        .attr('y2', '50%')

    // gradient start
    gradient.append('stop').attr('offset', '0%').attr('stop-color', '#f57c00')

    // gradient end
    gradient.append('stop').attr('offset', '100%').attr('stop-color', '#d32f2f')

    // draw the line
    const linePath = mainSvg
        .append('path')
        .datum(sortData)
        .attr('fill', 'none')
        .attr('stroke', `url(#${gradientId})`)
        .style('stroke-width', 5)
        .style('opacity', 0.4)
        .attr('d', line)

    // create area
    const area = d3
        .area()
        .x((d) => x(d.date))
        .y0(y(0))
        .y1((d) => y(d.no_of_reports))
        .curve(d3.curveCatmullRom.alpha(0.5))

    const areaPath = mainSvg
        .append('path')
        .datum(sortData)
        .attr('fill', `url(#${gradientId})`)
        .attr('stroke', 'none')
        .attr('d', area)
        .style('opacity', 0.2)

    // create dots
    const dots = mainSvg
        .append('g')
        .selectAll('circle')
        .data(sortData)
        .enter()
        .append('circle')
        .attr('class', 'line-chart-dot')
        .attr('r', 8)
        .attr('fill', '#d32f2f')
        .style('opacity', 0.8)
        .attr('cx', (d) => x(d.date))
        .attr('cy', (d) => y(d.no_of_reports))

    // set mouse event handler
    function handleMouseOver() {
        linePath.style('opacity', 0.8)
        dots.style('opacity', 0.5)
    }

    function handleMouseOut() {
        linePath.style('opacity', 0.4)
        dots.style('opacity', 0.8)
    }

    // update tooltip position
    function updateTooltipPosition(event) {
        tooltip
            .style('left', `${event.pageX + 5}px`)
            .style('top', `${event.pageY - 28}px`)
    }

    // get the tooltip data for area (sum the report numbers)
    function calculateTooltipData(data) {
        const minDate = d3.min(data, (d) => d.date)
        const maxDate = d3.max(data, (d) => d.date)
        const totalReports = d3.sum(data, (d) => d.no_of_reports)

        return {
            duration: `Duration: ${d3.timeFormat('%Y/%m')(minDate)} - ${d3.timeFormat('%Y/%m')(maxDate)}`,
            totalReports,
        }
    }

    // get tooltip
    const tooltip = d3
        .select('body')
        .append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0)

    // tooltip functions
    function showTooltip(event) {
        const data = sortData
        const tooltipData = calculateTooltipData(data)

        tooltip
            .style('opacity', 1)
            .html(
                `
                   ${tooltipData.duration}<br>
                   Total reports: ${formatNumber.format(tooltipData.totalReports)}
               `
            )
            .style('left', `${event.pageX + 5}px`)
            .style('top', `${event.pageY - 28}px`)
    }

    function hideTooltip() {
        tooltip.style('opacity', 0)
    }

    // tooltip events
    areaPath
        .on('mouseover', (event) => {
            showTooltip(event)
        })
        .on('mousemove', (event) => {
            updateTooltipPosition(event)
        })
        .on('mouseout', hideTooltip)

    dots.on('mouseover', (event, d) => {
        handleMouseOver()
        d3.select(event.currentTarget).style('opacity', 1)
        tooltip
            .style('opacity', 1)
            .html(
                `Date: ${d3.timeFormat('%b %Y')(d.date)}<br>Number of Reports: ${formatNumber.format(d.no_of_reports)}`
            )
            .style('left', `${event.pageX + 5}px`)
            .style('top', `${event.pageY - 28}px`)
    })
        .on('mousemove', (event) => {
            updateTooltipPosition(event)
        })
        .on('mouseout', () => {
            handleMouseOut()
            tooltip.style('opacity', 0)
        })

    // update report number format
    const formatNumber = new Intl.NumberFormat()

    // append the svg to the container
    container.appendChild(mainSvg.node())
    container.appendChild(yAxisSvg.node())

    // set scrolling
    container.style.overflowX = 'auto'
    container.style.overflowY = 'hidden'
    container.style.whiteSpace = 'nowrap'

    // set main svg width
    mainSvg.style('width', `${totalWidth}px`)

    // get right most data
    const rightmostDate = d3.max(sortData, (d) => d.date)

    // get pixel position
    const scrollToDate = x(rightmostDate)

    // get container central position
    const containerCenter = width / 2
    container.scrollLeft = scrollToDate - containerCenter + lineMargin.left

    // ensure scrolling correctly after a slight delay
    setTimeout(() => {
        container.scrollLeft = scrollToDate - containerCenter + lineMargin.left
    }, 100)
}
