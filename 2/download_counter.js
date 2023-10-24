

/* download counter script */
var daily_results = 17280;
var start_time = new Date("Nov 24, 2007").getTime() / 1000;
var cur_time = new Date().getTime() / 1000;
var days = ((cur_time - start_time) / 86400);
var results = days * daily_results;

setInterval("resultTick()", Math.round(86400 / daily_results) * 1000);


function resultTick() {
    results = results + 1;
    if (document.getElementById("resultText")) {
        document.getElementById('resultText').innerHTML = addCommas(Math.round(results)) + '+';
    }
    if (document.getElementById("resultText1")) {
        document.getElementById('resultText1').innerHTML = addCommas(Math.round(results)) + '+';
    }
    if (document.getElementById("resultText2")) {
        document.getElementById('resultText2').innerHTML = addCommas(Math.round(results));
    }
}

function resultTickNew() {
    results = results + 1;
    results = addCommas(Math.round(results));

}