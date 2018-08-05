// Declarations and selectors
var numSquares = 9; 
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// Executing init function
init();
// Run everything within init function at runtime
function init() {
	setupModeButtons();
	setupSquares();
	reset();
}
// Select mode event listeners
function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			} else if(this.textContent === "Medium") {
				numSquares = 6;
			} else {
				numSquares = 9;
			}
			reset();
		});
 	}
}
// Select square event listeners
function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "rgb(46, 25, 83)";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}
// Resets game when mode buttons are pressed or won
function reset() {
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		messageDisplay.textContent = "";
		resetButton.textContent = "New Colors";
		for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "rgb(117, 238, 70)";
}
// Reset button event listener
resetButton.addEventListener("click", function() {
	reset();
});
// Change all square to be the same as the clicked color when won
function changeColor(color) {
 for (var i = 0; i < squares.length; i++) {
 	squares[i].style.backgroundColor = color;
 }
}
// Picks a new random number from array
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
// Generates all random colors with an argument
function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}
// Creates random color from each rgb color from 0 - 255
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	// Returns a string to randomColor
	return "rgb(" + r + ", " + g + ", " + b + ")";
}