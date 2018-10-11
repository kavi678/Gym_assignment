var Day4Array = [];
// following init fuction will always run when the windw is open. it will take all the items from the local storage and give value to post on a page
function init() {
  if (localStorage.Add4) {
      Day4Array = JSON.parse(localStorage.Add4);
      for (var i = 0; i < Day4Array.length; i++) {
          prepareTableCell(Day4Array[i].exer4, Day4Array[i].mus4, Day4Array[i].se, Day4Array[i].re, Day4Array[i].we4 )



      }
  }

}
// add function will take the item from the text input and stores that values in a specific key named as Day1Array.

function add4() {
    var ex4 = document.getElementById("excersise4").value;
    var mu4 = document.getElementById("muscle4").value;
    var s4 = document.getElementById("set4").value;
    var r4 = document.getElementById("rep4").value;
    var w4 = document.getElementById("weight4").value;
    var stuObj = {exer4: ex4, mus4: mu4, se: s4, re: r4, we4: w4};
    Day4Array.push(stuObj);
    localStorage.Add4 = JSON.stringify(Day4Array);

    prepareTableCell(ex4, mu4, s4, r4, w4);

}
// following function will make a table and show all the value from the local storage in the rows.
function prepareTableCell(ex4, mu4, s4, r4, w4) {
    var table = document.getElementById("output4");
    var De1 = document.createElement('button');
    De1.innerHTML = 'Done';
    var row = table.insertRow();
    var ex4Cell = row.insertCell(0);
    var mu4Cell = row.insertCell(1);
    var s4Cell = row.insertCell(2);
    var r4Cell = row.insertCell(3);
    var w4Cell = row.insertCell(4);
    var d4Cell = row.insertCell(5);
    ex4Cell.innerHTML = ex4;
    mu4Cell.innerHTML = mu4;
    //firstNameCell.colSpan = 2;
    s4Cell.innerHTML = s4;
    r4Cell.innerHTML = r4;
    w4Cell.innerHTML = w4;
    d4Cell.appendChild(De1);

}
// dell function will delete that key from the local storage. Day1Array will be removes from it. when you add again any item it will create a new Day1Array list.
function del4() {

    localStorage.removeItem("Add4");

}
function goBack() {
    window.history.back();
}
