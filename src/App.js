import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { NavBar } from './ui-components';
import { ProfileCard } from './ui-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import awsmobile from './aws-exports';

const api = awsmobile.IMDB_API_KEY;
const moviesUrl = `https://imdb-api.com/en/API/Top250Movies/${api}`;

async function getMovies() {
  const response = await axios.get(moviesUrl);
  return response.data.items;
}

function App({ user, signOut }) {
  const [profileCard, showProfileCard] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const moviesData = await getMovies();
      setMovies(moviesData);
    }
    fetchMovies();
  }, []);

  const navBarOverrides = {
    Button: {
      onClick: () => {
        signOut();
      },
    },
      image: {
        src: user?.attributes?.profile
    },
    Profile: {
      onClick: () => {
        showProfileCard(!profileCard);
      },
    },
  };

  function renderMovies() {
    const searchRegex = new RegExp(searchMovies, 'i');

    const filteredMovies = movies.filter((movie) => {
      return searchRegex.test(movie.title);
    });

    return filteredMovies.map((movie) => {
      return (
        <div key={movie.id} className="movie">
          <p>           </p>
          <h2>{movie.title}</h2>
          <p>Movie rank: {movie.rank}</p>
          <img src={movie.image} alt={movie.title} />
          <p>⭐️ {movie.imDbRating}</p>
          <p>📅 {movie.year}</p>
          <p>🎭 {movie.crew}</p>
        </div>
      );
    });
  }

  return (
    <div className="App">
      <NavBar width={'100%'} overrides={navBarOverrides} />
      <ProfileCard display={profileCard ? 'flex' : 'none'} />
      <div className="search">
      <input
        type="text"
        placeholder="Search movies"
        value={searchMovies}
        onChange={(e) => setSearchMovies(e.target.value)}
      />
      <button onClick={() => setSearchMovies('')}>Clear</button>
      </div>
      <div className="movies">{renderMovies()}</div>
    </div>
  );
}

export default withAuthenticator(App);
