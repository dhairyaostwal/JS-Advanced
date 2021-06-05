// functions in JS are objects hence allow functions to be passed in as parameter

// any function passed in as an arg is called callback function

// functions which takes in callback as an argument are called high order functions

function first(){
	setTimeout(function(){
		console.log("First function");
	},1000);
}

function second(){
	console.log("Second function");
}

first();
second();

// Output:
// Second function
// First function