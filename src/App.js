import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { NavBar } from './ui-components';
import { ProfileCard } from './ui-components';
import { useState } from 'react';
import movieData from './data/movies-top-250.json';
import movieGross from './data/movies-all-time-gross.json';

function App({ user, signOut }) {
  const [profileCard, showProfileCard] = useState(false);
  const [showMovieList, setShowMovieList] = useState(false);
  const [showMovieGross, setShowMovieGross] = useState(false);
      
  const navBarOverrides = {
    NavBar: {
      backgroundColor: 'grey',
    },
    Button: {
      onClick: () => {
        signOut();
      },
    },
    image: {
      src: user?.attributes?.profile,
    },
    Profile: {
      onClick: () => {
        showProfileCard(!profileCard);
      },
    },
    Rankaroo: {
      color: 'white',
      border: '5px solid red',
      borderRadius: '5px',
      padding: '5px',
      backgroundColor: 'blue',
    },
  };

  function MovieList({ movieData }) {
    return (
      <div className='movies'>
        {movieData.map(movie => (
          <div key={movie.id} className='movie'>
            <h1>{movie.title}</h1>
            <h3>Rank: {movie.rank}</h3>
            <img src={movie.image} alt={movie.title} /> 
            <h3>⭐️ {movie.imDbRating}</h3> 
            <h2>📅 {movie.year}</h2>
            <h3>🎭 {movie.crew}</h3>
          </div>
        ))}
      </div>
    );
  }

  function MovieGross({ movieGross }) {
    return (
      <div className='movies'>
        {movieGross.map(movie => (
          <div key={movie.id} className='movie'>
            <h1>{movie.title}</h1>
            <h3>Rank: {movie.rank}</h3>
            <h3>💵 Domestic: {movie.domesticLifetimeGross}</h3> 
            <h3>💰 Worldwide: {movie.worldwideLifetimeGross}</h3>
            <h2>📅 {movie.year}</h2>
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="App">
      <NavBar width={'100vw'} overrides={navBarOverrides} />
      <ProfileCard display={profileCard ? 'flex' : 'none'} />
      <div className='sort-buttons'>
      <div>
        <button onClick={() => {setShowMovieList(true); setShowMovieGross(false);}}>Top 250</button>
        <button onClick={() => {setShowMovieGross(true); setShowMovieList(false);}}>Movie Gross</button>
      </div>
      </div>
      {showMovieList && <MovieList movieData={movieData} />}
      {showMovieGross && <MovieGross movieGross={movieGross} />}
    </div>
  );
}

export default withAuthenticator(App);
