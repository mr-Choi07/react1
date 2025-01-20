import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-container'>
      <div className="header-wrap">
        {/* 헤더의 왼쪽 부분 */}
        <div className="header-left-wrap">
          {/* 홈페이지로 이동하는 로고 링크 */}
          <Link style={{ display: 'flex', alignItems: 'center' }} to="/">
            <img
              style={{ width: "154px", height: "20px" }}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="로고"
            />
          </Link>
          {/* 네비게이션 메뉴 */}
          <ul>
            {/* 영화 페이지로 이동하는 링크 */}
            <li>
              <Link className="header-nav-item" to="/movie">
                영화
              </Link>
            </li>
            {/* TV 프로그램 페이지로 이동하는 링크 */}
            <li>
              <Link className="header-nav-item" to="/tv">
                TV 프로그램
              </Link>
            </li>
            {/* 인물 페이지로 이동하는 링크 */}
            <li>
              <Link className="header-nav-item" to="/person">
                인물
              </Link>
            </li>
            {/* 추가 메뉴 항목 (현재는 홈페이지로 연결됨) */}
            <li>
              <Link className="header-nav-item" to="/">
                More
              </Link>
            </li>
          </ul>
        </div>
        {/* 헤더의 오른쪽 부분 (현재 비어있음) */}
        <div></div>
      </div>
    </div>
  );
}
