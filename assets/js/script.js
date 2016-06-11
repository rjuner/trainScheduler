$(document).ready(function(){

var dataRef = new Firebase("https://snowp.firebaseio.com/"); 
console.log($('#trainInput').val());
var trainName = '';
var destination = '' ;
var frequency = '';
var firstTime = '';
var nextArrival = 0;
var minAway = 0;

$('#submit').on('click', function(){
	// if(!$("#trainName").val()){
	// 	$("#error").html("dont submit");
	// } else {
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
	//}

	var currentTime = moment();
	var firstTime = moment(firstTimeInput, "hh:mm");
	// puts current time up top 
	$("#test").append(
		moment(currentTime).format("hh:mm A")
	);

	//so the page does not get refreshed on click of 'submit' button
	return false; 

});

function onChildAddedSuccess (childSnapshot) {
	var firstTimeConverted = moment(childSnapshot.val().firstTimeInput, "hh:mm A");

	console.log("First Train: " + childSnapshot.val().firstTimeInput);

	$("#dataBox").append("<tr class='well'>" + 
		"<td id='trainName'>" + childSnapshot.val().trainName + "</td>" + 
		"<td id='destination'>" + childSnapshot.val().destination + "</td>" + 
		"<td id='frequency'>" + childSnapshot.val().frequency + "</td>" + 
		"<td id='nextArrival'>" + nextArrival + "<td>" + minAway + "</td>" + 
		"<td id='firstTime'>" + childSnapshot.val().firstTimeInput + "</td>"
	); 
}

function onChildAddedError () {

}

dataRef.on("child_added", onChildAddedSuccess, onChildAddedError);

//MOMENT.JS CALCULATIONS

	








// THIS IS THE END OF THE DOCUMENT.READY FUNCTION	
}); 