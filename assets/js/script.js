$(document).ready(function(){

var dataRef = new Firebase("https://snowp.firebaseio.com/"); 

var trainName = '';
var destination = '' ;
var frequency = '';
var nextArrival = 0;
var minAway = 0;

$('#submit').on('click', function(){
	
	//grabbing values from input boxes
	trainName = $('#trainInput').val().trim();
	destination = $('#destinationInput').val().trim();
	firstTimeInput = $('#firstTimeInput').val().trim();
	frequency = $('#frequencyInput').val().trim();

	//pushing data from input boxes into firebase
	dataRef.push({
		trainName: trainName,
		destination: destination, 
		firstTimeInput: firstTimeInput, 
		frequency: frequency

	});

	//so the page does not get refreshed on click of 'submit' button
	return false; 

});


dataRef.on("child_added", function(childSnapshot){

	$("#dataBox").append("<tr class='well'>" + "<td id='trainName'>" + childSnapshot.val().trainName + "</td>" + "<td id='destination'>" + childSnapshot.val().destination + "</td>" + "<td id='frequency'>" + 
	childSnapshot.val().frequency + "</td>" + "<td id='nextArrival'>" + nextArrival + "<td>" + minAway + "</td>"
	)}, 

	function(errorObject){

});









// THIS IS THE END OF THE DOCUMENT.READY FUNCTION	
}); 