import React from 'react';

import { QuestionData } from '../stores/Question/QuestionData'; //더미데이터 import

export default function QuestionPage(): React.ReactElement {
  return (
    <>
      <div>{QuestionData[0].title}</div>
      <div>{QuestionData[0].answera}</div>
      <div>{QuestionData[0].answerb}</div>
    </>
  );
}
