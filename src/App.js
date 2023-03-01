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
  const [searchMovies, setSearchMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

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

  function sortMovies(sortBy) {
    const sortedMovies = [...movies].sort((a, b) => {
      if (sortBy === 'year') {
        return sortOrder === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
      } else if (sortBy === 'rank') {
        return sortOrder === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
      }
      else {
        return sortOrder === 'asc' ? a[sortBy].localeCompare(b[sortBy]) : b[sortBy].localeCompare(a[sortBy]);
      }
    });
    setMovies(sortedMovies);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }
  
  function renderSortButtons() {
    return (
      <div className="sort-buttons">
        <button onClick={() => sortMovies('year')}>Sort by Year</button>
        <button onClick={() => sortMovies('title')}>Sort by Title</button>
        <button onClick={() => sortMovies('rank')}>Sort by Rank</button>
      </div>
    );
  }

  function renderMovies() {
    const searchRegex = new RegExp(searchMovies, 'i');

    const filteredMovies = movies.filter((movie) => {
      return searchRegex.test(movie.title);
    });

    return filteredMovies.map((movie) => {
      return (
        <div key={movie.id} className="movie">
          <p> </p>
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
    {renderSortButtons()}
    <div className="movies">{renderMovies()}</div>
    </div>
  );
}

export default withAuthenticator(App);

