import React from 'react';
import styled from 'styled-components'; // TS버전의 styled-components를 설치해야 함
import { Image } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { ResultData } from '../stores/Result/ResultData';

import Header from '../components/Header';
import { IResult } from '../stores/Result/types';

export default function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti'); // 예비집사의 MBTI
  const TestResult = ResultData.find((cat: IResult) => cat.best === mbti);
  const freindCat = ResultData.find(friend => friend.best === TestResult?.mbti);

  return (
    <>
      <Wrapper>
        <Header type="title" questionNo={0} />
        <ContentWrapper>
          <Title>결과 보기</Title>
          <ResultImage>
            <Image
              className="roundedCircle"
              style={{ borderRadius: '50%' }}
              src={TestResult?.image}
              width={350}
              height={350}
            />
          </ResultImage>
          <Desc>
            예비집사({mbti}) 님과 찰떵궁합인 고양이는!? {TestResult?.mbti}형
            고양이 입니다.
          </Desc>
          <CatDesc>
            {TestResult?.name}는 {TestResult?.desc}
          </CatDesc>
          <BestDesc>
            {TestResult?.name}와 형제묘는!? {freindCat?.name} 입니다.
          </BestDesc>
        </ContentWrapper>
      </Wrapper>
    </>
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
  height: 100vh;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 25pt;
`;

const ResultImage = styled.div`
  margin: 10px 0px 20px 0px;
`;

const Desc = styled.div`
  font-size: 20pt;
  width: 80%;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const CatDesc = styled.div`
  font-size: 18pt;
  width: 80%;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 50px;
  text-align: center;
  color: darkorange;
`;

const BestDesc = styled.div`
  font-size: 20pt;
  width: 80%;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
