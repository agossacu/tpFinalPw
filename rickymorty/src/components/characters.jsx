import { useEffect, useState } from "react";
import "../characters.css";
export function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      <ul className="c">
        {characters.map((item, index) => (
          <li key={index}>
            <h3 className="colorNaranja"> {item.name} </h3>
            <p>{item.status}</p>
            <img src={item.image} />
          </li>
        ))}
      </ul>
    </div>
  );
}
