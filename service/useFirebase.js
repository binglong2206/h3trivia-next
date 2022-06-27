import db from './Firebase'
import { doc, increment, setDoc, addDoc, collection } from "firebase/firestore"; 
import { v4 as uuid }  from 'uuid'
 
 
 export const addNewPlayer = async () => {
    const uid = uuid();

    try{
      await setDoc(doc(db, 'users', uid), {});
      localStorage.setItem('userId', uid);
      console.log('New Player Added')
    } catch(e) {
      console.error('trouble adding new player', e)
    }
  }

export const addScoreToFirebase = async (score) => {
    try {
      await setDoc(doc(db, "streaks", score.toString()), {
        count: increment(1)
      }, {merge: true});
      
      await setDoc(doc(db, "users", localStorage.getItem('userId')), {
        topScore: localStorage.getItem('topScore'),
        totalGames: localStorage.getItem('totalGames'),
        totalCorrect: localStorage.getItem('totalCorrect'), 
        totalRounds: localStorage.getItem('totalRounds'),
      }, {merge: true});
      
      (console.log('streaks count & user info updated'))
      
    } catch (e) {
      console.error("Error adding score to firebase: ", e);
    }
  }


