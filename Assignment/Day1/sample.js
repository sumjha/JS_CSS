

var question1 = { "text" : "Who is the prime minister of India?", "options": ["Narender Modi", "Rahul Gandhi", "Amit Shah"], "answer": "Narender Modi",  isCorrect: function(ans) { return this.answer === ans } }

var question2 = { "text" : "Who is the CEO of Adobe?", "options": ["Shantanu Narayen", "Sundar Pichai", "Satya Nadella"], "answer": "Shantanu Narayen",  isCorrect: function(ans) { return this.answer === ans } }

var Quiz = {question: [question1, question2], score: 0, index: 0, nextQuestion: function() { this.index < this.question.length ? console.log(this.question[this.index].text, this.question[this.index].options) : console.log("Score=",this.score)  } , guess: function(ans) { this.score += this.question[this.index++].isCorrect(ans) }}

