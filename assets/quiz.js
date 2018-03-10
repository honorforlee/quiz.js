const quiz = document.querySelector(".quiz");
const question = quiz.querySelector(".question");
const answers = quiz.querySelector(".answers");
const answer1 = quiz.querySelector("#answer_1");
const answer2 = quiz.querySelector("#answer_2");
const answer3 = quiz.querySelector("#answer_3");
const answer4 = quiz.querySelector("#answer_4");
const nextQuestion = quiz.querySelector("#next");
const pointsCorrect = quiz.querySelector("#points_correct");
const pointsGeneral = quiz.querySelector("#points_general");
const result = quiz.querySelector(".result");

const questions = [];
// questions[index] = ["question", "number of correct answer", "answer 1", "answer 2", "answer 3", "answer 4"];
questions[0] = ["What is the HTML element to bold a text?", 1, "&lt;b&gt;", "&lt;bold&gt;", "&lt;wide&gt;", "&lt;big&gt;"];
questions[1] = ["Which HTML tag is used to define an internal style sheet?", 1, "&lt;style&gt;", "&lt;script&gt;", "&lt;css&gt;", "&lt;link&gt;"];
questions[2] = ["What does HTML stand for?", 1, "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Highly Text Markup Language"];
questions[3] = ["What is the HTML tag for a link?", 3, "&lt;link&gt;", "&lt;ref&gt;", "&lt;a&gt;", "&lt;hper&gt;"];
questions[4] = ["Which is the correct CSS syntax?", 3, "body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"];
questions[5] = ["How do you write 'Hello World' in PHP?", 2, "'Hello World'", "echo 'Hello World';", "document.write('Hello World');", "write Hello World"];
questions[6] = ["What does CSS stand for?", 4, "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets"];
questions[7] = ["Where in an HTML document is the correct place to refer to an external style sheet?", 4, "In the &lt;body&gt; section", "At the end of the document", "At the top of the document", "In the &lt;head&gt; section"];
questions[8] = ["What does PHP stand for?", 2, "Personal Home Page", "PHP: Hypertext Preprocessor", "Personal Hypertext Processor", "Private Home Page"];
questions[9] = ["Which property is used to change the background color?", 3, "bgcolor", "bg-color", "background-color", "color"];

let pcorrect = 0;
let pgeneral = 0; 

function newQuestion(number) {
  // insert question
  question.innerHTML = questions[number][0];
  
  // insert answers
  answer1.innerHTML = questions[number][2];
  answer2.innerHTML = questions[number][3];
  answer3.innerHTML = questions[number][4];
  answer4.innerHTML = questions[number][5];
  
  // after clicking one of answers
  answers.onclick = function(event) {
	const target = getEventTarget(event);
	
  if(target.value == 1 || target.value == 2 || target.value == 3 || target.value == 4) {
    if(parseInt(target.value) === questions[number][1]) {
      pcorrect++;
      pointsCorrect.innerHTML = pcorrect;
      result.innerHTML = "<span class='green'>Yeah! <b>"+questions[number][parseInt(target.value)+1]+"</b> is correct answer!</span>";
    }
    else {
      result.innerHTML = "<span class='red'>Oops! <b>"+questions[number][parseInt(target.value)+1]+"</b> isn't a correct answer...</span>";
    }
	
    // add 1 point to general points
    pgeneral++;
    pointsGeneral.innerHTML = pgeneral;

    newQuestion(rand(0, questions.length-1));
  }
	
  }
}

newQuestion(rand(0, questions.length-1));

nextQuestion.addEventListener("click", function(){
  newQuestion(rand(0, questions.length-1));
});

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement; 
}

function rand( min, max ){
	min = parseInt( min, 10 );
	max = parseInt( max, 10 );

	if ( min > max ){
		var tmp = min;
		min = max;
		max = tmp;
	}

	return Math.floor( Math.random() * ( max - min + 1 ) + min );
}