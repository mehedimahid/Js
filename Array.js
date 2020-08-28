// var fruits = ["Banana ", "Orange", "Apple", "Mango"];
// var first = fruits[0];
// // console.log(first);
// var lastOffset = fruits.length ;  //return = 4;
// // console.log(lastOffset);
// var lastOffset = fruits.length - 1;
// console.log(fruits[lastOffset]);  //return = Mango;
													
// 														// push , unshift , pop

// var fruits = ["Banana ", "Orange", "Apple", "Mango"];

// fruits[fruits.length] = "Grape";			//end a add hobe
// fruits.push("Pineapple");					//end a add hobe
// fruits.unshift("Plum");						//1st a add hobe	

// var fastElement = fruits.shift();			//1st a bad jabe	
// var lastElement = fruits.pop();				//last element bad jabe

// console.log(fruits);
// console.log(lastElement);
// console.log(fastElement);


// var male = ["Shamim", "Rohim", "Korim","Korima" ];
// var female = ["Shamima", "Rohima"];

// var lastPerson = male.pop();
// female.push(lastPerson);

// console.log(male, female);


// 								//****Delete****


// var male = ["Shamim", "Rohim","Korima", "Korim"];
// var female = ["Shamima", "Rohima"];


// var personToRemove = male[2];
// female.push(personToRemove);

// delete(male[2]);


// console.log(male, female);




									

// 										//*****slice .Array Slice - Copy a piece from an array

// var list = [
// 	"Sun", //0 = -7
// 	"Mon", //1 = -6
// 	"Tue", //2 = -5
// 	"Wed", //3 = -4
// 	"Thu", //4 = -3
// 	"Fri", //5 = -2
// 	"Sat ", //6 = -1
// ];
// var chunk = list.slice(1,4);     	//slice(The beginning, the number after the end)
// var part = list.slice(-3 /*-1*/)			

// console.log( list,chunk);
// console.log(list, part);


// 									//***Splice . Array Splice - Cut out some parts of the array

// var list = [
// 	"Sun", //0 = -7
// 	"Mon", //1 = -6
// 	"Tue", //2 = -5
// 	"Wed", //3 = -4
// 	"Thu", //4 = -3
// 	"Fri", //5 = -2
// 	"Sat ", //6 = -1
// ];

// var cut = list.splice(1,3);				//splice( Where to be, how many elements to cut )

// console.log(list, cut);



// 									// ****Copying arrays****


// var day = [
// 	"Sun", //0 = -7
// 	"Mon", //1 = -6
// 	"Tue", //2 = -5
// 	"Wed", //3 = -4
// 	"Thu", //4 = -3
// 	"Fri", //5 = -2
// 	"Sat ", //6 = -1
// ];

// var day2 = day.slice();
// day2[1] = "no day";

// console.log(day, day2);
							
// 								//****concat****

// var list1 = [
// 	"Sun",
// 	"Mon",
// 	"Tue"	
// ];
// var list2 = [
// 	"Wed",
// 	"Thu"	
// ];
// var list3 = [
// 	"Fri",
// 	"Sat"
// ]
// //var listOfDay = list1.concat(list2, list3);
// var listOfDay = [].concat(list1, list2, list3);				//both right

// console.log(listOfDay)



// var list = [
// 	"Sun", //0 = -7
// 	"Mon", //1 = -6
// 	"Tue", //2 = -5
// 	"Wed", //3 = -4
// 	"Thu", //4 = -3
// 	"Fri", //5 = -2
// 	"Sat ", //6 = -1
// ];
// var length = list.length;

// for (var i = 0; i < length; i++) {
// 	console.log("Element at ", i, " Offset is", list[i]);
// }


// var list = [
// 	"Sun", //0 = -7
// 	"Mon", //1 = -6
// 	"Tue", //2 = -5
// 	"Wed", //3 = -4
// 	"Thu", //4 = -3
// 	"Fri", //5 = -2
// 	"Sat ", //6 = -1
// ];
// var length = list.length;


// for (var i = length - 1; i >= 0; i--) {
// 	console.log("Element at ", i, " Offset is", list[i]);
// }



// var list = [
// 	"Sun", //0 = -7
// 	"Mon", //1 = -6
// 	"Tue", //2 = -5
// 	"Wed", //3 = -4
// 	"Thu", //4 = -3
// 	"Fri", //5 = -2
// 	"Sat ", //6 = -1
// 	"Mango",
// 	"Apple",
// 	"Grape",
// 	"Pineapple"
// ];

// for (i in list) {
// 	console.log("Element at ", i, " Offset is", list[i]);
// }





// var list = [
// 	"Sun",
// 	"Mon",
// 	NaN,
// 	"Tue", 
// 	"Wed", 
// 	,
// 	,
// 	"Thu", 
// 	undefined,
// 	"Fri", 
// 	null,
// 	"Sat "
// ];
// console.log( list )

// var newlist = [];

// for (i in list) {
// 	// if( Boolean(list[i]) == true ){
// 	// 	newlist.push( list[i] );
// 	// }
// 	if ( list[i] ) {
// 		newlist.push( list[i] );
// 		// console.log(list[i]);
// 	}

// }

// console.log(newlist);

						//Sorting, sorting everything inside the array
						//(সর্টিং, অ্যারের ভেতরের সবকিছুকে ক্রমানুসারে সাজানো)

// var days = [
// 	"E",
// 	"A",
// 	"D",				
// 	"B",
// 	"G",
// 	"C",
// 	"F"
// ];
// days.sort();				//Strings can be sorted by sorting only
// console.log(days);


// var nembers = [
// 	1, 7, 23, 9, 5, 10, 2, 55, 31, 4, 15, 8, 45, 3, 90, 6 
// ];
// var length = nembers.length - 1;

// for (var i = 0; i < length; i++) {
// 	for (var j = 0; j < length; j++) {
// 		if ( nembers[j] > nembers[j+1] ) {
// 			[nembers[j], nembers[j + 1]] = [nembers[j + 1], nembers[j]]
// 		}
// 	}
// }

// // console.log(nembers);;




// 														//******Swap******


// var a = 1, b = 3;

// // [a,b] = [b,a];
// 								// Can be done both ways				
// var c = a;
// 	a = b;
// 	b = c;


// // console.log(a, b);




											//***split (Convert from string to array)***
											//*****join



var st = "Hello world, how are you?";
var ar = st.split(" ");
console.log(ar, typeof ar);

var b = ar.join(" ");
console.log(b, typeof b);

var n = "Mehedi Hasan";
var rev = n.split("").reverse().join("");
console.log(rev);



// var nember = "12.5 1 10 12 5 9 14 15 7";
// var stringToArray = nember.split(" ");

// console.log(stringToArray); 			//string array

//  var newarray = stringToArray.map(function(value){
// 	return Number(value);
// });

// console.log(newarray); 				//Number array

// var newarraylength = newarray.length - 1;

// for (var i = 0; i < newarraylength; i++) {
// 	for (var j = 0; j < newarraylength; j++) {
// 		if (newarray[j] > newarray[j +1]) {
// 			[newarray[j], newarray[j +1]] = [newarray[j +1], newarray[j]]
// 		}
// 	}
// }

// console.log(newarray);

// var tostring = newarray.join(" ");
// console.log(tostring);

// // var toSring = "\"" + tostring.toString() +"\"";
// var toSring = tostring.split();
// console.log(toSring);



var story = "My Bengal of gold, I love you";
var l = story.split(" ");
console.log(l.length);

var s = story.split("");
console.log(s.length);

var o = story.split("o");
console.log(o.length - 1);