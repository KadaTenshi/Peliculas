import React, {useState} from 'react';
import "./App.css";
import MovieList from './components/MovieList';

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Jurassic World",
      genre: "Ciencia Ficción",
      image: "Jurassic World .jpg",
    },
    {
      id: 2,
      title: "Kun Fu Panda 4",
      genre: "Anime",
      image: "kung-fu-panda-4-.jpg",
    },
    {
      id: 3,
      title: "Dune",
      genre: "Action",
      image: "Dune.jfif",
    },
    {
      id: 4,
      title: "Venom 3",
      genre: "Action",
      image: "venom-3-.jpg",
    },
    {
      id: 5,
      title: "Star Wars Rogue One",
      genre: "Action",
      image: "Star Wars.jfif",
    },
    {
      id: 6,
      title: "La langosta",
      genre: "Drama",
      image: "Langosta.jfif",
    },
    {
      id: 7,
      title: "Alien: Romulus",
      genre: "Suspenso",
      image: "Alien.jpeg",
    },
    {
      id: 8,
      title: "Depredador",
      genre: "Action",
      image: "Depredador.jpg",
    },
    {
      id: 9,
      title: "Rocky",
      genre: "Drama",
      image: "Rocky.png",
    },
  ]);
  return(
    <div className="app-container">
      <h1 className="app-title">🎬 Movie List</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;