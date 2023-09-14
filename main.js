//? Chapter No.12 & 13

//TODO Question Node.01

// var character = prompt("Enter Any Character");

// if (character == "a" || character == "b" || character == "c" || character == "d" || character == "e" || character == "f" || character == "g" || character == "h" || character == "i" || character == "j" || character == "k" || character == "l" || character == "m" || character == "n" || character == "o" || character == "p" || character == "q" || character == "r" || character == "s" || character == "t" || character == "u" || character == "v" || character == "w" || character == "x" || character == "y" || character == "z") {
//     alert("Lower Case Alphabet.")
// }

// else if (character == "A" || character == "B" || character == "C" || character == "D" || character == "E" || character == "F" || character == "G" || character == "H" || character == "I" || character == "J" || character == "K" || character == "L" || character == "M" || character == "N" || character == "O" || character == "P" || character == "Q" || character == "R" || character == "S" || character == "T" || character == "U" || character == "V" || character == "W" || character == "X" || character == "Y" || character == "Z") {
//     alert("Upper Case Alphabet.")
// }

// else {
//     alert("Its Number.")
// }

//TODO Question Node.02

// var num_1 = +prompt("Enter Any Number Here!");
// var num_2 = +prompt("Enter Another Number Here!");

// if (num_1 > num_2){
//     alert(num_1 + " is greater than " + num_2);
// }

// else {
//     alert(num_2 + " is greater than " + num_1);
// }

//TODO Question Node.03

// var num = +prompt("Enter Any Number Here!");

// if (num == 0){
//     alert("Number is Zero.");
// }

// else if (num > 0) {
//     alert("Number is Positive.");
// }

// else {
//     alert("Number is Negative.");
// }

//TODO Question Node.04

// var vowel = prompt("Enter any Alphabet.");

// if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u' || vowel == 'A' || vowel == 'E' || vowel == 'I' || vowel == 'O' || vowel == 'U') {
//     alert("It's a Vowel.");
// }

// else {
//     alert("It's a Consonants.");
// }

//TODO Question Node.05

// var Password = "pakistan123";
// var passWord = prompt("Please Enter your Password");

// if (passWord == 0) {
//     do {
//     var passWord = prompt("Please Enter your Password");
//     }

//     while (passWord == 0);
// }

// if (passWord == Password) {
//     alert("Correct! The Password you entered matches the original password.");
// }

// else {
//     alert("Incorrect passwrod.");
// }

//TODO Question Node.06

// var greeting ;
// var hour = prompt("Enter hour(0 - 24)") ;

// if (hour < 18) {
//     alert(greeting = "Good Day.");
// }

// else {
//     alert(greeting = "Good Evening.");
// }

//TODO Question Node.07

// var time = +prompt("Enter Time.");

// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!");
// }

// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");
// }

// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!");
// }

// else {
//     alert("Good Night!");
// }

//? Chapter No.14 & 16

//TODO Question Node.01

// let studentsName = [];

//TODO Question Node.02

// let studentsName = [];

//! Write in console

// studentNames.push("Muhammad Ali");
// studentNames.push("Ameen");
// studentNames.push("Huzaifa");
// studentNames.push("Qahafa");

//TODO Question Node.03

// var stringArray = ["Karachi","Multan","Lahore","Islamabad"];

//TODO Question Node.04

// var numberArray = [1,2,3,4,5,6,7,8,9,10];

//TODO Question Node.05

// var boolArray = [true , false];

//TODO Question Node.06

// var mixedArray = ["Pakisan" , 23 , "Mango" , true , 49 , false];

//TODO Question Node.07

// var qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"];

// document.write("<h3>Qualifications : </h3>");

// for (var i=0 ; i < 8 ; i++) {
//     document.write(i+1 + ")" + qualifications[i] + "<br>" );
// }

//TODO Question Node.08

// var studentsName = ["Ali" , "Qahafa" , "Huzaifa"];
// var studentsScore = [420 , 329 , 271];

// for (var i=0 ; i < 3 ; i++) {

//     var Percentage = 0 ;
//     Percentage = (studentsScore[i]*100)/500;

