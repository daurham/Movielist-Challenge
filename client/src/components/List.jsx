import React from 'react';
import Movie from './Movie';

const List = ({ movies, rerender }) => {
  return (
    <div>
      {movies.map((movie, i) => (
        <Movie key={i} movie={movie} rerender={rerender} />
      ))}
    </div>
  )
}

export default List;
