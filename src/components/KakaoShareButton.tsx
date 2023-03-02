import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { IResult } from '../stores/Result/types';
const Kakao = (window as any).Kakao;

interface Props {
  data: IResult;
}

export default function KakaoShareButton(props: Props) {
  const url = 'https://mbtitest-ts.netlify.app/';
  const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.init('8c909601cdf933c606e7fb64fc521c07');
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '😺 예비집사 판별기 결과😸',
        description: `예비 집사님이 고양이를 키운다면 가장 잘 맞는 고양이는 ${props.data.name}입니다.`,
        imageUrl: url + props.data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },

      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '나도 테스트하러가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <Button onClick={shareKakao} className="btn  btn-lg">
      공유하기
    </Button>
  );
}
