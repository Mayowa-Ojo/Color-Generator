var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");
var display = document.getElementById("display");

easyButton.addEventListener("click", function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
			full1 = square1();
			full2 = square2();
			full3 = square3();
});

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
			full1 = square1();
			full2 = square2();
			full3 = square3();
			full4 = square4();
			full5 = square5();
			full6 = square6();
});


// resetButton.addEventListener("click", function(){
// 	// generate all new colors
// 	colors = generateRandomColors(numSquares);
// 	// pick a new random color from array
// 	pickedColor = pickColor();
// 	// change colorDisplay to match picked color
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	this.textContent = "Refresh";
// 	// change colors of squares
// 	for(var i = 0; i < squares.length; i++){
// 	squares[i].style.background = colors[i];
// 	}
// 	h1.style.background = "steelblue";
// });

// colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){	
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";	
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	display.textContent = "";
	
	if(numSquares < 4){
			full1 = square1();
			full2 = square2();
			full3 = square3();
		} else{
			full1 = square1();
			full2 = square2();
			full3 = square3();
			full4 = square4();
			full5 = square5();
			full6 = square6();
		}
	
});

// colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];
	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.background;		
	});
}

// This function picks a random color square from the generated colors
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// repeat num times
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor())		
	}
	// return that array
	return arr;
}

// To generate the random colors
function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256)
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Square 1
function square1(){
	var randomString1 = colors[0];
	var randomArray1 = randomString1.replace('rgb(', '');
	var randArray1 = randomArray1.replace(')', '');

	var randomColor1 = randArray1;
	var array1 = JSON.parse("[" + randomColor1 + "]");
	var red1 = array1[0];
	var green1 = array1[1];
	var blue1 = array1[2];

	var rgbToHex1 = function(rgb) {
    var hex1 = Number(rgb).toString(16);
    if (hex1.length < 2) {
        hex1 = "0" + hex1;
    }
    return hex1;
	};

// This function coverts all three parts using the previous function
	var fullHex1 = function(r,g,b) {
	var red11 = rgbToHex1(red1);
	var green11 = rgbToHex1(green1);
	var blue11 = rgbToHex1(blue1);
	return "Hex Code: " + "#"+red11+green11+blue11;
	}
	return fullHex1;
}
	var full1 = square1()
	squares[0].addEventListener("click", function(){
	display.textContent = full1();
		
	});


// Square 2
function square2(){
	var randomString2 = colors[1];
	var randomArray2 = randomString2.replace('rgb(', '');
	var randArray2 = randomArray2.replace(')', '');

	var randomColor2 = randArray2;
	var array2 = JSON.parse("[" + randomColor2 + "]");
	var red2 = array2[0];
	var green2 = array2[1];
	var blue2 = array2[2];

	var rgbToHex2 = function(rgb) {
    var hex2 = Number(rgb).toString(16);
    if (hex2.length < 2) {
        hex2 = "0" + hex2;
    }
    return hex2;
};

// This function coverts all three parts using the previous function
var fullHex2 = function(r,g,b) {
	var red12 = rgbToHex2(red2);
	var green12 = rgbToHex2(green2);
	var blue12 = rgbToHex2(blue2);
	return "Hex Code: " + "#"+red12+green12+blue12;
	}
	return fullHex2;
}
	var full2 = square2();
	squares[1].addEventListener("click", function(){
	display.textContent = full2();
		
	});

// // Square 3
function square3(){	
	var randomString3 = colors[2];
	var randomArray3 = randomString3.replace('rgb(', '');
	var randArray3 = randomArray3.replace(')', '');

	var randomColor3 = randArray3;
	var array3 = JSON.parse("[" + randomColor3 + "]");
	var red3 = array3[0];
	var green3 = array3[1];
	var blue3 = array3[2];

	var rgbToHex3 = function(rgb) {
    var hex3 = Number(rgb).toString(16);
    if (hex3.length < 2) {
        hex3 = "0" + hex3;
    }
    return hex3;
};

// This function coverts all three parts using the previous function
var fullHex3 = function(r,g,b) {
	var red13 = rgbToHex3(red3);
	var green13 = rgbToHex3(green3);
	var blue13 = rgbToHex3(blue3);
	return "Hex Code: " + "#"+red13+green13+blue13;
	}
	return fullHex3
}
	var full3 = square3();
	squares[2].addEventListener("click", function(){
	display.textContent = full3();
		
	});

