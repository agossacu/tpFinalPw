import { useEffect } from "react";
import { useCharacter } from "../hooks/useCharacter";

export function SingleCharacter(props) {
  const { personaje } = props;
  const { image, name, status, species, location, episode, id } = personaje;

  const { getAllEpisodes, getEpisodesName, episodes } = useCharacter(); //desestructuracion del hook

  const getStatusColor = (status) => {
    if (status === "Alive") {
      return "vivo";
    }
    if (status === "Dead") {
      return "muerto";
    } else {
      return "depa";
    }
  };
  let epiNum = [];
  let epiName = [];
  const handleClick = () => {
    episode.map((episodio) => epiNum.push(episodio.slice(40)));
    getAllEpisodes(epiNum);
    getEpisodesName(epiName);
  };
  useEffect(() => {
    
  }, [episodes]);
  return (
    <li className="fondoCharacter colorGris" key={id}>
      <img src={image} />
      <div className="fondoTexto">
        <h2 className="colorBlanco hover"> {name} </h2>
        <h4 className="colorBlanco alinearpunto">
          <div className={`status ${getStatusColor(status)}`}>&#x25CF;</div>
          {status} - {species}
        </h4>

        <p className="gris">Last known location:</p>
        <h4 className="colorBlanco hover">{location.name}</h4>
        <button onClick={handleClick}>Episodios</button>
      </div>
    </li>
  );
}
