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