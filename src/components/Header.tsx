import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';
import { QuestionData } from '../stores/Question/QuestionData';

interface Props {
  type: string;
  questionNo: number;
}

export default function Header(props: Props) {
  return (
    <>
      {props.type === 'progress' ? (
        <ProgressWrapper>
          {/* type === 'progress' */}
          <ProgressBar
            now={Math.round((props.questionNo / QuestionData.length) * 100)}
            label={`${Math.round(
              (props.questionNo / QuestionData.length) * 100,
            )}%`}
            style={{ width: '100%', height: '30px' }}
          />
        </ProgressWrapper>
      ) : (
        <TitleWrapper>😺 예비집사 판별기 😸</TitleWrapper>
      )}
    </>
  );
}

const ProgressWrapper = styled.div`
  font-size: 40pt;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Jalnan';
  padding: 20px;
`;

const TitleWrapper = styled.div`
  background: #ffa07a;
  font-size: 40pt;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Jalnan';
`;
