function num(btn) {
  document.frm.result.value += btn.value;
}

// Operands

function addition() {
	document.frm.result.value += "+";
}
function subtract() {
	document.frm.result.value += "-";
}
function divide() {
	document.frm.result.value += "/";
}
function multiply() {
	document.frm.result.value += "*";
}
function percent() {
	document.frm.result.value = document.frm.result.value/100;
}
			
			
function runClear() {
	document.getElementById("display").value = "";
}
function dot() {
	document.frm.result.value += ".";
}

//Evaluation

function sum() {
	var calcTotal = eval(document.frm.result.value);
	
	document.frm.result.value = calcTotal;
}