//     document.write("Score of " + studentsName[i] + " is " + studentsScore[i] + ". Percentage : " + Percentage + "%." + "<br>")
// }

//TODO Question Node.09

//! (a)

// var color = ["Blue" , "Green" , "Pink" , "Purple" , "Black"];

// var newColor = prompt("Enter any New Color in the begining!");

// color.unshift(newColor);

// document.write("Updated Color Array : <br>" + color);

//! (b)

// var color = ["Blue" , "Green" , "Pink" , "Purple" , "Black"];

// var newColor = prompt("Enter any New Color in the End!");

// color.push(newColor);

// document.write("Updated Color Array : <br>" + color);

//! (c)

// var color = ["Blue" , "Green" , "Pink" , "Purple" , "Black"];

// var newColor = prompt("Enter any Two Color in the begining!");

// color.unshift(newColor);

// document.write("Updated Color Array : <br>" + color);

//! (d)

// var color = ["Blue" , "Green" , "Pink" , "Purple" , "Black"];

// color.shift();

// document.write("Updated Color Array : <br>" + color);

//! (e)

// var color = ["Blue" , "Green" , "Pink" , "Purple" , "Black"];

// color.pop();

// document.write("Updated Color Array : <br>" + color);

//! (f)

// var color = ["Blue" , "Green" , "Pink" , "Purple" , "Black"];

// alert("Blue , Green , Pink , Purple , Black");

// var add = prompt("Add From?");

// var howMany = prompt("Color Name!");

// var slicecolor = color.slice(add, howMany);

// document.write("Updated Color Array : <br>" + slicecolor);

//! (g)

// var color = ["Blue" , "Green" , "Pink" , "Purple" , "Black"];

// alert("Blue , Green , Pink , Purple , Black");

// var remove = prompt("Remove From?");

// var howMany = prompt("How Many?");

// color.splice(remove, howMany);

// document.write("Updated Color Array : <br>" + color);

//TODO Question Node.10

// var studentsScore = [420 , 329 , 271 , 510 , 210];

// document.write("Scores of Students : " + studentsScore + "<br>");

// for (var i=0 ; i < 5 ; i++) {

//     for (var j=0 ; j < 4; j++) {

//         if (studentsScore[j] > studentsScore[j+1]) {

//             var temp = studentsScore[j] ;
//             studentsScore[j] = studentsScore[j+1] ;
//             studentsScore[j+1] = temp ;
            
//         }
    
//     }

// }

// document.write("Ordered Scores of Students : " + studentsScore);

//TODO Question Node.11

// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Lahore"];

// var selectedcities = [];

// document.write("Cities List: <br>" + cities);

// selectedcities.push(cities[2]);
// selectedcities.push(cities[3]);

// document.write("<br>Selected Cities List: <br>" + selectedcities);

//TODO Question Node.12

// var arr = ["This" , "is" , "my" , "Cat"];

// document.write("<h3>Array : </h3>");
// document.write(arr);

// document.write("<h3>Sting : </h3>");

// for (var i=0 ; i < 4 ; i++) {
//     document.write(arr[i] + " ");
// }

//TODO Question Node.13

// var arr = ["Keybord" , "Mouse" , "Printer" , "Monitor"];

// document.write("<h3>Devices : </h3>");
// document.write(arr + "<br>");

// for (var i=0 ; i < 4 ; i++) {

//     document.write("<br>Out :<br>");
//     document.write(arr[i] + " ");

// }

//TODO Question Node.14

// var arr = ["Keybord" , "Mouse" , "Printer" , "Monitor"];

// document.write("<h3>Devices : </h3>");
// document.write(arr + "<br>");

// for (var i=3 ; i >= 0 ; i--) {

//     document.write("<br>Out :<br>");
//     document.write(arr[i] + " ");

// }

//TODO Question Node.15

// var phoneManufacturers = ["Apple" , "Samsung" , "Motorola" , "Nokia" , "SONY" , "Haier"];

// let selectMenuHTML = '<select id="manufacturerSelect">';

// phoneManufacturers.forEach(manufacturer => {
//   selectMenuHTML += `<option value="${manufacturer}">${manufacturer}</option>`;
// });

// selectMenuHTML += '</select>';

// document.write(selectMenuHTML);






 










