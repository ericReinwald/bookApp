import React, { useState } from "react";
import "./App.css";
import BookItem from "./components/BookItem";

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      date: Date("2024-8-30"),
      title: "El Hobbit",
      author: "pepito",
      pageCount: "410",
      describe: "Muy bueno",
      notes: "10 / 10",
      progress: 50, // Añadimos el campo de progreso
    },
  ]);

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleAdd = () => {
    const newBook = {
      id: books.length + 1,
      date: Date(),
      title: "Nuevo Libro",
      author: "Autor Desconocido",
      pageCount: "0",
      describe: "Sin descripción",
      notes: "Sin notaaaaas",
      progress: 0, // Inicializamos el progreso en 0
    };
    setBooks([...books, newBook]);
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "4px",
  };

  return (
    <div style={{ backgroundColor: "#E8F5E9" }}>
      <h2>Hello World</h2>
      {books.map((book) => (
        <React.Fragment key={book.id}>
          <BookItem
            title={book.title}
            date={book.date}
            author={book.author}
            pageCount={book.pageCount}
            describe={book.describe}
            notes={book.notes}
            progress={book.progress} // Pasamos el progreso como prop
          />
          <button style={buttonStyle} onClick={() => handleDelete(book.id)}>
            Eliminar libro
          </button>
        </React.Fragment>
      ))}
      <button style={buttonStyle} onClick={handleAdd}>
        Agregar libro
      </button>
    </div>
  );
};

export default App;
