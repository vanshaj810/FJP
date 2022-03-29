const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";
request(link, cb);
function cb(error, response, body) {
    if (error) {
        console.error("error:", error); // Print the error if one occurred
    } else {
        const dom = new JSDOM(body);
        // console.log("body:", body); // Print the HTML for the Google homepage.
        const document = dom.window.document;
        let batsman = document.querySelectorAll(".batsman-cell.text-truncate.out a");
        for (let i = 0; i < batsman.length; i++) {
            let batsmanlink = batsman[i].href;
            let completeBatsmanLink = "https://www.espncricinfo.com" + batsmanlink;
            // console.log(completeBatsmanLink);
            request(completeBatsmanLink, cb2);

        }
    }
}
function cb2(error, response, body) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(body);
        const document = dom.window.document;
        let PlayerDetail = document.querySelector(".player-card-padding .player_overview-grid");
        let PlayterH5 = PlayerDetail.querySelectorAll("div h5")
        let playerName = PlayterH5[0].textContent;
        let DOB = PlayterH5[1].textContent;
        console.log("Full Name : ", playerName, " Date of Birth : ", DOB);
    }
}