var add = function(score) {
  return score
}
var score = parseInt(prompt("Enter score"));
if (score >= 80) {
  alert("Grade A")
} else if (score >= 60) {
  alert("Grade B")
} else if (score >= 40) {
  alert("Grade C")
} else if (score >= 20) {
  alert("Grade D")
} else {
  alert("Grade E")
}
