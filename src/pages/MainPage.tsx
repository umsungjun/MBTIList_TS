import React from 'react';
import styled from 'styled-components'; // TS버전의 styled-components를 설치해야 함
import { Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import PangImage from '../assets/ggompang.jpeg';
import Header from '../components/Header';

export default function MainPage(): React.ReactElement {
  const navigate = useNavigate();

  const handleClickButton = () => {
    /* 테스트 시작하기 버튼을 클리하면 실행되는 로직 */
    navigate('/question'); // 질문 페이지로 이동
  };

  return (
    <>
      {/* 메인 페이지 전체 */}
      <Wrapper>
        <Header type="title" questionNo={0} />
        <ContentWrapper>
          <Title>나에게 맞는 주인님은!?</Title>
          <LogoImage>
            <Image
              className="roundedCircle"
              style={{ borderRadius: '50%' }}
              src={PangImage}
              width={350}
              height={350}
            />
          </LogoImage>
          <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
          <Desc>내가 집사가 되어서 고양이를 키운다면...?</Desc>
          <Button
            className="btn-danger"
            onClick={handleClickButton}
            style={{ fontSize: 25, marginTop: 20, marginBottom: 20 }}
          >
            테스트 시작하기
          </Button>
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

// const Header = styled.div`
//   background: #ffa07a;
//   font-size: 40pt;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-family: 'Jalnan';
// `;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 20pt;
`;

const LogoImage = styled.div`
  margin: 10px 0px 20px 0px;
`;

const Desc = styled.div`
  font-size: 20pt;
`;
