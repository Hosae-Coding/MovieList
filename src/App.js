import React, { useState } from 'react';
import Movie from './conponenet/Movie';
import MovieForm from './conponenet/MovieForm';
import NavBar from './conponenet/NavBar';
import Users from './pages/Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
   const [movies, setMovies] = useState([]);
   const removeMovie = (id) => {
      setMovies(
         movies.filter((movie) => {
            return movie.id !== id;
         })
      );
   };
   const renderMovies = movies.length
      ? movies.map((movie) => {
           return (
              <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
           );
        })
      : 'ADD MOVIE';
   const addMovie = (movie) => {
      setMovies([...movies, movie]);
   };
   return (
      <Router>
         <div className="App">
            <NavBar />
            <Switch>
               <Route path="/" exact>
                  <h1>HOME</h1>
               </Route>
               <Route path="/Users">
                  <Users />
               </Route>
               <Route path="/Movies">
                  <h1>Movie list</h1>
                  <MovieForm addMovie={addMovie} />
                  {renderMovies}
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
