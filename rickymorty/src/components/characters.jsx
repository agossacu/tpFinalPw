import { useEffect, useState } from "react";
import ".././characters.css";

export function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      hola
      <div id="fondoCharacter">
        <ul className="container">
          {characters.map((item, index) => (
            <li key={index}>
              <img src={item.image} />
              <h3 className="colorBlanco"> {item.name} </h3>
              <h4>{item.status}</h4>
              <p>Last known location:</p>
              <h4></h4>
              <p>First seen in:</p>
              <h4></h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
