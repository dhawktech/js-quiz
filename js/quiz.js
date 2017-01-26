var questions = [
  ["What solar system do we live in?", "Milky Way"],
  ["How many ounces are in a cup?", "16"],
  ["What type of cellphone is currently the most popular throughout the world?", "iPhone"],
  ["What's Chicago's tallest building?", "Willis Tower"],
  ["What is the name of the Chicago White Sox' new stadium?", "Guaranteed Rate"]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

// Creates print function to eliminate the usage of 'document.getElementById();
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = "<ol>";
    for(var i=0;i<arr.length;i++) {
      listHTML += "<li>" + arr[i] + "</li>";
    }
  listHTML += "</ol>";
  return listHTML;
}

for(var i=0;i<questions.length;i++) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  if(response.toLowerCase() === answer.toLowerCase()) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question); 
  }
}

html = "You got " + correctAnswers + " question(s) right.";
html += "<h2>You got these questions correct:</h2>";
html += buildList(correct);
html += "<h2>You got these questions wrong:</h2>";
html += buildList(wrong);
print(html);
