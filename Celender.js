
var monthName = "April";
var days = 30;
var startingDay =  0;

console.log("Calender of", monthName);
console.log("sun  mon  tue  wed  thu  fri  sat");

for (var i = 0; i < 5; i++) {
	var dayRow ="";
	for (var j = 1; j <= 7 ; j++) {
		var carrentDay = 7*i + j - startingDay;
		if (carrentDay > days) {
			break;
		}else if (carrentDay < 1) {
			carrentDay = " ";
		}
		if (carrentDay > 9) {
			dayRow  += carrentDay + "   ";
		}else{
			dayRow  += carrentDay + "    ";

		}
	}
	console.log(dayRow);
}


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

