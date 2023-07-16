import { createContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`;

export const MovieContext = createContext();

export const ContextProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')

   const fetchMovie = async () => {
    try{
        const res = await fetch(`${API_URL}&s=${query}`);
        const data = await res.json();
         console.log(data);
        setMovies(data.Search);
    }
    catch(error){
        console.log(error);
    }
   }

   useEffect(()=>{
   fetchMovie();
   },[query])

 
    
    const ContextValue = {movies,setMovies, query, setQuery };
    return (
        <MovieContext.Provider value={ContextValue}>
            {children}
        </MovieContext.Provider>
    )
}