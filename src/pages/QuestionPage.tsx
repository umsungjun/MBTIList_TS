import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { QuestionData } from '../stores/Question/QuestionData'; //더미데이터 import
import Header from '../components/Header';

export default function QuestionPage(): React.ReactElement {
  const [qeustionNo, setQeustionNo] = useState(0); // 문제 번호 state
  const [totalScore, setTotalScore] = useState([
    { id: 'EI', score: 0 },
    { id: 'SN', score: 0 },
    { id: 'TF', score: 0 },
    { id: 'JP', score: 0 },
  ]);
  const navigate = useNavigate();

  const HandleClickAnswer = (ans: number, type: string) => {
    const newScore = totalScore.map(s =>
      s.id === type ? { id: s.id, score: s.score + ans } : s,
    );

    setTotalScore(newScore);
    // 마지막 문제가 아닐 때
    if (QuestionData.length !== qeustionNo + 1) {
      setQeustionNo(qeustionNo + 1);
    } else {
      navigate('/result');
    }
    // if (type === 'EI') {
    //   // 기존스코어에 대한 새로운 스코어 값을 계산
    //   const addScore = totalScore[0].score + ans;
    //   // 새로운 스코어를 반영한 새로운 객체
    //   const object = { id: 'EI', score: addScore };
    //   // 새로운 객체를 기존의 totalScore배열에 반영
    //   totalScore.splice(0, 1, object);
    // } else if (type === 'SN') {
    //   const addScore = totalScore[1].score + ans;
    //   const object = { id: 'EI', score: addScore };
    //   totalScore.splice(0, 1, object);
    // } else if (type === 'TF') {
    //   const addScore = totalScore[1].score + ans;
    //   const object = { id: 'EI', score: addScore };
    //   totalScore.splice(0, 1, object);
    // } else if (type === 'JP') {
    //   const addScore = totalScore[1].score + ans;
    //   const object = { id: 'EI', score: addScore };
    //   totalScore.splice(0, 1, object);
    // }
  };

  useEffect(() => {
    console.log(totalScore);
  }, [totalScore]);
  return (
    <Wrapper>
      <Header type="progress" questionNo={qeustionNo} />
      <ContentWrapper>
        <Title>{QuestionData[qeustionNo].title}</Title>
        <ButtonGroup>
          <Button
            variant="primary"
            size="lg"
            onClick={() => HandleClickAnswer(1, QuestionData[qeustionNo].type)}
          >
            {QuestionData[qeustionNo].answera}
          </Button>
          <Button
            variant="danger"
            size="lg"
            onClick={() => HandleClickAnswer(0, QuestionData[qeustionNo].type)}
          >
            {QuestionData[qeustionNo].answerb}
          </Button>
        </ButtonGroup>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fffacd;
  font-family: 'Jalnan';
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 25pt;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  justify-content: space-around;

  button {
    font-size: 15pt;
    max-width: 450px;
    min-width: 450px;
  }
`;
