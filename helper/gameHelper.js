
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

    const correctChoiceIndex = choices.indexOf(question.answer)

    return {key, question, questionData, choices, correctChoiceIndex}
  };


  export const revealButtonColor =(selectedIndex, correctChoiceIndex)=>{ // Key iscorrect answer ID
    const elements = document.querySelectorAll(".choice");
    
    elements.forEach((e) => {
      let buttonId = parseInt(e.id[6]);
      console.log(e)

      if (buttonId === correctChoiceIndex) {
        e.classList.add("button-correct");
      }
      else if (buttonId === selectedIndex && selectedIndex !== correctChoiceIndex) {
        e.classList.add("button-wrong");
      }
    })
  }


  export const removeButtonColor =()=>{ // Key iscorrect answer ID
    const elements = document.querySelectorAll(".choice");
    
    elements.forEach((e) => {
      e.classList.remove("button-correct");
      e.classList.remove("button-wrong")
    })
  }
