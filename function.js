function sayHi(name) {
	console.log("Hello" + name);
}

sayHi(' Rahim ');


function say(name) {
	if (name) {
	console.log("Hello" + name);

	}else {
	console.log("How are you");

	}
}


say(' Rahim ');
say('');

function isEven(number) {
	if (number % 2 == 0) {
		return true;
	}

		return false;

}


console.log(isEven(12));
console.log(isEven(13));
console.log(isEven(14));


function Hello(name = " Anonymous ", age = " Unknown ") {
	console.log("Hello" +name+", You are"+ age + "years old")
}

Hello(" Rahim",30);
Hello(" Karim",35);
Hello();
Hello();



function reverseString(data) {
	var reverseToSting = data.split("").reverse().join("");
	return reverseToSting;
}

var Sentense = "How are you?";
var Sentense2 = "I am fine";
var reverseSentense = reverseString(Sentense);
var reverseSentense2 = reverseString(Sentense2);

console.log(reverseSentense);
console.log(reverseSentense2);


var student = [];

addStudent(student, "Rahim", "Karim", "Rohima");
console.log(student.length);
addStudent(student, "Shamim");
console.log(student.length);
addStudent(student, "Tamim", "Tamanna");
console.log(student.length);


function addStudent(storage, ...people){
	for (var i = 0; i < people.length; i++) {
		storage.push(people[i]);
	}
}

















































