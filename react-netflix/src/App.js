import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MovieGallery from "./components/MovieGallery";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleHomeClick = () => {
    setSearchTerm("");
  };

  // Fetch search results when searchTerm changes
  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        try {
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=65a18fc5&s=${searchTerm}`
          );
          const data = await response.json();
          if (data.Search) {
            setSearchResults(data.Search);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchData();
  }, [searchTerm]);

  // Static categories
  const categories = [
    { title: "Scary Movie", searchTerm: "scary movie" },
    { title: "Harry Potter", searchTerm: "harry potter" },
    { title: "Terminator", searchTerm: "terminator" },
    { title: "Matrix", searchTerm: "matrix" },
    { title: "Friday the 13th", searchTerm: "friday the 13th" },
  ];

  return (
    <div className="App" style={{ backgroundColor: "#221f1f" }}>
      <MyNav onSearch={handleSearch} onHomeClick={handleHomeClick} />
      {searchResults.length > 0 && (
        <MovieGallery title="Search Results" searchTerm={searchTerm} />
      )}
      <div className="categories">
        {categories.map((category, index) => (
          <MovieGallery
            key={index}
            title={category.title}
            searchTerm={category.searchTerm}
          />
        ))}
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
