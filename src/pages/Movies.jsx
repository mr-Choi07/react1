import React from 'react'
import Movie from '../components/movie';
import { dummy } from "../moviedummy";


export default function Movies() {

  return (
    <div>
      <div className="movies-container">
        {dummy.results.map((item) => {
          return (
            <Movie
              
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
              release_date={item.release_date}
            />
          );
        })}
      </div>
    </div>
  )
}
