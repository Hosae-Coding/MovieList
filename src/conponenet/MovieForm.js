import React, { useState } from 'react';
import InputField from './InputField';

const MovieForm = ({ addMovie }) => {
   const [movieTitle, setMovieTitle] = useState('');
   const [movieYear, setMovieYear] = useState('');
   const [titleError, setTitleError] = useState('');
   const [yearError, setYearError] = useState('');
   const resetMovie = () => {
      setMovieTitle('');
      setMovieYear('');
   };
   const resetError = () => {
      setTitleError('');
      setYearError('');
   };

   const validDateForm = () => {
      let validDated = true;
      if (!movieTitle) {
         setTitleError('Enter Movie');
         validDated = false;
      }
      if (!movieYear) {
         setYearError('Enter year');
         validDated = false;
      }

      return validDated;
   };

   const onSubmit = (event) => {
      event.preventDefault();
      if (validDateForm()) {
         addMovie({
            id: Date.now(),
            title: movieTitle,
            year: movieYear,
         });
         resetError();
      }
      resetMovie();
   };
   return (
      <form onSubmit={onSubmit}>
         <InputField
            type="text"
            value={movieTitle}
            placeholder="Movie"
            onChange={(e) => setMovieTitle(e.target.value)}
            errorMessage={titleError}
         />

         <InputField
            type="number"
            value={movieYear}
            placeholder="Year"
            onChange={(e) => setMovieYear(e.target.value)}
            errorMessage={yearError}
         />

         <button type="submit">Add Movie</button>
      </form>
   );
};

export default MovieForm;
