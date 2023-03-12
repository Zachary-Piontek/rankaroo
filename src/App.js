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
  const [showMovieVoteList, setShowMovieVoteList] = useState('0');
      
  const navBarOverrides = {
    NavBar: {
      backgroundColor: 'grey',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '130px',
      padding: '0px',
      maxHeight: '130px',
      width: '100%',
      border: '3px solid white',
      flexWrap: 'wrap', // allow items to wrap to the next line
      boxSizing: 'border-box', // include padding and border in width calculation
      minWidth: '100%', // set a minimum width to prevent shrinking
    },
    Button: {
      style: {
        color: 'white',
        backgroundColor: 'brown',
        hover: {
          backgroundColor: 'red',
        },
      onClick: () => {
        signOut();
      },
    },
  },
    image: {
      src: user?.attributes?.profile,
    },
    Profile: {
      marginRight: '-25px',
      style: {
        cursor: 'pointer',
        color: 'red',
      },
      onClick: () => {
        showProfileCard(!profileCard);
      },
    },
    Rankaroo: {
      color: 'white',
      border: '3px solid white',
      borderRadius: '5px',
      padding: '5px',
      backgroundColor: 'brown',
    },
    Logo: {
      border: '3px solid white',
      borderRadius: '10px',
      padding: '5px',
      backgroundColor: 'black',
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

  function MovieVoteList({ movieData }) {
    const [votes, setVotes] = useState({});
    const [totalVotes, setTotalVotes] = useState({});
  
    const handleVote = (id, value) => {
      setVotes({
        ...votes,
        [id]: value,
      });
      handleTotalVotes(id, value);
    };
  
    const handleTotalVotes = (id, value) => {
      setTotalVotes({
        ...totalVotes,
        [id]: (totalVotes[id] || 0) + value,
      });
    };
  
    return (
      <div className="movies">
        {movieData.map((movie) => (
          <div key={movie.id} className="movie">
            <h1>{movie.title}</h1>
            <img src={movie.image} alt={movie.title} />
            <h2>📅 {movie.year}</h2>
            <h3>🎭 {movie.crew}</h3>
            <div className="votes">
              <button onClick={() => handleVote(movie.id, 1)}>👍</button>
              <h3>{totalVotes[movie.id] || 0}</h3>
              <button onClick={() => handleVote(movie.id, -1)}>👎</button>
              <button
                onClick={() =>
                  alert(
                    `Total Votes for ${movie.title}: ${
                      totalVotes[movie.id] || 0
                    }`
                  )
                }
              >
                Total Votes
              </button>
            </div>
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
        <button onClick={() => {setShowMovieGross(true); setShowMovieList(false);}}>All Time Movie Gross</button>
        <button onClick={() => {setShowMovieVoteList(true); setShowMovieList(false); setShowMovieGross(false);}}>Rankaroo Votes</button>
      </div>
      </div>
      {showMovieList && <MovieList movieData={movieData} />}
      {showMovieGross && <MovieGross movieGross={movieGross} />}
      {showMovieVoteList && <MovieVoteList movieData={movieData} />}
    </div>
  );
}

export default withAuthenticator(App);
