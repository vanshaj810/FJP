const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
request(link, cb);
function cb(error, response, body) {
    if (error) {
        console.error("error:", error); // Print the error if one occurred
    } else {
        const dom = new JSDOM(body);
        const document = dom.window.document;
        let scorecardlink = document.querySelectorAll('a[data-hover="Scorecard"]');
        for (let i = 0; i < scorecardlink.length; i++) {
            let link = scorecardlink[i].href;
            let completelink = "https://www.espncricinfo.com" + link;
            request(completelink, cb2);

        }
    }
}
function cb2(error, response, body) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(body);
        const document = dom.window.document;
        let batsmanRow = document.querySelectorAll(".table.batsman tbody tr");
        for (let i = 0; i < batsmanRow.length; i++) {
            let cells = batsmanRow[i].querySelectorAll("td");
            if (cells.length == 8) {
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let ball = cells[3].textContent;
                let four = cells[5].textContent;
                let six = cells[6].textContent;
                // console.log("Name : ", name, "\t", "Runs : ", runs, "\t", "Balls : ", ball, "\t", "Fours : ", four, "\t", "Sixes : ", six);
            }

        }
    }
}