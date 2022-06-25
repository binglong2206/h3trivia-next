
export const getQuestionChoices = (rawQuestions) => {

    // Copy data, get one question, delete it from data
    const questionData = rawQuestions;
    const questionKeys = Object.keys(questionData);
    const key = questionKeys[Math.floor(Math.random() * questionKeys.length)];
    const question = questionData[key];
    delete questionData[key]


    // Use that one question's object to randomize choices
    let choices = [
      question.answer,
      question.choice2,
      question.choice3,
      question.choice4,
    ];

    for (let i = choices.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * choices.length);
      [choices[i], choices[randomIndex]] = [choices[randomIndex], choices[i]];
    }

    return {key, question, questionData, choices}
  };


  export const revealButtonColor =(selected, answer)=>{
     var choiceElems = document.querySelectorAll(".choice");
    choiceElems.forEach((el) => {
      el.classList.add("disabled");
      if (el.innerHTML === answer) {
        el.classList.add("choice-correct");
        el.classList.remove("choice-default");
      }
      else if (el.innerHTML === selected && selected !== answer) {
        el.classList.add("choice-wrong");
        el.classList.remove("choice-default");
      }
    })
  }
