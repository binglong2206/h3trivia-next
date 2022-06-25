
 export const addNewPlayer = async () => {
    const id = uuid()
    try{
      await setDoc(doc(db, 'Users', id), {merge:true});
      localStorage.setItem('userId', id); 
      console.log('donezo')
    } catch(e) {
      console.error('cant add new user')
    }
  }

//  export const addAnswerToFirebase = async () => {
//     try {
//       await setDoc(doc(db, "tweetIds", this.state.tweetId), {
//         [selected]: increment(1)
//       }, {merge: true});
//     } catch (e) {
//       console.error("Error adding answer to firebase: ", e);
//     }
//   }

export const addScoreToFirebase = async (score) => {
    try {
      
      await setDoc(doc(db, "streaks", score.toString()), {
        count: increment(1)
      }, {merge: true});

      await setDoc(doc(db, "Users", localStorage.getItem('userId')), {
        highScore: localStorage.getItem('highScore'),
        correct: localStorage.getItem('tweetsCorrect'), 
        gamesPlayed: localStorage.getItem('gamesPlayed'),
      }, {merge: true});
    } catch (e) {
      console.error("Error adding score to firebase: ", e);
    }
  }


