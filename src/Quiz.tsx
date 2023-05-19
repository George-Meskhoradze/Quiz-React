import styled from 'styled-components';
import { useState } from "react";
import DataQuestion from './QuestionData';

const Quiz = () => {

  const [score, setScore] = useState(0)

  const [showscore, setShowScore] = useState(false)

  const [answerScore, setAnswerScore] = useState(0)

  const HandlerCount = () => {

    const nextQ = score + 1

    if(nextQ < DataQuestion.length) {
      setScore(nextQ)
    } else {
      setShowScore(true)
    }
  }

  const HandlerScore = (isCorrect: boolean) => {
 
    if (isCorrect === true) {
      setAnswerScore(answerScore + 1)
      console.log(answerScore)
    }
    HandlerCount();
  }

  return (
    <div>
      <BodySize>

        {showscore 
        
        ? 

        <Result><Score>Your Score Is {answerScore} Out Of 10</Score></Result>

        :

        <Box>

          <QuizTitle> 
            <Title>
              Quiz  {score + 1}/10
            </Title>
          </QuizTitle>

          <Quizs>
            <Question> 
              {DataQuestion[score].question}
            </Question>
          </Quizs>
          
          <QuizAnswers>

            {DataQuestion[score].answerOptions.map(item => (
              <AnswerBox onClick={() => HandlerScore(item.isCorrect)}>
                <AnswerText>
                  {item.answer}
                </AnswerText>
              </AnswerBox>
            ))}

          </QuizAnswers>

        </Box>
        }
      </BodySize>
    </div>
  )
}

export default Quiz


const BodySize = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #315f66;
`

const Box = styled.div`
  width: 750px;
  height: 500px;
  border-radius: 15px;
  background-color: #022a30;
  display: grid;
  grid-template-rows: 40% 60%;
  grid-template-columns: 50% 50%;

  @media (max-width:1150px) {
    width: 600px;
    height: 400px;
  }

  @media (max-width:740px) {
    width: 320px;
    height: 220px;
  }
`

const QuizTitle = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Quizs = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const QuizAnswers = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;

  @media (max-width:1150px) {
    gap: 25px;
  }

  @media (max-width:740px) {
    gap: 10px;
  }
`



const Title = styled.h1`
  width: 90%;
  height: 15%;
  font-size: 38px;
  line-height: 26px;
  font-weight: 600;
  text-align: center;
  color: white;
  user-select: none;

  @media (max-width:1150px) {
    font-size: 26px;
  }

  @media (max-width:740px) {
    font-size: 16px;
  }
`

const Question = styled.h1`
  width: 80%;
  height: 60%;
  font-size: 34px;
  line-height: 34px;
  letter-spacing: 2px;
  font-weight: 600;
  text-align: center;
  color: white;
  user-select: none;

  @media (max-width:1150px) {
    font-size: 24px;
  }

  @media (max-width:740px) {
    line-height: 20px;
    letter-spacing: 1px;
    font-size: 13px;
  }
`

const AnswerText = styled.h1`
  width: 80%;
  height: 40%;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 1px;
  color: white;
  font-weight: 400;
  text-align: center;
  margin: 18px auto;
  transition: all 0.3s ease-in;
  user-select: none;

  @media (max-width:1150px) {
    font-size: 16px;
  }

  @media (max-width:740px) {
    width: 96%;
    height: 80%;
    letter-spacing: normal;
    font-size: 8px;
  }
  `

const AnswerBox = styled.div`
  width: 90%;
  height: 12%;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:active {
    background: white;

    ${AnswerText} {
      color: #0D0D0D;
    }
  }

  @media (max-width:740px) {
    border-radius: 5px;
  }
`

const Result = styled.div`

  width: 750px;
  height: 500px;
  border-radius: 15px;
  background-color: #022a30;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  @media (max-width:1150px) {
    width: 600px;
    height: 400px;
  }

  @media (max-width:740px) {
    width: 320px;
    height: 220px;
  }
`

const Score = styled.h1`
  
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1px;
  color: white;

  @media (max-width:1150px) {
    font-size: 2rem;
  }

  @media (max-width:740px) {
    font-size: 1rem;
  }
`