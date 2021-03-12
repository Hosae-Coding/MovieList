import React from 'react';

const Movie = ({ movie, removeMovie }) => {
   return (
      <div className="movie">
         <div className="movie_title">
            {movie.title}
            <span className="movie_year">({movie.year})</span>
         </div>

         <div>
            <button onClick={() => removeMovie(movie.id)}>Del</button>
         </div>
      </div>
   );
};

export default Movie;
