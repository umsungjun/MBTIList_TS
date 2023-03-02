import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import { QuestionData } from '../stores/Question/QuestionData'; //더미데이터 import
import Header from '../components/Header';

export default function QuestionPage(): React.ReactElement {
  const [qeustionNo, setQeustionNo] = useState(0); // 문제 번호 state
  const handleClickAnswer = () => {
    setQeustionNo(qeustionNo + 1);
  };

  return (
    <Wrapper>
      <Header type="progress" questionNo={qeustionNo} />
      <ContentWrapper>
        <Title>{QuestionData[qeustionNo].title}</Title>
        <ButtonGroup>
          <Button variant="primary" size="lg" onClick={handleClickAnswer}>
            {QuestionData[qeustionNo].answera}
          </Button>
          <Button variant="danger" size="lg" onClick={handleClickAnswer}>
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
