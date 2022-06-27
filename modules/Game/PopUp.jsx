import React from "react";
import { useGameStore } from "../../state/useStore";

export default function PopUp({}) {
  const guessed = useGameStore((state) => state.guessed);
  const correct = useGameStore((state) => state.correct);

  const displayPrompt = () => {
    if (!guessed) return "Question";
    if (guessed && !correct) return "WRONG";
    if (guessed && correct) return "CORRECT";
  };

  return (
    <>
      <h2 id="game-prompt">{displayPrompt()}</h2>
    </>
  );
}

// export class Prompt extends React.Component {
//   constructor(props) {
//       super(props);
//       this.prompt1 = "Who made this tweet?"
//       this.prompt2 = "Correct! Click the arrow for the next tweet."
//       this.prompt3 = "Hold this L. Better luck next time."
//       this.state = {
//           prompt: "Who made this tweet?"
//       }
//   }

//   componentDidUpdate() {
//       if (!this.props.guessed && this.state.prompt != this.prompt1) {
//           this.setState({
//               prompt: this.prompt1
//           })
//       } else if ((this.props.guessed && this.props.correct) && this.state.prompt != this.prompt2) {
//         this.setState({
//             prompt: this.prompt2
//         })
//       } else if ((this.props.guessed && !this.props.correct) && this.state.prompt != this.prompt3) {
//         this.setState({
//             prompt: this.prompt3
//         })
//       }
//   }

//   render() {
//       return (
//         <>
//         <h2 id="game-prompt">{this.state.prompt}</h2>
//         </>
//       );
//   }
// }

// export default Prompt;
