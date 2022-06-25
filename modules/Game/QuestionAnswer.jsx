import React from "react";
import { useGameStore } from "../../state/useStore";

export default function QuestionAnswer() {
  const guessed = useGameStore((state) => state.guessed);
  const question = useGameStore((state) => state.question);

  const displayQuestion = () => {
    return <div>{question.text}</div>;
  };

  const displayAnswer = () => {
    if (question.img)
      return (
        <>
          <div>{question.desc}</div>
          <div>{question.img}</div>
        </>
      );

    if (question.vid)
      return (
        <>
          <div>{question.desc}</div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${question.vid}?start=30&autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      );
  };

  return (
    <div className="tweet-card tweet-hidden">
      {guessed ? displayAnswer() : displayQuestion()}
    </div>
  );
}

// export class TweetHidden extends React.Component {
//   constructor(props) {
//       super(props);
//   }

//   componentDidUpdate() {
//       if (!this.props.displayed) {
//           document.querySelector(".tweet-hidden").classList.add("hide-visibility");
//       }
//       if (this.props.displayed) {
//         document.querySelector(".tweet-hidden").classList.remove("hide-visibility");
//     }
//   }

//   render() {
//       return (
//         <div className="tweet-card tweet-hidden">
//             <div className="tweet-container">
//                 <span className="pfp-hidden"></span>
//                 <div className="handle-container">
//                     <span className="handle-hidden"></span>
//                     <span className="handle-hidden"></span>
//                 </div>
//                 <p className="tweet-text">{this.props.text}</p>
//                 <p className="tweet-datetime">{this.props.datetime}</p>
//             </div>
//         </div>
//       );
//   }
// }

// export default TweetHidden;
