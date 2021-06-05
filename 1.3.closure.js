// Closure is a function having access to paren scope even after the scope has closed

function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); // 2

// Practice

function greetings(){

	let wishes = "Hey there!"
	function sayGreetings(){
		console.log("Console.log: " + wishes);
	}
	return sayGreetings;
}

var g = greetings(); // important for execution of closure function
g();