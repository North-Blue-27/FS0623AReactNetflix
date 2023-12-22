import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MovieGallery from './components/MovieGallery';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App" style={{ backgroundColor: '#221f1f' }}>
      <MyNav onSearch={handleSearch} />
      {searchTerm && <MovieGallery title="Search Results" searchTerm={searchTerm} />}
      <MovieGallery title="Harry Potter" searchTerm="harry potter" />
      <MovieGallery title="Matrix" searchTerm="matrix" />
      <MovieGallery title="Star Wars" searchTerm="star wars" />
      <MyFooter />
    </div>
  );
}

export default App;