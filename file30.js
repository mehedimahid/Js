// var carName = "Volvo";
// document.getElementById("demo").innerHTML = carName;

// var txt1 = "John";
// var txt2 = "Doe";
// var txt3 = txt1 + " " + txt2;
// console.log( txt3 );
// document.getElementById("demo").innerHTML = txt3;

// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// person = null;
// console.log( person );

// var x = "Volvo " + (16 + 4);
// console.log(x);

// var answer1 = "It's alright";             
// var answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
// var answer3 = 'He is called "Johnny"';  
// var ans = answer1 + " " + answer2 + " " + answer3;
// console.log(ans);

// function toCelsius( a,b ) {
//   return  a-b;
// }
// // console.log (toCelsius( 77,30 ));			//both right
// var rt = toCelsius( 77,30 );
// console.log (rt);

// var x = myFunction(4, 3);   // Function is called, return value will end up in x
// function myFunction(a, b) {
//   return a * b;             // Function returns the product of a and b
// }
// console.log(x);

// function divition( a, b ) {
// 	var sum = a / b;
// 	// var sum2  = myFunction(sum, sum );
// 	var answer = "the divition is : " + sum ;
// 	return  answer ;

// }
// console.log (divition(20, 5));

// function str(){
// 	return "a" + "10";
// }

// var car = {
// 	type:"Fiat", 
// 	model:"500", 
// 	color:"white"
// };

// car.type = "SOmething";

// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   obj2 : {
//   	 firstName: "John one",
//   	lastName : "Do",
//   	fullName : function() {
// 	  	// alert(this.firstName);
// 	    return this.firstName + " " + this.lastName;
// 	  }

//   },
//   fullName : function() {
//   	// alert(this.firstName);
//     return this.firstName + " " + this.lastName;
//   }
  
// };

// // document.getElementById("demo").innerHTML = person.obj2.fullName();

// var answer1 = "It's alright";
// var answer2 = "He is called 'Johnny'";
// var answer3 = 'He is called \'Johnny\'';

// var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var sln = answer3.length;

// // document.getElementById("demo").innerHTML =sln;

// var x = "We are the \b so-called \"Vikings\" from the north.\n";
//  	x += "We are the \f so-called \"Vikings\" from the north.\n";
// 	x += "We are the \r so-called \"Vikings\" from the north.\n";
// 	x += "We are the \v so-called \"Vikings\" from the north.\n";

// document.getElementById("demo").innerHTML =x;


// var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \
// 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
// 	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \
// 	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
// 	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non \
// 	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// var x = "John";
// var y = new String("John 3");

// document.getElementById("demo").innerHTML =y;

// str = "Please visit Microsoft and Microsoft!";
// var n = str.replace(/Microsoft/i, "W3Schools");
// document.getElementById("demo").innerHTML =n;

//var text1 = " Hello World! ";
//var text2 = text1.toLowerCase();
//document.getElementById("demo").innerHTML =text2;


													//*****concat****



// var text1 = "Hello";
// var text2 = "World";
// var text3 = text1.concat( " ", text2 );

// document.getElementById("demo").innerHTML = text3 ;


// var myGirl= ["Cecilie", "Lone"];
// var myBoys = ["Emil", "Tobias", "Linus"];
// var myChildren =myGirl.concat (myBoys);

// console.log(myChildren);

// var arr1 = ["Cecilie", "Lone"];
// var arr2 = ["Emil", "Tobias", "Linus"];
// var arr3 = ["Robin", "Morgan"]
// var arr4 = arr1.concat(arr2,arr3);

// console.log(arr4);

// var cnct = ["Emil", "Tobias", "Linus"];
// var cnct2 = cnct.concat("Peter");

// console.log(cnct2);



// var str = "         Hello World         ";

// //alert(str.trim())
// document.getElementById("demo").innerHTML = str.trim();

