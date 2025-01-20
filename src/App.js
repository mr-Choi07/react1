import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import QueryStringTest from "./pages/QueryStringTest";
import Tv from "./pages/Tv";

function App() {
  return (
    <div className="root-wrap">
      {/* BrowserRouter로 라우팅 기능 제공 */}
      <BrowserRouter>
        {/* 모든 페이지에 공통으로 표시될 헤더 컴포넌트 */}
        <Header />
        
        {/* 라우트 정의 */}
        <Routes>
          {/* 홈 페이지 */}
          <Route path="/" element={<Home />} />
          
          {/* 영화 목록 페이지 */}
          <Route path="/movie" element={<Movies />} />
          
          {/* 영화 상세 페이지 (동적 라우트) */}
          <Route path="/movie/:title" element={<MovieDetail />} />
          
          {/* 쿼리 스트링 테스트 페이지 */}
          <Route path="/test" element={<QueryStringTest />} />

          {/* TV 프로그램 페이지 */}
          <Route path="/tv" element={<Tv />} />
          
          {/* 인물 정보 페이지 */}
          <Route path="/person" element={<Celebrity />} />
          
          {/* 404 Not Found 페이지 (와일드카드 라우트) */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
