import React from 'react';
import Movie from './Movie';

const List = ({ movies, rerender }) => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} rerender={rerender} />
      ))}
    </div>
  );
};

export default List;