// var str = "HELLO WORLD";
// // str.charAt( 0 );
// document.getElementById("demo").innerHTML = str[1];  


															//***split (Convert from string to array)***


// var txt = "mango|jackfrout|apple|banana|coconut";
// // txt.split(" ");
// var str = txt.split("|");
// console.log(str);


// var myNumber = 2;
// while (myNumber != Infinity) {   // Execute until Infinity
//   myNumber = myNumber * myNumber;
//   // myNumber = myNumber + 1;
// }
// document.getElementById("demo").innerHTML =myNumber;
// 
// var myNumber = 32;
// myNumber.toString(10);
//myNumber.toString(32);
// myNumber.toString(16);
// myNumber.toString(8); 
// myNumber.toString(2);

// document.getElementById("demo").innerHTML =myNumber.toString(32);

// var x = new Number(123);
// var y = new Number(123);
// document.getElementById("demo").innerHTML =(x == y);

// var x = 9.656;
// document.getElementById("demo").innerHTML =x.toExponential();

// document.getElementById("demo").innerHTML =Number(new Date("2017-09-30"));

// var x = 6;
// var y = x.MAX_VALUE;  
// document.getElementById("demo").innerHTML = y;

// var cars = [
// 	"Saab",
// 	"Volvo",
// 	"BMW"
// ];
// cars[0] = "Opel";
// // var cars = new Array("Saab", "Volvo", "BMW");
// document.getElementById("demo").innerHTML = cars[0];

// var person = ["John", "Doe", 46 ];
// var person = {firstName:"John", lastName:"Doe", age:46};
// document.getElementById("demo").innerHTML = person.firstName;


												
													//******Array[]****




// var fruits = ["Banana ", "Orange", "Apple", "Mango"];
// var first = fruits[0];
// var last = fruits[fruits.length - 1];
// document.getElementById("demo").innerHTML =last;

// var fruits, text, fLen, i;
// fruits = ["Banana", "Orange", "Apple", "Mango"];
// fLen = fruits.length;

//  var i;
// for (i = 0; i < 10; i++) {
//  }

// text = "<ul>";
// fruits.forEach(function(value){
// 	text += "<li>" + value + "--</li>";
// });
// text += "</ul>";

// // function myFunction(value) {
// //   text += "<li>" + value + "</li>";
// // }
// document.getElementById("demo").innerHTML = text;

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var result = fruits.push("Lemon"); 
// document.getElementById("demo").innerHTML = fruits;

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits[fruits.length] = "Lemon";
// fruits["mahid"] = "Lemon";
// console.log(fruits);

// var person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// var x = person.length;     
// var y = person[0];    
// console.log( typeof person);
// // console.log(y);

// var person = {
// 	firstName : "John",               			 	//****** OBJ{} exm. **********
// 	lastName : "Doe"
// };
// person.age = 46 ;
// console.log(person instanceof Array);
// console.log(typeof person);

// var abc = ["Banana", "Orange", "Apple", "Mango"];

// console.log(abc);
// console.log(abc instanceof Array);

// var st = ["Banana", "Orange", "Apple", "Mango"];
// console.log(st.join(" * "));

// var ab = ["Banana", "Orange", "Apple", "Mango"];
// ab.pop();
// console.log(ab);

// var sq = ["Banana", "Orange", "Apple", "Mango"];
// sq.push("kiwi");
// console.log(sq);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);
  
// var lemn =["Banana", "Orange", "Apple", "Mango"];
// lemn.unshift("lemon");
// console.log(lemn);

// var kw = ["Banana", "Orange", "Apple", "Mango"];
// kw[kw.length] = "Kiwi";
// console.log(kw);

// var dlt = ["Banana", "Orange", "Apple", "Mango"];
// delete dlt[1];
// console.log(dlt);

// var frts = ["Banana", "Orange", "Apple", "Mango"];
// frts.splice(2, 2, "Lemon", "Kiwi");
// console.log(frts);

