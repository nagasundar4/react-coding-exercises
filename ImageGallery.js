{/*
Create a React component called ImageGallery that displays a grid of images. Users should be able to click on an image to view it in full-screen mode.

Expected Output:
[Image Grid]
*/}
import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const handleImageClick = (image) => {
    	setSelectedImage(image);
  	};
    
    const handleCloseModal = () => {
    	setSelectedImage(null);
  	};
    
    return (
    	<div className="image-gallery">
            <div className="image-grid">
                 {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt={image.alt}
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
            {selectedImage && (
                <div className="modal">
                    <span className="close" onClick={handleCloseModal}>
                        &times;
                    </span>
                    <img src={selectedImage.url} alt={selectedImage.alt} />
                </div>
            )}
        </div>
    )
};

export default ImageGallery;
