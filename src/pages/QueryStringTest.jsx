import React from 'react'
import { useLocation } from 'react-router-dom'

export default function QueryStringTest() {
  // useLocation 훅을 사용하여 현재 위치 정보를 가져옴
  const location = useLocation();
  
  // 현재 위치 정보를 콘솔에 출력 (디버깅 목적)
  console.log(location);

  return (
    // 임시 렌더링 요소 (실제 내용은 아직 구현되지 않음)
    <div>s</div>
  )
}