// var remve = ["Banana", "Orange", "Apple", "Mango"];
// remve.splice(2,2);
// console.log(remve);

// var fruts = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruts.slice(1,5);
// console.log(citrus);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());


// var ruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(ruits.sort());

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
console.log(fruits);

// var points = [40, 100, 1, 5, 25, 10];
//  points.sort();
// 	points.sort(function(a, b){
// 		return a - b
// });
// console.log(points);

// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){
// 		return 0.5 - Math.random()
// });
// console.log(points);

// var points = [40, 100, 1, 5, 25, 10];

// for (i = points.length -1; i > 0; i--) {
//   j = Math.floor(Math.random() * i)
//   k = points[i]
//   points[i] = points[j]
//   points[j] = k
// }
// console.log(points);

// var points = [40, 100, 1, 5, 25, 10];
//  var x = Math.random();
//  var j = Math.floor(x);
// console.log(j);


// var cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010},
//   {type:"Tvs", year:2015},
//   {type:"Honda", year:2005}
// ];
// cars.sort(function(a, b){
// 	return a.year - b.year
// });
// console.log(cars);

// var cars = [
//    {type:"Volvo", year:2016},
//    {type:"Saab", year:2001},
//    {type:"BMW", year:2010},
//    {type:"Tvs", year:2015},
//    {type:"Honda", year:2005}
// ];
// cars.sort(function(a, b){
//   var x = a.type.toLowerCase();
//   var y = b.type.toLowerCase();
//   if (x < y) {return -1;}
//   if (x > y) {return 1;}
//   return 0;
// });

// console.log(cars);





// var a = [1, 3, 2, 4, 5];								//function
// function myArryMax(x){
// 	return Math.max.apply(null, x);
// }
// var b = myArryMax(a);                                      //*******
// console.log(b);


// function myArryMin(y){
// 	return Math.min.apply(null,y);
// }
// var d = [10, 15, 9, 5, 4];
// var c = myArryMin(d);
// console.log(c);

// function myfunction(a, b, c, d, e){
// 	return a + b + c + d + e ;
// }
// // var z =[2, 3, 4, 5, 6];
// var f = myfunction(2, 3, 4, 5, 6);
// console.log(f);


									// JavaScript Array Iteration Methods



// var txt = 0;
// var number = [45, 4, 9, 16, 25];
// number.forEach(myFunction);
// function myFunction(value) {
//   txt = txt + value ;
//   return txt;
// } 
// console.log(txt);


// var txts = "";
// var numbers = [45, 4, 9, 16, 25];
// numbers.forEach(mfunction);							//forEach
// function mfunction(value){
// 	txts = txts + value + "\n";
// 	// txts += value + "\n"; 
// 	return txts;
// }
// console.log(txts);

// var numbers1 = [45, 4, 9, 16,25];
// var numbers2 = numbers1.map (yfunction);				//map ()
// function yfunction(value){
// 	return value * 2;
// }
// console.log(numbers2);  //return = [90, 8, 18, 32, 50]


// var numbers = [45, 4, 9, 16, 25];
// var over10 = numbers.filter(myfunction);
// function myfunction(value){									//filter
// 	return value > 10 ;
// }
// console.log(over10);

// var numbers3 = [45, 4, 9, 16, 25];
// var sum = numbers3.reduce(myfunction);
// function myfunction(total, value){
// 	return total + value ;
// }
// console.log(sum);										//reduce

// var numbrs = [45, 4, 9, 16, 25];
// var sums = numbrs.reduceRight(smfunction);
// function smfunction(total, value){
// 	return total + value ;
// }
// console.log(sums);

// var nmbs = [45, 4, 9, 16, 25];
// var allover18 = nmbs.every(allfunction);
// function allfunction(value){
// 	return value > 18 ;
// }
// console.log(allover18);

// var story = [45, 4, 9, 16, 25];
// var someover18 = story.some(sofunction);
// function sofunction(value){
// 	return value > 18 ;
// };
// console.log(someover18);


