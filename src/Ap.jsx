import React, { useState } from 'react';

const Ap = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', reviews: ['Amazing movie!', 'Mind-blowing.'] },
    { id: 2, title: 'Titanic', reviews: ['Heartbreaking.', 'Classic romance.'] },
  ]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [newReview, setNewReview] = useState('');

  const handleSelectMovie = (id) => {
    setSelectedMovieId(id);
  };

  const handleAddReview = () => {
    if (newReview.trim()) {
      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === selectedMovieId
            ? { ...movie, reviews: [...movie.reviews, newReview] }
            : movie
        )
      );
      setNewReview('');
    }
  };

  const selectedMovie = movies.find((movie) => movie.id === selectedMovieId);

  return (
    <div>
      <h1>Movie Review App</h1>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li
            key={movie.id}
            onClick={() => handleSelectMovie(movie.id)}
            style={{
              cursor: 'pointer',
              fontWeight: movie.id === selectedMovieId ? 'bold' : 'normal',
            }}
          >
            {movie.title}
          </li>
        ))}
      </ul>

      {selectedMovie && (
        <div>
          <h3>Reviews for {selectedMovie.title}</h3>
          <ul>
            {selectedMovie.reviews.length > 0 ? (
              selectedMovie.reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </ul>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write a review..."
          />
          <button onClick={handleAddReview}>Add Review</button>
        </div>
      )}
    </div>
  );
};

export default Ap;