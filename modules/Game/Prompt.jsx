import React from "react";
import { useGameStore } from "../../state/useStore";
import YouTube from "react-youtube";
import { Heading, Box, Text, Flex, Image } from "@chakra-ui/react";

export default function QuestionAnswer() {
  const guessed = useGameStore((state) => state.guessed);
  const question = useGameStore((state) => state.question);
  const correct = useGameStore((state) => state.correct);

  const displayQuestion = () => {
    return <Heading color="white">{question.text}</Heading>;
  };

  const displayPrompt = () => {
    if (!guessed) return "Question:";
    if (guessed && !correct) return "WRONG";
    if (guessed && correct) return "CORRECT";
  };

  const displayAnswer = () => {
    if (question.img)
      return (
        <Box>
          <Heading color="white">{displayPrompt()}</Heading>
          <Text color="white">{question.desc}</Text>
          <Image
            src={`/img/${question.img}`}
            boxSize={{ base: "50px", xl: "100px", "2xl": "300px" }}
            alt="answerImage"
          />
        </Box>
      );

    if (question.vid)
      return (
        <Box>
          <Heading color="white">{displayPrompt()}</Heading>
          <Box>{question.desc}</Box>
          <YouTube
            videoId="Gjnup-PuquQ"
            opts={{ playerVars: { autoplay: 1, start: 50 } }}
          />
        </Box>
      );
  };

  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center">
      {guessed ? displayAnswer() : displayQuestion()}
    </Flex>
  );
}
