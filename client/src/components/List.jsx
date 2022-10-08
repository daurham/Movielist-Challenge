import React from 'react'
import Movie from './Movie';

const List = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  )
}

export default List;
