import React from 'react'
import { useState } from 'react'; // useState 훅 import
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 import

export default function Home() {
  // useNavigate 훅을 사용하여 페이지 이동 함수 생성
  const navigate = useNavigate();

  // word 상태와 이를 업데이트하는 setWord 함수 생성
  const [word, setWord] = useState('');

  // 단어 클릭 시 실행되는 함수
  const onClickWord = () => {
    // /test 경로로 이동하며 word를 쿼리 파라미터로 전달
    navigate(`/test?sword=${word}`);
  }

  return (
    // 홈 화면 컨테이너
    <div className="page-container" style={{ fontSize: "32px" }}>
      홈화면입니다.
    </div>
  );
}
