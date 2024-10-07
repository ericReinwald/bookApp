import React from "react";
import "./BookItem.css";

const BookItem = ({
  author,
  date,
  title,
  pageAcount,
  describe,
  notes,
  progress,
  statusbar,
}) => {
  return (
    <div className="book-item-container">
      <h2>{title}</h2>
      <h3>by {author}</h3>
      <p>Published: {date}</p>
      <p>{pageAcount} pages</p>
      <p>Description: {describe}</p>
      <p>Notes: {notes}</p>

      {/* Barra de progreso */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p>Progreso: {progress}%</p>
    </div>
  );
};

export default BookItem;
