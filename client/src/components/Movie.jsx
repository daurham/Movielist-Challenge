import React, { useState } from 'react';
import axios from 'axios';

const Movie = ({ movie, rerender }) => {
  console.log('MOVIE: ', movie);
  const { title, id } = movie;
  const [input, setInput] = useState(title);

  const updateMovie = async () => {
    await axios.patch('/movie/update', { title: input, id });
    rerender();
  };
  const deleteMovie = async () => {
    await axios.delete('/movie/delete', { data: { id: movie.id, title: 'title stuff' } });
    rerender();
  };

  return (
    <div>
      <input type={'text'} defaultValue={title} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => updateMovie()}>Update</button>
      <button onClick={() => deleteMovie()}>X</button>
    </div>
  )
}

export default Movie;
