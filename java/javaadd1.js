var Day1Array = [];

function init() {
    if (localStorage.Add1) {
        Day1Array = JSON.parse(localStorage.Add1);
        for (var i = 0; i < Day1Array.length; i++) {
            prepareTableCell(Day1Array[i].exer1, Day1Array[i].mus1, Day1Array[i].se, Day1Array[i].re, Day1Array[i].we1 )



        }
    }
}


function add1() {
    var ex1 = document.getElementById("excersise1").value;
    var mu1 = document.getElementById("muscle1").value;
    var s1 = document.getElementById("set1").value;
    var r1 = document.getElementById("rep1").value;
    var w1 = document.getElementById("weight1").value;
    var stuObj = {exer1: ex1, mus1: mu1, se: s1, re: r1, we1: w1};
    Day1Array.push(stuObj);
    localStorage.Add1 = JSON.stringify(Day1Array);

    prepareTableCell(ex1, mu1, s1, r1, w1);

}

function prepareTableCell(ex1, mu1, s1, r1, w1) {
    var table = document.getElementById("output1");
    var De1 = document.createElement('button');
    De1.innerHTML = 'Done';
    var row = table.insertRow();
    var ex1Cell = row.insertCell(0);
    var mu1Cell = row.insertCell(1);
    var s1Cell = row.insertCell(2);
    var r1Cell = row.insertCell(3);
    var w1Cell = row.insertCell(4);
    var d1Cell = row.insertCell(5);
    ex1Cell.innerHTML = ex1;
    mu1Cell.innerHTML = mu1;
    //firstNameCell.colSpan = 2;
    s1Cell.innerHTML = s1;
    r1Cell.innerHTML = r1;
    w1Cell.innerHTML = w1;
    d1Cell.appendChild(De1);

}
function del1() {

    localStorage.removeItem("Add1");

}
