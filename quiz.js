var q1 = "Which team has the most Champions League trophies?"
var q2 = "Which team has won the most Super Bowls"
var q3 = "Which team has the most NBA Championships"
var q4 = "Which player currently leads the NBA in ppg?"
var q5 = "Which player currently leads the NBA in PER?"

console.log(q1)
document.getElementById("q1").innerHTML = q1;
document.getElementById("q2").innerHTML = q2;
document.getElementById("q3").innerHTML = q3;
document.getElementById("q4").innerHTML = q4;
document.getElementById("q5").innerHTML = q5;


function displayRadioValue() {
    document.getElementById("output").innerHTML = "";
    var ele = document.getElementsByTagName('input');

    for (i = 0; i < ele.length; i++) {

        if (ele[i].type = "radio") {

            if (ele[i].checked)
                document.getElementById("output").innerHTML
                    += ele[i].name + " was "
                    + ele[i].value + "<br>";
        }
    }
}