// var fruits = ["Apple", "Orange", "Apple", "Mango"];
// var a = fruits.indexOf("Orange");
// console.log(a);

// var fruits = ["Apple", "Orange", "Apple", "Mango"];
// // var b = fruits.lastIndexOf("Apple");
// var b = fruits.lastIndexOf("Apple")
// console.log(b);


// var numberes = [4, 10, 16, 20, 25];
// var find = numberes.find(findfunction);
// function findfunction(value){
// 	return value > 18;
// }
// console.log(find)

// var numberes = [4, 10, 16, 20, 25];
// var findindex = numberes.findIndex(fidexfunction);
// function fidexfunction(value){
// 	return value > 18;
// }
// console.log(findindex);


							
									//***** JS	DATE 	Objects ******


// var a = new Date();
// console.log(a);

// // new Date(year, month(0-11), day, hours, minutes, seconds, milliseconds)
// var b = new Date(2018, 0, 24, 10, 33, 30, 0);
// console.log(b);

// var c = new Date(18, 11);
// console.log(c);

// var d = new Date("October 13, 2014 11:13:00");
// console.log(d);

// var e = new Date(0);
// console.log(e);

// var a = new Date();
// console.log(a.toString());
 
// var a = new Date();
// console.log(a.toUTCString());

// var a = new Date();
// console.log(a.toDateString());

// var f = new Date("2015");
// console.log(f);

// var g = new Date("2015-03-25T12:00:00Z");
// console.log(g);

// var g = new Date("2015-03-25T12:00:00");
// console.log(g);

// var g = new Date("2015-03-25 12:00:00");
// console.log(g);

// var d = new Date("25, Jan, 2015");
// console.log(d);

// var parse = Date.parse("March 25,2015")			//convert  milliseconds.
// console.log(parse);

// var parse = Date.parse("March 25,2015")
// var h = new Date(parse);
// console.log(h);


									//***** JS	Get Date Methods****


// var get = new Date();			//getTime, getFullYear, getMonth, getDate, getHours, 
// 								//getMinutes,getSeconds getMilliseconds, getDay								
// console.log(get.getDay());		

														
							//*****Set Date Methods****
// var d = new Date();
// d.setFullYear(2020, 5, 19);
// console.log(d);

// var d = new Date();
// d.setFullYear(2020);
// console.log(d);

// var d = new Date();
// d.setMonth(1);
// console.log(d);

// // var d = new Date();
// // d.setDate(15);
// // console.log(d);

// var d = new Date();
// d.setDate(d.getDate() + 50);
// console.log(d);

// var today, someday, text;
// today = new Date();
// someday = new Date();
// someday.setFullYear(2100, 1, 29);

// if (someday > today) {									//***if***
//   // text = "Today is before January 14, 2100.";
//    console.log("Today is before January 14, 2100.");

// } else {
//   // text = "Today is after January 14, 2100.";
//   console.log("Today is after January 14, 2100.");

// }
// console.log(text);


							//*****JS Math Object****					


// var math = Math.PI;
// console.log(math);

// var mth = Math.round(4.5);
// console.log(mth);

// var round = Math.round(4.4);
// console.log(round);

// var pow = Math.pow(4,2);
// console.log(pow);

// var square = Math.sqrt(16);
// console.log(square);

// var absolute = Math.abs(-4.4);
// console.log(absolute);

// var ceil = Math.ceil(4.1);
// console.log(ceil);

// var floor = Math.floor(4.9);
// console.log(floor);

// var sin = Math.sin(90*Math.PI/ 180);
// console.log(sin);

// var cos = Math.cos(0*Math.PI / 180);
// console.log(cos);

// var min = Math.min(180, 90, 45, 0, -45, -90, -180);
// console.log(min);

// var max = Math.max(180, 90, 45, 0, -45, -90, -180);
// console.log(max);

