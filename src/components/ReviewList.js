// src/components/ReviewList.js
import React from 'react';

function ReviewList({ reviews }) {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <h3>{review.name}</h3>
          <p>Rating: {review.rating} / 5</p>
          <p>{review.comment}</p>
          <p>Date: {new Date().toLocaleDateString()}</p>
          <div className="review-images">
            {review.images.map((image, index) => (
              <img key={index} src={URL.createObjectURL(image)} alt="review" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
