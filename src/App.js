import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { NavBar } from './ui-components';
import { ProfileCard } from './ui-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const api = 'k_sgl77fv7';
const moviesUrl = 'https://imdb-api.com/en/API/Top250Movies/' + api;

async function getMovies() {
  const response = await axios.get(moviesUrl);
  return response.data.items;
}

function App({ user, signOut }) {
  const [profileCard, showProfileCard] = useState(false);
  const [movies, setMovies] = useState([]);

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
    return movies.map((movie) => {
      return (
        <div key={movie.id} className="movie">
          <p>           </p>
          <h2>{movie.title}</h2>
          <p>Movie rank: {movie.rank}</p>
          <img src={movie.image} alt={movie.title} />
          <p>⭐️ {movie.imDbRating}</p>
        </div>
      );
    });
  }

  return (
    <div className="App">
      <NavBar width={'100%'} overrides={navBarOverrides} />
      <ProfileCard display={profileCard ? 'flex' : 'none'} />
      <div className="movies">{renderMovies()}</div>
    </div>
  );
}

export default withAuthenticator(App);
