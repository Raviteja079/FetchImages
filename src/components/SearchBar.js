import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [imageQuery, setImageQuery] = useState("car");

  const handleInputChange = (e) => {
    setImageQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(imageQuery);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input onChange={handleInputChange} value={imageQuery} />
      </form>
    </div>
  );
}

export default SearchBar;
