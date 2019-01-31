var myString = "My name is Adriana Cerrotti. I am a UX designer."
var splitIt = myString.split(" ");
document.write("Here is the array:<br/>");
for (index in splitIt) {
    document.write(splitIt[index] + ",");
}

var myString = "My name is Adriana Cerrotti. I am a UX designer."
var splitIt = myString.split("");
document.write("<br/>Here is the array:<br/>");
for (index in splitIt) {
    document.write(splitIt[index] + ",");
}

var myString = "My name is Adriana Cerrotti. I am a UX designer."
var splitIt = myString.split(" ");
document.write("<br/>Here is the array:<br/>");
for (index in splitIt) {
    document.write(splitIt[index] + ", <br/>");
}

var myString = "My name is Adriana Cerrotti. I am a UX designer."
var splitIt = myString.split("", 7); //It'll split only 4 spaces. Everything after would not be splitted.
document.write("<br/>Here is the array:<br/>");
for (index in splitIt) {
    document.write(splitIt[index] + ", <br/>");
}
/*The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
string.substr(start, length)*/

var newString = "<br>I'd like to move."
document.write(newString.substr(0, 12) + " have a salad.<br>");

var newString = "<br>I'd like to move"
document.write("You can " + newString.substr(16) + " to CA with me.")