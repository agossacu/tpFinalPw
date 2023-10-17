import { useEffect, useState } from "react";
import ".././characters.css";
import { useCharacter } from "../hooks/useCharacter";
import { Svg } from "./svg";
import { SingleCharacter } from "./singleCharacter";

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
        <div className="relative">
          <div className="absol1">
            <Svg />
          </div>
          <h1 className="absol2"> The Rick and Morty API</h1>
        </div>
      </div>

      <div>
        <ul className="lista">
          {characters.map((item, index) => (
            <div key={index}>
              <SingleCharacter personaje={item} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
