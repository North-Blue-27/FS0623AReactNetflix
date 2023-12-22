import React, { useState, useEffect } from 'react';

const MovieGallery = ({ title, searchTerm }) => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="container mt-4">
      <h2 style={{color: '#d81f26'}} className="mb-4">{title}</h2>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">
        {movies.slice(0, 6).map((movie, index) => (
          <div key={index} className="col mb-4">
            <div className="card h-100">
              <div className="card-img-wrapper overflow-hidden"> {/* Aggiunta una classe wrapper per l'immagine */}
                <img
                  src={movie.Poster}
                  className="img-fluid hover-zoom" // Aggiunta la classe per l'effetto hover
                  alt={movie.Title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGallery;