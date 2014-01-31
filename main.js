//#1 ///////////////////////////////
//Rewrite the pluralize function using the ternary operator:
//var pluralize = function (word, number) {
// if(number === 1) {
//  return word;
// }
// else {
//  return word + "s";
// }
//};

var pluralize = function (word, number){
	return number === 1 ? word : word + 's';
};

console.log(pluralize('rabbit',3));

//#2 //////////////////////////
//Rewrite the following code to be more functional:

// var victim = {};

// var getVictimInfo = function() {
//  victim.name = prompt("Please enter your name:");
//  victim.phone = prompt("Please enter your phone number:");
//  victim.street = prompt("Please enter your street:");
// };

// getVictimInfo();

// alert('Thank you! Victim entered: \n' +
//  victim.name + ", " +
//  victim.phone + ", " +
//  victim.street);

var getVictimInfo = function() {
	var victim = {};
	victim.name = prompt("Please enter your name:");
	victim.phone = prompt("Please enter your phone number:");
	victim.street = prompt("Please enter your street:");
	return alert('Thank you! Victim entered: \n' +
		victim.name + ", " +
		victim.phone + ", " +
		victim.street);
};

// getVictimInfo();

//#3 ////////////////////////
//Write a function which removes falsey values from an array. 
//A falsey value is one which evaluates to false when type coerced, 
//which are the following:0, null, "" (empty string), undefined, NaN, false.

//Write two versions of the function: one that uses side effects and one that is pure.

array = ["",1,3,4,"t",NaN,false,undefined,true];

var removeFalsey = function (ary){
	var trueyArray = [];
	for (i=0;i<ary.length;i++){
		if (!!ary[i] === true) {
			trueyArray.push(ary[i]);
		}
	}
	return trueyArray;
}

// not a fuction, but storing the result directly in a array.

// var removeFalsey = filter(array, function(item){
// 	return !!item === true;
// });


console.log(removeFalsey(array));