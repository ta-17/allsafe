import { parseData } from './data.js'
import { createLineChart } from './js/lineChart.js'
import { createSunburstChart } from './js/sunburstChart.js'
import { createBarChart } from './js/barChart.js'
import { createModelBarChart } from './js/ModelbarChart.js'

// let selectedLevel2Category = null;

let originalData // Store the original dataset globally for filtering
let wordFrequencyDict = {}

console.log('script.js is loaded')

// document.addEventListener('DOMContentLoaded', () => {
console.log('Historical Scam Information Page Loaded')

// Load word percentage JSON data
d3.json('/visualisation/word_percentage.json')
    .then((data) => {
        console.log('Word Frequency Data Loaded:', data)
        wordFrequencyDict = data // Store the word frequency dictionary
    })
    .catch((error) => {
        console.error('Error loading word frequency data:', error)
    })

// Load the dataset
d3.csv('/visualisation/historical_scam.csv')
    .then((data) => {
        originalData = data // Store the original dataset

        parseData(data)
        renderCharts(data)

        // Add drop-down event listener for year selection (affect only Sunburst and Bar chart)

        function updateChartsBasedOnSelection() {
            const selectedYear = document.getElementById('year-dropdown').value

            let filteredData
            if (selectedYear === '2024') {
                // Filter data for the year 2024
                filteredData = originalData.filter((d) => d.year === 2024)
            } else {
                // Use all data when "All" is selected
                filteredData = originalData
            }

            // Log filtered data to verify it's correct
            console.log(`Filtered Data for ${selectedYear}:`, filteredData)

            // Clear and re-render ONLY the Sunburst and Bar charts with the filtered data
            updateSunburstAndBarCharts(filteredData)
        }

        updateChartsBasedOnSelection()

        document
            .getElementById('year-dropdown')
            .addEventListener('change', function () {
                console.log('Year selected:', this.value)
                const selectedYear = this.value
                let filteredData
                if (selectedYear === '2024') {
                    // Filter data for the year 2024
                    filteredData = originalData.filter((d) => d.year === 2024)
                } else {
                    // Use all data when "All" is selected
                    filteredData = originalData
                }

                // Log filtered data to verify it's correct
                console.log(`Filtered Data for ${selectedYear}:`, filteredData)

                // Clear and re-render ONLY the Sunburst and Bar charts with the filtered data
                updateSunburstAndBarCharts(filteredData)
            })

        // Regenerate the graphs when resizing the window
        window.addEventListener('resize', () => renderCharts(originalData))

        // Initialize the carousel
        initCarousel('.line-carousel-item', 'line-prev', 'line-next')
        initCarousel(
            '.wordCloud-carousel-item',
            'wordCloud-prev',
            'wordCloud-next'
        )
        initCarousel('.top5-carousel-item', 'top5-prev', 'top5-next')
    })
    .catch((error) => {
        console.error('Error loading or parsing data:', error)
    })

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

// Add event listener for user input (assumes an input form with id 'scam-input-form')
document
    .getElementById('scam-input-form')
    .addEventListener('submit', async function (event) {
        event.preventDefault()

        if (Object.keys(wordFrequencyDict).length === 0) {
            console.error('Word Frequency Dictionary is not yet loaded')
            return
        }

        // Get the input value
        const scamExperience = document.getElementById('scam-experience').value

        // Process the input (this function would split and count word frequency)
        const wordFrequency = calculateWordFrequency(
            scamExperience,
            wordFrequencyDict
        ) // Pass wordFrequencyDict

        // Log the word frequency to ensure it's correct
        console.log('Word Frequency Data:', wordFrequency)

        // Clear the existing model bar chart if necessary
        d3.select('#model-bar-chart').selectAll('*').remove()

        // Render the new bar chart based on the input
        createModelBarChart(wordFrequency, 'model-bar-chart')
        console.log('It is finished')
    })
// })

// Function to update only Sunburst and Bar Charts with filtered data
function updateSunburstAndBarCharts(filteredData) {
    console.log('Filtered Data for 2024:', filteredData) // Log the filtered data

    // Clear existing charts for Sunburst and Bar charts
    d3.select('#sunburst-chart').selectAll('*').remove()
    d3.select('#bar-chart').selectAll('*').remove()

    // Re-create the Sunburst and Bar charts with the filtered data
    createSunburstChart(filteredData, 'sunburst-chart')
    createBarChart(filteredData, 'bar-chart')
}

// Funtion to create new charts for initalise charts usage
function renderCharts(data) {
    // Clear existing charts before rendering
    d3.select('#line-chart').selectAll('*').remove()
    d3.select('#sunburst-chart').selectAll('*').remove()
    d3.select('#bar-chart').selectAll('*').remove()

    createLineChart(data, 'line-chart')
    createSunburstChart(data, 'sunburst-chart')
    createBarChart(data, 'bar-chart')
}

// Function to initialize a specific carousel
function initCarousel(carouselSelector, prevButtonId, nextButtonId) {
    const items = document.querySelectorAll(carouselSelector)
    let currentIndex = 0

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index) // Show only the current card
        })
    }

    document.getElementById(nextButtonId).addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length // Move to next item
        showItem(currentIndex)
    })

    document.getElementById(prevButtonId).addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length // Move to previous item
        showItem(currentIndex)
    })

    // Initial with the first card
    showItem(currentIndex)
}

// Function to calculate word frequency from user input and match against the word frequency dictionary
function calculateWordFrequency(input, wordFrequencyDict) {
    const words = input.split(/\s+/) // Tokenize input by splitting on spaces
    const matchedWords = {}

    // Check each word if it exists in the pre-existing word frequency dictionary
    words.forEach((word) => {
        const sanitizedWord = word.toLowerCase().replace(/[^\w]/g, '') // Sanitize word
        if (sanitizedWord && wordFrequencyDict[sanitizedWord]) {
            matchedWords[sanitizedWord] = (matchedWords[sanitizedWord] || 0) + 1
        }
    })

    // Return array of matched words with their frequencies and percentages
    return Object.keys(matchedWords).map((word) => ({
        word: word,
        frequency: wordFrequencyDict[word], // Use the percentage from the original dictionary
    }))
}
