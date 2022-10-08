import react, { useState } from 'react';
import axios from 'axios';

const Movie = ({ movie }) => {
  const { title, id } = movie;
  const [input, setInput] = useState(title);

  const updateMovie = () => axios.patch('/movie/update', { title, id });
  const deleteMovie = () => axios.delete('/movie/delete', { title, id });

  return (
    <input type={'text'} defaultValue={title} onChange={(e) => setInput(e.target.value)}>
      {input}
      <button onClick={() => updateMovie()}>Update</button>
      <button onClick={() => deleteMovie()}>X</button>
    </input>
  )
}

export default Movie;
