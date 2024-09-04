export function parseData(data) {
    data.forEach((d) => {
        d.date = +d.date;
        d.state = +d.state;
        d.age = +d.age;
        d.gender = +d.gender;
        d.category_level2 = +d.category_level2;
        d.category_level3 = +d.category_level3;
        d.amount = +d.amount;
        d.no_of_reports = +d.no_of_reports;
    })
}