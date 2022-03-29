const request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";
request(link, cb);
function cb(error, response, body) {
    if (error) {
        console.log(error);
    } else {
        // console.log(body);
        const dom = new JSDOM(body);
        const document = dom.window.document;
        let maxwic = 0;
        let Name_Of_Highest_Wicket_Taker = "";
        let bowlersTable = document.querySelectorAll(".table.bowler");
        for (let i = 0; i < bowlersTable.length; i++) {
            let rows = bowlersTable[i].querySelectorAll("tbody tr");
            // console.log(rows.length);
            for (let j = 0; j < rows.length; j++) {
                let tds = rows[j].querySelectorAll("td");
                if (tds.length > 1) {
                    let name = tds[0].textContent;

                    let wicket = tds[4].textContent;

                    // console.log("Name ----->",name,"\t","Wicket ----->",wicket);
                    // console.log(name.length);
                    if (maxwic <= wicket) {
                        maxwic = wicket;
                        Name_Of_Highest_Wicket_Taker = name;
                    }

                }

            }

        }
        console.log("Name of the hightest wicket taker -----> ", Name_Of_Highest_Wicket_Taker);
        console.log("Max Wicket taken -----> ", maxwic);
    }
}