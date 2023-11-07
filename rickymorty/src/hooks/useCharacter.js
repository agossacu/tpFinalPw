import { useState } from "react";
export function useCharacter() {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  const getAllCharacters = () => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  };
  const getAllEpisodes = (episodes) => {
    return fetch(`https://rickandmortyapi.com/api/episode/${episodes}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const getEpisodesName = (episodes) => {
    return fetch(`https://rickandmortyapi.com/api/episode/${episodes}`)
      .then((res) => res.json())
      .then((data) => setEpisodes(data));
  };

  return {
    characters,
    getAllCharacters,
    getAllEpisodes,
    getEpisodesName,
    episodes,
  };
}
