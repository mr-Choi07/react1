import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  // useNavigate 훅을 사용하여 페이지 이동 함수 생성
  const navigate = useNavigate()
  
  return (
    // 404 페이지 컨테이너
    <div className="page-container">
      {/* 에러 메시지 */}
      <div
        style={{
          marginTop: "64px",
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "32px",
        }}
      >
        해당 페이지를 찾지 못했습니다.
      </div>
      {/* 부가 설명 */}
      <div style={{ fontSize: "32px", lineHeight: "1.6" }}>
        주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
      </div>
      {/* 홈페이지로 이동하는 링크 */}
      <div
        onClick={() => navigate('/')} // 클릭 시 홈페이지로 이동
        style={{
          fontSize: "32px",
          lineHeight: "1.6",
          color: "red",
          cursor: "pointer" // 마우스 오버 시 포인터 커서 표시
        }}
      >
        메인 페이지로 이동
      </div>
    </div>
  );
}
