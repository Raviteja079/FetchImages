function ImageShow({ imageData }) {
  return (
    <div>
      <img
        src={imageData.urls.full}
        alt={imageData.alt_description}
      />
    </div>
  );
}

export default ImageShow;
