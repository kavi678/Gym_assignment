var Day2Array = [];

function init() {
    if (localStorage.Add2) {
        Day2Array = JSON.parse(localStorage.Add2);
        for (var i = 0; i < Day2Array.length; i++) {
            prepareTableCell(Day2Array[i].exer2, Day2Array[i].mus2, Day2Array[i].se, Day2Array[i].re, Day2Array[i].we2 )



        }
    }
}


function add2() {
    var ex2 = document.getElementById("excersise2").value;
    var mu2 = document.getElementById("muscle2").value;
    var s2 = document.getElementById("set2").value;
    var r2 = document.getElementById("rep2").value;
    var w2 = document.getElementById("weight2").value;
    var stuObj = {exer2: ex2, mus2: mu2, se: s2, re: r2, we2: w2};
    Day2Array.push(stuObj);

    localStorage.Add2 = JSON.stringify(Day2Array);

    prepareTableCell(ex2, mu2, s2, r2, w2)
    location.reload();
}

function prepareTableCell(ex2, mu2, s2, r2, w2) {
    var table = document.getElementById("output2");
    var De2 = document.createElement('button');
    De2.innerHTML = 'Done';
    var row = table.insertRow();
    var ex2Cell = row.insertCell(0);
    var mu2Cell = row.insertCell(1);
    var s2Cell = row.insertCell(2);
    var r2Cell = row.insertCell(3);
    var w2Cell = row.insertCell(4);
    var d2Cell = row.insertCell(5);

    ex2Cell.innerHTML = ex2;
    mu2Cell.innerHTML = mu2;
    //firstNameCell.colSpan = 2;
    s2Cell.innerHTML = s2;
    r2Cell.innerHTML = r2;
    w2Cell.innerHTML = w2;
    d2Cell.appendChild(De2);
}
function del2() {

    localStorage.removeItem("Add2");

}
