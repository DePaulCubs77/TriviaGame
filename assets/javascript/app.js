$(document).ready(function() {
// Have a start button that begins the game and begins a countdown timer
$(".startbutton").on("click", function() {
	startGame();
});
function startGame (){
	console.log("startGame");
}
function buildQuestions (){
	var questions = "";
	// create empty string
	for (var i =0; i < allQuestions.length; i++){
		questions+= allQuestions[i] + "<br>";
		document.getElementById("container").innerHTML = text;
		console.log("container");
}
	// interate over questions
		// call questiontemplate and pass question
		// add results to string
	// end the for loop
	// set the question container html to the string
}
function questionTemplate (question){
	// open the div in a string "<div>"
	// interate over choices in question object
		// get choice from choice array
		// add that choice with input into the div string
	// close the div "</div>"
	// return the html
}
// User will read question and click on their answer, game will only allow one answer to be picked
// If user finishes quiz before the countdown timer they can click on a submit button and have their answers checked against the correct answers
// If they don't finish within the timer time the test will stop and check their answers against the correct answers
// At the end the game will reveal the number of questions correct or incorrect

var allQuestions = [{
	question: "What year was Chicago founded?",
	choice: ["1830", "2016", "1812", "1945"],
	correctAnswer: 1
},

{
	question: "Who is considered the founding father of Chicago?",
	choice: ["Michael Jordan", "Richard J. Daley", "Jean Baptiste Point du Sable", "Jacques Marquette"],
	correctAnswer: 3
},

{
	question: "Who is the best Chicago baseball team?",
	choice: ["The Bulls", "The Cubs", "The Astros", "The Blackhawks"],
	correctAnswer: 2
},

{
	question: "What is one of Chicago's nicknames?",
	choice: ["Starbucks", "The Windy City", "City of Brotherly Love", "One Expensive City"],
	correctAnswer: 2
},

{
	question: "what year did the Chicago fire happen?",
	choice: ["1919", "1871", "1994", "1871"],
	correctAnswer: 4
},

{
	question: "Which one of the persons below was a Chicago mayor?",
	choice: ["Richard J. Daley", "Scottie Pippen", "Al Capone", "Julius Cesear"],
	correctAnswer: 1
},

{
	question: "What is the name of the stadium where the Cubs play?",
	choice: ["The Astrodome", "Cominskey Park", "US Cellular Field", "Wrigley Field"],
	correctAnswer: 4
},

{
	question: "What is the name of the only zoo in Chicago?",
	choice: ["Lincoln Park Zoo", "The Zoo", "Brookfield Zoo", "The Jungle"],
	correctAnswer: 1
},

{
	question: "Which one of the below is a Chicago Neighborhood?",
	choice: ["Orland Park", "Tinley Park", "Pilsen", "You are Here"],
	correctAnswer: 3
},

{
	question: "Which team won the 2016 World Series",
	choice: ["The Chicago Cubs", "Cleveland Indians", "The White Sox", "The Seahawks"],
},

];

});