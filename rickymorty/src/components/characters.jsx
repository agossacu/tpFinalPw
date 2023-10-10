import { useEffect, useState } from "react";
import ".././characters.css";
import { useCharacter } from "../hooks/useCharacter";
import { Svg } from "./svg";

export function Characters() {
  const { characters, getAllCharacters } = useCharacter();
  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <div>
        <ul className="header">
          <li className="hover separar">Docs</li>
          <li className="hover separar">About</li>
          <li className="support hover-fondo">SUPPORT US</li>
        </ul>
      </div>
      <div>
        <h1 className="absol"> The Rick and Morty API</h1>
        <Svg className="relativ" />
      </div>
      <div>
        <ul className="lista">
          {characters.map((item, index) => (
            <li className="fondoCharacter colorGris" key={index}>
              <img src={item.image} />
              <div className="fondoTexto">
                <h2 className="colorBlanco hover"> {item.name} </h2>
                <h4 className="colorBlanco">{item.status}</h4>
                <span>
                  <span class="status__icon"></span>
                </span>
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
