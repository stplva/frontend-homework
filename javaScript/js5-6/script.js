//vars to hold time values
var mseconds = 0;
	seconds = 0,
	minutes = 0,
	hours = 0;

//vars to hold "display" values
var displayMseconds = 0,
	displaySeconds = 0,
	displayMinutes = 0,
	displayHours = 0;

//vars to hold setInterval() function
var interval = null;

//vars to hold stopwatch status
var status = "stopped";

//vars to hold buttons
var startPauseButton = document.querySelector("#startPauseButton"),
	resetButton = document.querySelector("#resetButton"),
	splitButton = document.querySelector("#splitButton"),
	splitItems = document.querySelector(".splitItems");

var display = document.querySelector("#display");



//stopwatch function
function stopWatch () {

	mseconds++;

	//logic to determine when to increment next value
	if (mseconds / 100 === 1) {
		mseconds = 0;
		seconds++;

		if(seconds / 60 === 1) {
			seconds = 0;
			minutes++;

			if(minutes / 60 === 1) {
				minutes = 0;
				hours++;
			}
		}

	}


	//if seconds/minutes/hours are only one digit, add a leading 0t to the value

	if(mseconds < 10){
		displayMseconds = "0" + mseconds.toString();
	} else {
		displayMseconds = mseconds.toString();
	}
	if(seconds < 10){
		displaySeconds = "0" + seconds.toString();
	} else {
		displaySeconds = seconds;
	}

	if(minutes < 10){
		displayMinutes = "0" + minutes.toString();
	} else {
		displayMinutes = minutes;
	}

	if(hours < 10){
		displayHours = "0" + hours.toString();
	} else {
		displayHours = hours;
	}

	//display updated time values
	display.innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + "." + displayMseconds;
	document.title = displayHours + ":" + displayMinutes + ":" + displaySeconds + " / Stopwatch";
}


//startPause function
function startPause () {

	if(status === "stopped") {

		interval = window.setInterval(stopWatch, 10);
		startPauseButton.innerHTML = "Pause";
		startPauseButton.classList.remove("continue");
		resetButton.classList.remove("display");
		splitButton.classList.add("display");
		status = "started";

	} else {

		window.clearInterval(interval);
		startPauseButton.innerHTML = "Continue";
		startPauseButton.classList.add("continue");
		resetButton.classList.add("display");
		splitButton.classList.remove("display");
		status = "stopped";
	}

}


// split function
function split() {

	splitItems.classList.add("display");
	appendSplit();

	//delete item function
	var deleteButtons = document.querySelectorAll(".deleteButton");
	deleteButtons.forEach( function (item) {

		item.addEventListener("click", function() {
			var tr = item.closest(".added");
			tr.remove();
		});

	});

}


// append split items function
function appendSplit() {

	//create <tr> with the elapsed time
	var splitItem = document.createElement("tr");
	splitItem.classList.add("splitItem", "added");

	var tdButton = document.createElement("td"),
		tdTime = document.createElement("td"),
		tdInput = document.createElement("td");

	var deleteBtn = document.createElement("button");
	deleteBtn.type = "button";
	deleteBtn.classList.add("pure-button", "deleteButton");
	deleteBtn.innerHTML = "x";

	var inputNote = document.createElement("input");
	inputNote.type = "text";
	inputNote.placeholder = "your note";

	//get current time
	tdTime.innerHTML = display.innerHTML;

	//append childs into the table
	document.querySelector("tbody").appendChild(splitItem);
	splitItem.append(tdButton, tdTime, tdInput);
	tdButton.appendChild(deleteBtn);
	tdInput.appendChild(inputNote);

}


// reset function
function reset() {

	window.clearInterval(interval);
	mseconds = 0;
	seconds = 0;
	minutes = 0;
	hours = 0;
	status = "stopped";
	display.innerHTML = "00:00:00.00";

	startPauseButton.innerHTML = "Start";
	startPauseButton.classList.remove("continue");
	resetButton.classList.remove("display");

	splitItems.classList.remove("display");

	document.querySelectorAll(".added").forEach(function (item) {
		item.remove();
	});

	document.title = "Stopwatch";

}


// run functions when click on buttons
startPauseButton.addEventListener('click', startPause);
resetButton.addEventListener('click', reset);
splitButton.addEventListener('click', split);