import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { createSearchParams, useNavigate } from 'react-router-dom';

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
    //왼쪽 버튼은 1, 오른족 버튼은 0으로 ans
    const newScore = totalScore.map(
      s => (s.id === type ? { id: s.id, score: s.score + ans } : s), // type이 일치하면 객체를 return해줌 일치하지 않는다면 s를 return
    );

    setTotalScore(newScore); // 객체 전체를 반환
    // 마지막 문제가 아닐 때
    if (QuestionData.length !== qeustionNo + 1) {
      setQeustionNo(qeustionNo + 1); // 마지막 문제가 아니라면 현재 qeustionNo +1을 return
    } else {
      // 마지막 문제라면
      //newScore새로 만들어진 객체
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        '',
      );

      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti,
        })}`, //params로 전달
      });
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
  margin-top: 50px;
  font-size: 25pt;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  justify-content: space-around;
  margin-top: 250px;
  button {
    font-size: 15pt;
    max-width: 450px;
    min-width: 450px;
  }
`;
