import React from 'react'
import Movie from '../components/movie'; // Movie 컴포넌트 import
import { dummy } from "../moviedummy"; // 더미 데이터 import

export default function Movies() {
  return (
    <div>
      {/* 영화 목록을 감싸는 컨테이너 */}
      <div className="movies-container">
        {/* dummy 데이터의 results 배열을 매핑하여 Movie 컴포넌트 렌더링 */}
        {dummy.results.map((item) => {
          return (
            <Movie
              // 각 영화 정보를 props로 전달
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
              release_date={item.release_date}
              // key prop 추가 필요 (예: key={item.id})
            />
          );
        })}
      </div>
    </div>
  )
}