// var x = 4;
// x++;							//x=x+1
// console.log(x);
// 						//x++
// var y;
// var z = 4;
// y = z++;							// y = z; z++ or z=z+1;
// console.log("y=", y, "z=", z);

								//++x
//var x;
//var y = 4;
//x =++y;						//y = y+1; x = y;
//console.log("x=", x, "y=", y);

//var a = 4;
//a += 4;					/* a = a+4;
							//a *= 3 //a = a*3
							//a /= 2 // a = a / 2;
							//a -= 2 // a = a-2;
//			*/
//console.log(a);


							//****JS Random***


// var random = Math.random();
// console.log(random);

// var ranflor = Math.floor(Math.random() * 11);
// console.log(ranflor);

// var ranfloor = Math.floor(Math.random() * 11)+1;
// console.log(ranfloor);


							//**** JS Booleans****



// var booleans = Boolean (20 > 10);
// console.log(booleans);

// var boolean = 10 > 20;
// console.log(boolean);

// var x = 1;
// Boolean(x);
// console.log(Boolean(x));

// var x = 0;
// Boolean(x);
// console.log(Boolean(x));

// var y = -0;
// Boolean(y);
// console.log(Boolean(y));

// var y = -1;
// Boolean(y);
// console.log(Boolean(y));

// var z = "";
// Boolean(z);
// console.log(Boolean(z));


								//*********** if condition*******



// var x = 8;

// if(10 > x){
// 	console.log("this number", x, "is smaller than 10");
// }else if (20 > x) {
// 	console.log("this number", x, "is smaller than 20");
// }else{
// 	console.log("this number", x, "is greater than 10");
// }


// var y = 50;
// var z = 60;

// if(y > z){
// 	console.log("y is greater than z");
// }else if (y ==z) {
// 	console.log("y is equal to z");
// }else{
// 	console.log("y is smaller than z");
// }

// 		//check prime number(2, 3, 5,7....)

// var n = 7;

// if (n < 10){
// 	if(2 == n || 3 == n || 5 == n || 7 == n){
// 		console.log("this number", n, "is smaller than 10 and it`s prime number")
// 	}else{
// 		console.log("this number", n, "is smaller than 10 and it`s not a prime number")
// 	}
// }else{
// 	console.log("this number", n, "is greater than 10")
// }


// var n = 5;

// if(n > 0){
// 	var result ="this number "+n+" is positive"
// 	// console.log("this number "+n+" is positive")
// }else{
// 	var result ="this number "+n+" is negative"
// 	// console.log("this number "+n+" is negative")
// }
// console.log(result);



// var m = 12;
// var remainder = m % 2;
// if( 0==n ){
// 	var result = "this is a netural number"
// }else if (0 ==remainder) {
// 	var result = "this number is even"
// }else{
// 	var result = "this number is odd"
// }
// console.log(result);

// var movieRatting = ("r");
// var age = 10;

// // if("pg"==movieRatting && age>=13){
// // 	console.log("You can watch this movie with pg")
// // }else if ("r"==movieRatting && age>=15) {
// // 	console.log("You can watch this movie with r")
// // }else if ("g"==movieRatting) {
// // 	console.log("You can watch this movie")
// // }else{
// // 	console.log("You can`t watch this movie")
// // }


// if(("pg"==movieRatting && age>=13) || ("r"==movieRatting && age>=15) || ("g"==movieRatting) ){
// 	console.log("You can watch this movie")
// }
// else{
// 	console.log("You can`t watch this movie")
// }


// var yourAge = 0;
// var result;
// if(yourAge <=1 ){

// 	result = "baby";

// } else if (yourAge <= 12) {
	
// 	result = "kid";

// }else if (yourAge < 18) {
	
// 	result = "teenAger";

// }else if (yourAge >= 18) {
	
// 	result = "addult";
// }
// console.log(result);



// var n = "10";
// if (10 == n) {
// 	console.log(n);
// }


