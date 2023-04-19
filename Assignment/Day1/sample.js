

class Question {
    text; 
    options;
    answer;


    constructor(text,options,answer) {
        this.text = text;
        this.options = options;
        this.answer = answer;
    }

    isCorrect(ans) {
        return this.answer === ans 
    }
}

var q1 = new Question("Who is the prime minister of India?",["Narender Modi", "Rahul Gandhi", "Amit Shah"],"Narender Modi");
var q2 = new Question("Who is the CEO of Adobe?",["Shantanu Narayen", "Sundar Pichai", "Satya Nadella"],"Shantanu Narayen");

//var question1 = { "text" : "Who is the prime minister of India?", "options": ["Narender Modi", "Rahul Gandhi", "Amit Shah"], "answer": "Narender Modi",  isCorrect: function(ans) { return this.answer === ans } }

//var question2 = { "text" : "Who is the CEO of Adobe?", "options": ["Shantanu Narayen", "Sundar Pichai", "Satya Nadella"], "answer": "Shantanu Narayen",  isCorrect: function(ans) { return this.answer === ans } }

class Quiz {
    questions; 
    score;
    index;

    constructor(questions) {
        this.questions = questions;
        this.score = 0;
        this.index = 0;
    }

    nextQuestion() {
        this.index < this.questions.length ? console.log(this.questions[this.index].text, this.questions[this.index].options) : console.log("Score=",this.score)  
    }

    guess(ans) { 
        this.score += this.questions[this.index++].isCorrect(ans)
     }
}

var quiz = new Quiz([q1,q2]) 

//var Quiz = {question: [question1, question2], score: 0, index: 0, nextQuestion: function() { this.index < this.question.length ? console.log(this.question[this.index].text, this.question[this.index].options) : console.log("Score=",this.score)  } , guess: function(ans) { this.score += this.question[this.index++].isCorrect(ans) }}

