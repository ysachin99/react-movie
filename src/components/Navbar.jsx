import React , {useContext, useState} from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/navbar.css'
import { MovieContext } from '../context';

const Navbar = () => {
const {query, setQuery, setMovies} = useContext(MovieContext);

  return (
    <div className='navbar'>
      <div className='left'>
       <MovieIcon className='logo'/>
       <span>Movies</span>
      </div>
      <div className='right'>
       <SearchIcon className='search-icon' />
       <input type='search' value={query} placeholder='Search movies ...' onChange={(e)=>setQuery(e.target.value)}/>
      </div>

    </div>
  )
}

export default Navbar