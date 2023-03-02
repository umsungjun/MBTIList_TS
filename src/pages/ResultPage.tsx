import React from 'react';
import styled from 'styled-components'; // TS버전의 styled-components를 설치해야 함
import { Button, Image } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ResultData } from '../stores/Result/ResultData';

import Header from '../components/Header';
import PangImage from '../assets/ggompang.jpeg';

export default function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
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
              src={PangImage}
              width={350}
              height={350}
            />
          </ResultImage>
          <Desc>
            예비집사님과 찰떵궁합인 고양이는!? {mbti}형 고양이 입니다.
          </Desc>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
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
