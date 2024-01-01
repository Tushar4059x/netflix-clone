import React from 'react'
import Landing from './components/Landing/landing'
import Navbar from './components/Navbar/navbar'
import MovieCard from './components/card/card'

import './App.css'

function App() {

  const movieData = {
    title: 'Inception',
    description: 'A mind-bending thriller directed by Christopher Nolan.',
    imageUrl: './assets/card-image.png',
  };
  

  return (
    <div>
      <div>
      <Navbar/>

      <div>
      <MovieCard{...movieData}></MovieCard>
      </div>
      <Landing></Landing>
      </div>
    </div>
    
  )
}

export default App
