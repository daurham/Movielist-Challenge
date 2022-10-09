import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');

  const getMovies = async () => {
    try {
      const movies = (await axios.get('/movies')).data;
      setMovies(movies);
    } catch (err) {
      console.error('Error in Get Movies:', err);
    }
  };

  const postMovie = async () => {
    try {
      await axios.post('/movie/post', { title: input });
      await getMovies();
      setInput('');
    } catch (err) {
      console.error('Error in Post Movies:', err);
    }
  };

  useEffect(() => { getMovies() }, []);

  return (
    <div>
      <h1>MOVIE LIST KING</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={postMovie}>Add</button>
      <List movies={movies} rerender={getMovies} />
    </div>
  );
};

export default App;
