// Shorteren the scam type names
const rename = new Map([
    ["Investment scams", "Investment"],
    ["Dating and romance", "Dating and Romance"],
    ["Jobs and employment", "Jobs and Employment"],
    ["Buying or selling", "Buying or Selling"],
    ["Attempts to gain your personal information", "Gain personal information"]
  ]);

export function parseData(data) {
    data.forEach((d) => {

        // get year & month
        const date = new Date(d.date);
        d.year = date.getFullYear();
        d.month = date.getMonth() + 1;

        // d.state = d.state;
        // d.age = d.age;
        // d.gender = d.gender;
        d.category_level2 = rename.get(d.category_level2) || d.category_level2; // Rename scam types
        d.category_level3 = d.category_level3;
        d.amount = +d.amount;
        d.no_of_reports = +d.no_of_reports;
    
    // console.log("Parsed data:", data);
    });
}