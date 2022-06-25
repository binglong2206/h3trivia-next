
export const setLocalStorageEnd =(score) => {
    const localTopScore = localStorage.getItem('topScore');
    const localTotalGames = localStorage.getItem('totalGames');
    const localTotalCorrect = localStorage.getItem('totalCorrect');
    const localTotalRounds = localStorage.getItem('totalRounds');

    if (!localTopScore || localTopScore < score) localStorage.setItem('topScore', score);

    if (!localTotalGames) {
      localStorage.setItem('totalGames', 1)
    } else {
      localStorage.setItem("totalGames", parseInt(localTotalGames, 10) + 1);
    }
    
    if (!localTotalCorrect) {
      localStorage.setItem('totalCorrect', score)
    } else {
      localStorage.setItem("totalCorrect", parseInt(localTotalCorrect, 10) + score)
    }

    if (!localTotalRounds) {
      localStorage.setItem('totalRounds', score + 1)
    } else {
      localStorage.setItem("totalRounds", parseInt(localTotalRounds, 10) + score + 1)
    }

  }