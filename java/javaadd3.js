var Day3Array = [];
// following init fuction will always run when the windw is open. it will take all the items from the local storage and give value to post on a page
function init() {
  if (localStorage.Add3) {
      Day3Array = JSON.parse(localStorage.Add3);
      for (var i = 0; i < Day3Array.length; i++) {
          prepareTableCell(Day3Array[i].exer3, Day3Array[i].mus3, Day3Array[i].se, Day3Array[i].re, Day3Array[i].we3 )



      }
  }

}
// add function will take the item from the text input and stores that values in a specific key named as Day1Array.

function add3() {
    var ex3 = document.getElementById("excersise3").value;
    var mu3 = document.getElementById("muscle3").value;
    var s3 = document.getElementById("set3").value;
    var r3 = document.getElementById("rep3").value;
    var w3 = document.getElementById("weight3").value;
    var stuObj = {exer3: ex3, mus3: mu3, se: s3, re: r3, we3: w3};
    Day3Array.push(stuObj);
    localStorage.Add3 = JSON.stringify(Day3Array);

    prepareTableCell(ex3, mu3, s3, r3, w3);

}
// following function will make a table and show all the value from the local storage in the rows.
function prepareTableCell(ex3, mu3, s3, r3, w3) {
    var table = document.getElementById("output3");
    var row = table.insertRow();
    var ex3Cell = row.insertCell(0);
    var mu3Cell = row.insertCell(1);
    var s3Cell = row.insertCell(2);
    var r3Cell = row.insertCell(3);
    var w3Cell = row.insertCell(4);
    ex3Cell.innerHTML = ex3;
    mu3Cell.innerHTML = mu3;
    //firstNameCell.colSpan = 2;
    s3Cell.innerHTML = s3;
    r3Cell.innerHTML = r3;
    w3Cell.innerHTML = w3;

}
// dell function will delete that key from the local storage. Day1Array will be removes from it. when you add again any item it will create a new Day1Array list.
function del3() {

    localStorage.removeItem("Add3");

}
function goBack() {
    window.history.back();
}
