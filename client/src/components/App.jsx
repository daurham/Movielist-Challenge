import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');

  const getMovies = async () => {
    try {
      const movies = (await axios.get('/movies')).data;
      setMovies([...movies]);
    } catch (err) {
      console.error('Error in Get Movies:', err);
    }
  };

  const postMovie = async () => {
    await axios.post('/movie/post', { title: input });
    getMovies();
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>MOVIE LIST KING</h1>
      <input type={'text'} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => postMovie()}>Add</button>
      <List movies={movies} rerender={getMovies} />
    </div>
  );
}

export default App;
