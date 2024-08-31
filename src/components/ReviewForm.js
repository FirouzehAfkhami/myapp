// src/components/ReviewForm.js
import React, { useState } from 'react';

function ReviewForm({ onAddReview }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, rating, comment, images };
    onAddReview(newReview);
    setName('');
    setRating(1);
    setComment('');
    setImages([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit a Review</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Rating:
        <select
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          required
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </label>
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </label>
      <label>
        Upload Images:
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
