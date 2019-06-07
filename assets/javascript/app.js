function check(){

	var question1
	var question2
    var question3
    var question4

	if (question1 === "btc") {
		correct++;
}
	if (question2 === "charlie") {
		correct++;
}	
	if (question3 === "sold") {
		correct++;
}
    if (question4 === "f") {
        correct++;
}
}   
    document.getElementById("number_correct").innerHTML = ("You got " + correct + " correct.");