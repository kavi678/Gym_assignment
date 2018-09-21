var Day2Array = [];
// following init fuction will always run when the windw is open. it will take all the items from the local storage and give value to post on a page
function init() {
    if (localStorage.Add2) {
        Day2Array = JSON.parse(localStorage.Add2);
        for (var i = 0; i < Day2Array.length; i++) {
            prepareTableCell(Day2Array[i].exer2, Day2Array[i].mus2, Day2Array[i].se, Day2Array[i].re, Day2Array[i].we2 )



        }
    }
}

// add function will take the item from the text input and stores that values in a specific key named as Day1Array.
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
// following function will make a table and show all the value from the local storage in the rows.
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
// dell function will delete that key from the local storage. Day1Array will be removes from it. when you add again any item it will create a new Day1Array list.
function del2() {

    localStorage.removeItem("Add2");

}
