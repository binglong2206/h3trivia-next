import React, {useEffect} from "react";
import {useLocalStore} from "../state/useStore"


export default function InitLocalStore() {
  
  useEffect(()=> {
    useLocalStore.setState({userId_h3trivia: localStorage.getItem('userId_h3trivia')});
    useLocalStore.setState({topScore: localStorage.getItem("topScore")});
    useLocalStore.setState({totalGames: localStorage.getItem("totalGames")});
    useLocalStore.setState({totalCorrect: localStorage.getItem("totalCorrect")});
    useLocalStore.setState({totalRounds: localStorage.getItem("totalRounds")});
  },[])
  

  return null
}