
// below is all the query selectors that are called from the html and stored in variable
var repsInput = document.querySelector('input.reps'),
    workoutInput = document.querySelector('input.workout'),
    restInput = document.querySelector('input.rest'),
    setsInput = document.querySelector('input.sets')
;

var repsSpan = document.querySelector('span.value.reps'),
    workoutSpan = document.querySelector('span.value.workout'),
    restSpan = document.querySelector('span.value.rest'),
    setsSpan = document.querySelector('span.value.sets')
;

var timerArea = document.querySelector('.timer'),
    setdone1Area = document.querySelector('.setdone1');
	setneed1Area = document.querySelector('.setneed1');
	startArea = document.querySelector('.start');

var isRunning;
var interval;

initValues();

initEvents();
// initvalues function is for range sliders
function initValues() {
  isRunning = false;

  repsInput.min = 5;
  workoutInput.min = 5;
  restInput.min = 5;
  setsInput.min = 1;

  repsInput.max = 25;
  workoutInput.max = 60;
  restInput.max = 30;
  setsInput.max = 10;

  repsInput.value = 0;
  workoutInput.value = 0;
  restInput.value = 0;
  setsInput.value = 0;

  repsSpan.innerHTML = repsInput.value;
  workoutSpan.innerHTML = workoutInput.value;
  restSpan.innerHTML = restInput.value;
  setsSpan.innerHTML = setsInput.value;

  timerArea.innerHTML = "0";
  setdone1Area.innerHTML = '0';
  setneed1Area.innerHTML = "0";
}

// initevents put the values of range on the side of the slider
function initEvents() {
  repsInput.oninput = function() {
    repsSpan.innerHTML = repsInput.value;
  };

  workoutInput.oninput = function() {
    workoutSpan.innerHTML = workoutInput.value;
  };

  restInput.oninput = function() {
    restSpan.innerHTML = restInput.value;
  };

  setsInput.oninput = function() {
    setsSpan.innerHTML = setsInput.value;
  };
// this will check if the timer is running or not according to which it will take action
  startArea.onclick = function() {
    if(!isRunning) {
      isRunning = true;
      runTabata(workoutInput.value, restInput.value, setsInput.value);
    } else {
      isRunning = false;
      clearInterval(interval);
      timerArea.innerHTML = 'Workout Stoped start it again';
    }
  };
}

// this will takes all the values and add up into the function to run the timer
function runTabata(workout, rest, sets) {
  var arrPeriods = [],
      index = 0
  ;

  for(var i = 0; i < sets; i++) {
    arrPeriods.push(workout);
    arrPeriods.push(rest);
  }

  runTimer(arrPeriods, index);
}

// this will run the timer by converting the values in to time type
function runTimer(arrPeriods, index) {
  var timeNow, timeFuture, timeDifference;

  timeFuture = new Date();
  timeFuture = timeFuture.getTime();
  timeFuture = timeFuture + arrPeriods[index] * 1000;

  interval = setInterval(function() {
    timeNow = new Date();
    timeDifference = Math.round((timeFuture - timeNow) / 1000) + 1;
// this is for the sets left and sets done
    timerArea.innerHTML = timeDifference;
    setdone1Area.innerHTML = Math.floor(((index + 1) / 2));
	setneed1Area.innerHTML = (arrPeriods.length) / 2;

    if(timeDifference === 1) {
      clearInterval(interval);
      if(index < arrPeriods.length-1) {
        index++;
        runTimer(arrPeriods, index);
      } else {
        initValues();
      }
    }
  }, 1000);
}
function goBack() {
    window.history.back();
}
