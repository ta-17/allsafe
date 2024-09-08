export function parseData(data) {
    data.forEach((d) => {

        // get year & month
        const date = new Date(d.date);
        d.year = date.getFullYear();
        d.month = date.getMonth() + 1;

        d.state = d.state;
        d.age = d.age;
        d.gender = d.gender;
        d.category_level2 = d.category_level2;
        d.category_level3 = d.category_level3;
        d.amount = +d.amount;
        d.no_of_reports = +d.no_of_reports;
    
    // console.log("Parsed data:", data);
    });
}