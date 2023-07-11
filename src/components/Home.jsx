import React, { useContext } from 'react'
import {MovieContext} from '../context'
import '../styles/home.css'

const Home = () => {
  const {movies} = useContext(MovieContext);

  return (
    <div className='home'>
      <div className='container'>
        {movies && movies.length > 0 && movies.map((mov,index)=> (
          <div className='movie-card'>
              <h4 key={mov.id}>{mov.Title}({mov.Year})</h4>
              <img src={mov.Poster} />
          </div>
          
        ))}
      </div>

    </div>
  )
}

export default Home