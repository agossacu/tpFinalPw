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
      <ul className="lista">
        {characters.map((item, index) => (
          <li className="fondoCharacter colorGris" key={index}>
            <img src={item.image} />
            <div>
              <h3 className="colorBlanco"> {item.name} </h3>
              <h4 className="colorBlanco">{item.status}</h4>
              <p>Last known location:</p>
              <h4 className="colorBlanco hover">{item.location.name}</h4>
              <p>First seen in:</p>
              <h4 className="colorBlanco hover">{item.location.name}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
