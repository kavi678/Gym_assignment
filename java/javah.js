

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
function mybpm() {
    var x = document.getElementById("bpm111");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function mywoman() {
    var x = document.getElementById("womanhide");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myman() {
    var x = document.getElementById("manhide");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function mycal() {
    var x = document.getElementById("mhide");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//claculatemanBMR function will calculate the BMR with some mathematics techniques
(function () {
	function calculatemanBMR(manWeight, manHeight, manAge) {
		manWeight = parseFloat(manWeight);
		manHeight = parseFloat(manHeight);
		manAge = parseFloat(manAge);
		return ((manWeight * 10) + (manHeight * 6.25) - (manAge *5) + 5);
	}

	var manBMR = document.getElementById("manBMR");
	if (manBMR) {
		manBMR.onsubmit = function () {
			this.result.value = calculatemanBMR(this.manWeight.value, this.manHeight.value, this.manAge.value);
			return false;
		};
	}
}());



//claculatewomanBMR function will calculate the BMR with some mathematics techniques
(function () {
	function calculatewomanBMR(womanWeight, womanHeight, womanAge) {
		womanWeight = parseFloat(womanWeight);
		womanHeight = parseFloat(womanHeight);
		womanAge = parseFloat(womanAge);
		return ((womanWeight * 10) + (womanHeight * 6.25) - (womanAge *5) - 161);
	}

	var womanBMR = document.getElementById("womanBMR");
	if (womanBMR) {
		womanBMR.onsubmit = function () {
			this.result.value = calculatewomanBMR(this.womanWeight.value, this.womanHeight.value, this.womanAge.value);
			return false;
		};
	}
}());


(function () {
	function MacrosToCalories(proteins, carbs, fats) {
		proteins = parseFloat(proteins);
		carbs = parseFloat(carbs);
		fats = parseFloat(fats);
		return ((proteins * 4) + (carbs * 4) + (fats * 9));
	}

	var calculateMacros = document.getElementById("calculateMacros");
	if (calculateMacros) {
		calculateMacros.onsubmit = function () {
			this.result.value = MacrosToCalories(this.proteins.value, this.carbs.value, this.fats.value);
			return false;
		};
	}
}());
function goBack() {
    window.history.back();
}
