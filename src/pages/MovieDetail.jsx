import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../components/movie';
import '../index.css';

export default function MovieDetail() {
    // useLocation 훅을 사용하여 현재 위치(라우트)의 state를 가져옴
    const { state } = useLocation();
    
    // state 객체를 콘솔에 출력 (디버깅 목적)
    console.log(state);

    return (
        // 영화 상세 정보를 담는 컨테이너
        <div className="detail-page-container">
            {/* 영화 포스터 이미지 */}
            <div>
                <img src={IMG_BASE_URL + state.poster_path} width="360px" alt="영화 포스터" />
            </div>
            {/* 영화 상세 정보 */}
            <div>
                {/* 영화 제목과 개봉일 */}
                <h1> {state.title}, ({state.release_date}) </h1>
                
                {/* 영화 평점 */}
                평점: <span>{state.vote_average}</span><br /><br />
                
                {/* 영화 개요 */}
                개요: <br/><br />
                <p>{state.overview}</p>
            </div>
        </div>
    )
}
