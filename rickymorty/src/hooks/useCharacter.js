import { useState } from "react";
export function useCharacter() {
  const [characters, setCharacters] = useState([]);
  const getAllCharacters = () => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  };

  return {
    characters,
    getAllCharacters,
  };
}