// var personOne = "Jamil";
// var personTwo = "Kamal";
// var theyareBrother = true;
// if("Jamil" == personOne) {
// 	if ("Kamal" == personTwo) {
// 		if (theyareBrother) {
			
// 			console.log("Jamil and Kamal are brother");
// 		}
// 	}
// }else{
// 	 console.log("Jamil and Kamal are not brother");
// }

// 							//Ternary operator(?)			


// var n = 3 ;
// var result;

// var remainder = n % 2;

// result = (0 == remainder)? "even":"odd";
// console.log("this number is",result);


// var x = 5;
// var result;

// result = (x < 0) ? "negative" : "positive";
// console.log("this number is",result);


// 					//*******LOOP****


// var i = 10;
// while(i-- > 0){
// 	console.log(i);
// }

// var i = 0;
// while(i <= 10){
// 	console.log(i);
// 	i += 2;
// }

// var i = 0;
// while(true){
// 	console.log(i);
// 	if(10 == i){
// 		break;
// 	}
// 	i++;
// }

// 																//****do while******

// var i = 0;

// do{
// 	console.log(i);
// 	i++;				//return = 0-9;
// }while(i < 10)


// var i = 0;

// do{
// 	i++;				//return = 1-10;
// 	console.log(i);
// }while(i < 10)


// 															//**for 


// var i;

// for (i = 0; i < 10; i++) {
// 	console.log(i);
	
// }



// var i;
// i = 0;

// for(;;){
// 	i += 3;
// 	console.log(i);
// 	if (20 <= i) {
// 		break;
// 	}
// }



// 					//Multiple statements


// var i,l;
// for (i = 0, j = 10; i<= 10; i++,j--) {
// 	console.log(i,j);
// }

// 															//****factorial******

// var n = 5;
// var factorial = 1;

// for ( i = n; i > 1; i--) {
// 	factorial = factorial*i;
// }
// console.log(factorial);

								
// factorial = 1;
// for(i=1; i<=10; i++){									//1-10 ar factorial
// 	factorial *= i;
// 	console.log("Factorial of",i,"is", factorial);
// }

// 			//se.= 2, 4, 6, 8, 10.......
// var series = "";
// var n;

// for (var i=1; i<10; i++) {
// 	n = i*2;
// 	series = series + n +" ";
// }
// console.log(series);

// 			//se = 1, 4, 7, 10, 13......

// var series1 = "1 ";
// var n = 1;

// for (var i=1; i<10; i++) {
// 	n = n+3;
// 	series1 = series1 + n +" ";
// }
// console.log(series1);

// 			//se = 0 3 8 15 24 35.......

// var series3 = "";

// for (var i=1; i<10; i++) {
// 	n = i*i-1;
// 	series3 = series3 + n +" ";
// }
// console.log(series3);

// 					// se = 1 4 3 8 5 12 7 16 9 ...

// var series4 = "";

// for (var i = 1; i <10; i++) {
// 	n = i;
// 	if (n%2==0) {
// 		n = i*2;
// 	}
// 	series4 = series4 + n +" ";

// }
// console.log(series4);


// 					//se = 0 1 1 2 3 5 8 13 21 34 55 

// series5 = "0 1 ";
// n = 0;
// var x = 0;
// var y = 1;
// for (var i = 1; i < 10; i++) {
// 	n = x+y;
// 	x = y;
// 	y = n;
// 	series5 = series5 + n +" ";

// }
// console.log(series5);


// var series;

// for (var i = 1; i <=10; i++) {
// 	series = i + " = ";
// 	for (var j = 1; j <=10; j++) {
// 		series += i*j + " ";
// 	}
// console.log(series);

// }

// 													//Multiplier (গুননীয়ক)


// var n = 144;
// var range = Math.ceil(Math.sqrt(n));

// var divisors = "";
// for (var i = 1; i <=range ; i++) {
// 	if (n%i==0) {
// 		if (i==n/i) {
// 			divisors += i + " " ;
// 		}else{
// 			divisors += i + " " + (n/i) + " ";
// 		}
// 	}	
// }
// console.log(divisors);




