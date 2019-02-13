var add = function(score) {
  return score
}
var score = parseInt(prompt("Enter score"));
if (score >100) {
  alert("INVALID SCORE! Be Serious")
} else if(score >= 80) {
  alert("Grade A")
  alert("Excellent! Keep it up")
} else if (score >= 60) {
  alert("Grade B")
  alert("Good, aim towards getting grade A")
} else if (score >= 40) {
  alert("Grade C")
  alert("Fair, aim higher")
} else if (score >= 20) {
  alert("Grade D")
  alert("poor, work hard towards improving your grade")
} else if(score >=0){
  alert("Grade E")
  alert("Total failure, Work harder")
} else {
  alert("INVALID SCORE! Be Serious!")
}
