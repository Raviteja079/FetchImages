import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import {useState} from 'react';
import ImageList from './components/ImageList';

function App() {
    const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const imagesData = await searchImages(term);
    setImages(imagesData)
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList imagesData={images} />
    </div>
  );
}

export default App;
