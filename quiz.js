var myQuestions = [
    {
      question: "What’s Your Wedding Style?",
      answers: {
        a: 'Modern',
        b: 'Classic',
        c: 'Bohemian',
        d: 'Romantic',
        e: 'Vintage'
      },
      correctAnswer: 'a'
    },
    {
      question: "What Colors Speak To You For Your Big Day?",
      answers: {
        a: 'White & Cream',
        b: 'Pink & Blush',
        c: 'Peach & Coral',
        d: 'Red & Burgundy',
        e: 'Purple'
      },
      correctAnswer: 'b'
    },
    {
    question: "Are There Any Flowers You Would Like To See At Your Wedding?",
    answers:{
        a: 'Dahlias',
        b: 'Roses',
        c: 'Dried Florals',
        d: 'Lilies',
        e: 'Ranunculus'
    },
    correctAnswer: 'c'
  },
  {
      question: 'What Season Do You Hope To Be Married?',
      answers:{
          a:'Spring',
          b:'Summer',
          c:'Autumn',
          d:'Winter',
          e:'Fall'
      },
      correctAnswer: 'd'
  },
  {
      question:'How Many Guests Do You Expect At Your Reception?',
      answers:{
          a:'Under 15',
          b:'15-50',
          c:'50-100',
          d:'100-150',
          e:'150+'
      },
      correctAnswer:'e'
  }
  ];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){//forin --> for each index

        // ...add an html radio button push-->set
        answers.push(
          '<label id="radio">'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    // join -->Adds all the elements of an array into a string, separated by the specified separator string.
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(  userAnswer==='a' ){
        document.getElementById("results").innerHTML = "Adore Collection";
      }
      if(userAnswer===questions[1].correctAnswer ){
            resultsContainer.innerHTML = "Forever Collection";
      }
      if(  userAnswer===questions[2].correctAnswer){
            resultsContainer.innerHTML = "Eternal Collection";
      }
      if(  userAnswer===questions[3].correctAnswer){
            resultsContainer.innerHTML = "Blissful Collection";
      }
      if(  userAnswer===questions[4].correctAnswer){
            resultsContainer.innerHTML = "Allure Collection";
       
      }
      
      // if answer is wrong or blank
    //   else{
    //     // color the answers red
    //     answerContainers[i].style.color = 'red';
    //   }
    }

    // show number of correct answers out of total
    
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // on submit, show results
//   $('submit').on('click', function(){
//     var target = $(this).data('target');
//     var pos = $(target).offset().top;
//     $('html, body').animate({'scrollTop': pos - 100}, 400);
//   });
  submitButton.onclick = function(){
    if (document.getElementById("results").style.background == "linear-gradient(90deg, #ff9aa2 0%, #005A8D 100%)") {
        document.getElementById("results").style.background = "rgb(0, 0, 0)";
    }
    showResults(questions, quizContainer, resultsContainer);
  }
}
