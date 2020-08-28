									

										//*****slice .Array Slice - Copy a piece from an array

var list = [
	"Sun", //0 = -7
	"Mon", //1 = -6
	"Tue", //2 = -5
	"Wed", //3 = -4
	"Thu", //4 = -3
	"Fri", //5 = -2
	"Sat ", //6 = -1
];
var chunk = list.slice(1,4);     	//slice(The beginning, the number after the end)
var part = list.slice(-3 /*-1*/)			

console.log( list,chunk);
console.log(list, part);


									//***Splice . Array Splice - Cut out some parts of the array

var list = [
	"Sun", //0 = -7
	"Mon", //1 = -6
	"Tue", //2 = -5
	"Wed", //3 = -4
	"Thu", //4 = -3
	"Fri", //5 = -2
	"Sat ", //6 = -1
];

var cut = list.splice(1,3);				//splice( Where to be, how many elements to cut )

console.log(list, cut);
