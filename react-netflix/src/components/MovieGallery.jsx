import React, { useState, useEffect } from 'react';

const MovieGallery = ({ title, searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [selectedFilmId, setSelectedFilmId] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg1OWZhOGI5ODkwODAwMTg0ODg3YTAiLCJpYXQiOjE3MDMyNTU5NzYsImV4cCI6MTcwNDQ2NTU3Nn0.6fe0GaqNkCMs0HAibZ82DEInkLnHOGBQ07NrQ1UZ1BA'; // Inserisci il tuo token

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=65a18fc5&s=${searchTerm}`);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    const fetchComments = async () => {
      if (!selectedFilmId) return;

      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${selectedFilmId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [selectedFilmId, token]);

  const handleFilmClick = (filmId) => {
    setSelectedFilmId(selectedFilmId === filmId ? null : filmId);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!selectedFilmId || !newComment.trim()) return;

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          comment: newComment,
          elementId: selectedFilmId,
          rate: '5',
        }),
      });

      if (response.ok) {
        setNewComment('');
        const updatedComments = [...comments, { comment: newComment }];
        setComments(updatedComments);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 style={{ color: '#d81f26' }} className="mb-4">
        {title}
      </h2>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">
        {movies.slice(0, 6).map((movie, index) => (
          <div key={index} className="col mb-4" onClick={() => handleFilmClick(movie.imdbID)}>
            <div className="card h-100">
              <div className="card-img-wrapper overflow-hidden">
                <img
                  src={movie.Poster}
                  className="img-fluid hover-zoom"
                  alt={movie.Title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedFilmId && (
        <div>
          <h3 style={{ color: '#d81f26' }}>Comments for {movies.find(movie => movie.imdbID === selectedFilmId)?.Title}</h3>
          <ul style={{ color: 'white' }}>
            {comments.map((comment, index) => (
              <li key={index}>{comment.comment}</li>
            ))}
          </ul>
          <form onSubmit={handleSubmitComment}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a new comment..."
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MovieGallery;