// // Square 4
function square4(){	
	var randomString4 = colors[3];
	var randomArray4 = randomString4.replace('rgb(', '');
	var randArray4 = randomArray4.replace(')', '');

	var randomColor4 = randArray4;
	var array4 = JSON.parse("[" + randomColor4 + "]");
	var red4 = array4[0];
	var green4 = array4[1];
	var blue4 = array4[2];

	var rgbToHex4 = function(rgb) {
    var hex4 = Number(rgb).toString(16);
    if (hex4.length < 2) {
        hex4 = "0" + hex4;
    }
    return hex4;
};

// This function coverts all three parts using the previous function
var fullHex4 = function(r,g,b) {
	var red14 = rgbToHex4(red4);
	var green14 = rgbToHex4(green4);
	var blue14 = rgbToHex4(blue4);
	return "Hex Code: " + "#"+red14+green14+blue14;
	}
	return fullHex4
}
	var full4 = square4();
	squares[3].addEventListener("click", function(){
	display.textContent = full4();
		
	});

// // Square 5
function square5(){	
	var randomString5 = colors[4];
	var randomArray5 = randomString5.replace('rgb(', '');
	var randArray5 = randomArray5.replace(')', '');

	var randomColor5 = randArray5;
	var array5 = JSON.parse("[" + randomColor5 + "]");
	var red5 = array5[0];
	var green5 = array5[1];
	var blue5 = array5[2];

	var rgbToHex5 = function(rgb) {
    var hex5 = Number(rgb).toString(16);
    if (hex5.length < 2) {
        hex5 = "0" + hex5;
    }
    return hex5;
};

// This function coverts all three parts using the previous function
var fullHex5 = function(r,g,b) {
	var red15 = rgbToHex5(red5);
	var green15 = rgbToHex5(green5);
	var blue15 = rgbToHex5(blue5);
	return "Hex Code: " + "#"+red15+green15+blue15;
	}
	return fullHex5
}
	var full5 = square5();
	squares[4].addEventListener("click", function(){
	display.textContent = full5();
		
	});

// // Square 6
function square6(){	
	var randomString6 = colors[5];
	var randomArray6 = randomString6.replace('rgb(', '');
	var randArray6 = randomArray6.replace(')', '');

	var randomColor6 = randArray6;
	var array6 = JSON.parse("[" + randomColor6 + "]");
	var red6 = array6[0];
	var green6 = array6[1];
	var blue6 = array6[2];

	var rgbToHex6 = function(rgb) {
    var hex6 = Number(rgb).toString(16);
    if (hex6.length < 2) {
        hex6 = "0" + hex6;
    }
    return hex6;
};

// This function coverts all three parts using the previous function
var fullHex6 = function(r,g,b) {
	var red16 = rgbToHex6(red6);
	var green16 = rgbToHex6(green6);
	var blue16 = rgbToHex6(blue6);
	return "Hex Code: " + "#"+red16+green16+blue16;
	}
	return fullHex6
}
	var full6 = square6();
	squares[5].addEventListener("click", function(){
	display.textContent = full6();
		
	});




// // Code for hex conversion

// // This function converts the value of one rgb part to 2-digit hex 
// var rgbToHex = function(rgb) {
//     var hex = Number(rgb).toString(16);
//     if (hex.length < 2) {
//         hex = "0" + hex;
//     }
//     return hex;
// };

// // This function coverts all three parts using the previous function
// var fullRGB = function(r,g,b) {
// 	var red = rgbToHex(r);
// 	var green = rgbToHex(g);
// 	var blue = rgbToHex(b);
// 	return "#"+red+green+blue;
// }

// var display = document.getElementById("display");
// var h1 = document.getElementById("h1");

// .addEventListener("click", function(){
// 	display.textContent = fullRGB;
// });

// Failed for loop attempt

// for(var i = 0; i < squares.length; i++){
// 	var randomString = colors[i];
// 	var randomArray = randomString.replace('rgb(', '');
// 	var randArray = randomArray.replace(')', '');

// 	var randomColor = randArray;
// 	var array = JSON.parse("[" + randomColor + "]");
// 	var red = array[0];
// 	var green = array[1];
// 	var blue = array[2];
															
// 	var rgbToHex = function(rgb) {
//     var hex = Number(rgb).toString(16);
//     if (hex.length < 2) {
//         hex = "0" + hex;
//     }
//     return hex;
// };

// // This function coverts all three parts using the previous function
// var fullHex = function(r,g,b) {
// 	var red1 = rgbToHex(red);
// 	var green1 = rgbToHex(green);
// 	var blue1 = rgbToHex(blue);
// 	return "#"+red1+green1+blue1;
// 	}
// 	squares[i].addEventListener("click", function(){
// 		alert(fullHex());
		
// 	});
// }
