

var chart = [];

function init() {
    if (localStorage.health) {
        chart = JSON.parse(localStorage.health);
        for (var i = 0; i < chart.length; i++) {
            prepareTableCell(chart[i].Value, chart[i].hd)



        }
    }
}


function h2() {
    var value = document.getElementById("valueInput").value;
    var d = new Date();
    var stuObj = {Value: value, hd: d};
    chart.push(stuObj);

    localStorage.health = JSON.stringify(chart);

    prepareTableCell(value, d)
    location.reload();
}

function prepareTableCell(value, d) {
    var table = document.getElementById("outputTable");
    var De2 = document.createElement('button');
    De2.innerHTML = 'Done';
    var row = table.insertRow();
    var valueCell = row.insertCell(0);
    var dCell = row.insertCell(1);

    var dhCell = row.insertCell(2);

    valueCell.innerHTML = value;
    dCell.innerHTML = d;

    dhCell.appendChild(De2);
}
function delh() {

    localStorage.removeItem("health");

}
