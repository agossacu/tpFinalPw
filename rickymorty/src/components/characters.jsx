import { useEffect, useState } from "react";
import ".././characters.css";
import { useCharacter } from "../hooks/useCharacter";

export function Characters() {
  const { characters, getAllCharacters } = useCharacter();
  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <div>
        <ul className="header">
          <li>Docs</li>
          <li>About</li>
          <li>Support Us</li>
        </ul>
      </div>
      <h1> The Rick and Morty API</h1>
      <div>
        <ul className="lista">
          {characters.map((item, index) => (
            <li className="fondoCharacter colorGris" key={index}>
              <img src={item.image} />
              <div className="fondoTexto">
                <h3 className="colorBlanco"> {item.name} </h3>
                <h4 className="colorBlanco">{item.status}</h4>
                <p className="gris">Last known location:</p>
                <h4 className="colorBlanco hover">{item.location.name}</h4>
                <p className="gris">First seen in:</p>
                <h4 className="colorBlanco hover">{item.location.name}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
