import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ imagesData }) {
  const renderImages = imagesData.map((image) => {
    return <ImageShow key={image.id} imageData={image} />;
  });
  return <div className="image-list-container">{renderImages}</div>;
}

export default ImageList;
