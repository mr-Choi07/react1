import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 전역 CSS 파일 import
import './index.css';

// React 18의 새로운 루트 API를 사용하여 루트 요소 생성
const root = ReactDOM.createRoot(document.getElementById('root'));

// 애플리케이션 렌더링
root.render(
  // React.StrictMode를 사용하여 잠재적인 문제를 감지
  <React.StrictMode>
    {/* 최상위 App 컴포넌트 렌더링 */}
    <App />
  </React.StrictMode>
);
