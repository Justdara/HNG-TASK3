import React from "react";
import { useDrag, useDrop } from "react-dnd";

const DraggableImage = ({ image, index, moveImage }) => {
  const [, ref] = useDrag({
    type: "IMAGE",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "IMAGE",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} style={{ cursor: "grab" }}>
      <img src={image.url} alt={image.name} style={{ maxWidth: "100%" }} />
      <p style={{ color: "white" }}>{image.tags}</p>
    </div>
  );
};

const Gallery = ({ images, setImages }) => {
  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <DraggableImage
          key={index}
          image={image}
          index={index}
          moveImage={moveImage}
        />
      ))}
    </div>
  );
};

export default Gallery;
