import React from 'react'
import { useNavigate } from 'react-router-dom';

// 이미지 기본 URL 설정
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
    // React Router의 useNavigate 훅 사용
    const navigate = useNavigate();

    // 영화 아이템 클릭 시 실행되는 함수
    const onClickMovieItem = () => {
        // 영화 상세 페이지로 이동하며 props 데이터를 state로 전달
        navigate(`/movie/${props.title}`, {
            state: props,
        });
    };

    // props 로깅 (디버깅 목적)
    console.log(props);

    return (
        // 영화 컨테이너, 클릭 시 onClickMovieItem 함수 실행
        <div className="movie-container" onClick={onClickMovieItem}>
            {/* 영화 포스터 이미지 */}
            <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
            {/* 영화 정보 컨테이너 */}
            <div className="movie-info">
                {/* 영화 제목 */}
                <h4>{props.title}</h4>
                {/* 영화 평점 */}
                <span>{props.vote_average}</span>
            </div>
        </div>
    );
}