// 												// ********Calendar******

// var monthName = "April";
// var days = 30;
// var startingDay =  0;

// console.log("Calender of", monthName);
// console.log("sun  mon  tue  wed  thu  fri  sat");

// for (var i = 0; i < 5; i++) {
// 	var dayRow ="";
// 	for (var j = 1; j <= 7 ; j++) {
// 		var carrentDay = 7*i + j - startingDay;
// 		if (carrentDay > days) {
// 			break;
// 		}else if (carrentDay < 1) {
// 			carrentDay = " ";
// 		}
// 		if (carrentDay > 9) {
// 			dayRow  += carrentDay + "   ";
// 		}else{
// 			dayRow  += carrentDay + "    ";

// 		}
// 	}
// 	console.log(dayRow);
// }


// var MonthName = "August";
// var day = 31;
// var StartingDay = 3;

// var table = '';
//  table += '<table style="width:100%; text-align: center; max-width: 500px;">';
//  table += '<tr>\
// 	    <th>Sun</th>\
// 	    <th>Mon</th>\
// 	    <th>Tue</th>\
// 	    <th>Wed</th>\
// 	    <th>Thu</th>\
// 	    <th>Fri</th>\
// 	    <th>Sat</th>\
// 	  </tr>';
// for (var i = 0; i <= 5; i++) {

// 	table += '<tr>' ;
// 	for (var j = 1; j <= 7; j++) {
// 		var Cday = 7*i + j - StartingDay;
// 		if (Cday > day) {
// 			break;
// 		}else if (Cday < 1) {
// 			table += "<td></td>";
// 		}else{
// 			// console.log(Cday);
// 			// var ans = " "+ +" " ;
// 			table += "<td>" + Cday + "</td>";

// 		}
// 	 }

// 	table += '</tr>' ;

// 	 // console.log(DayRow);
// }

//  table += '</table>';

// document.getElementById("demo").innerHTML = table;





var Days = 30;
var strtDay = 3;


var Layout = '';
Layout += '<table style="width:100%; text-align: center; max-width: 500px;">';
Layout += '<tr>\
	    <th>Sun</th>\
	    <th>Mon</th>\
	    <th>Tue</th>\
	    <th>Wed</th>\
	    <th>Thu</th>\
	    <th>Fri</th>\
	    <th>Sat</th>\
	  </tr>';

for (var i = 0; i < 6 ; i++) {
		Layout += '<tr>';
		for (var j = 1; j <= 7; j++) {
			var carrentDay = 7*i + j - strtDay;
			if (carrentDay > Days) {
				break;
			}else if (carrentDay < 1) {
				Layout += '<td></td>';
			}else{
				Layout += '<td>'+ carrentDay +'</td>';

			}
		}
		Layout += '</tr>';
}

Layout += '</table>';

document.getElementById("demo").innerHTML = Layout;



													//JS Switch Statement******


// var d = new Date().getDay();

// switch (d) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }


// console.log(day);


// var d = new Date().getDay();

// switch(d){
// 	case 6:
// 	x = "Saturday";
// 	break;
// 	case 0:
// 	x = "Sunday";
// 	break;
// 	default:
// 	x = "Looking forward to the Weekend";
// }

// console.log(x);

// var date = new Date().getDay();
// switch(date){
// 	case 4:
// 	case 5:
// 	text = "Soon it is Weekend";
// 	break;
// 	case 0:
// 	case 6:
// 	text = "It is Weekend";
// 	break;
// 	default:
// 	text = "Looking forward to the Weekend"

// }
// console.log(text);


//  var x = "0";

//  switch(x){
//  	case 0:
//  	text = "off";
//  	break;
//  	case 1:
//  	text = "on";
//  	break;
//  	default:
//  	text = "no value found";
//  }

// console.log(text);



						





















