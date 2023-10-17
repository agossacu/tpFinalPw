export function SingleCharacter(props) {
  const { personaje } = props;
  const { image, name, status, species, location, episode } = personaje;

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
  return (
    <li className="fondoCharacter colorGris" key={index}>
      <img src={image} />
      <div className="fondoTexto">
        <h2 className="colorBlanco hover"> {name} </h2>
        <h4 className="colorBlanco alinearpunto">
          <div className={`status ${getStatusColor(status)}`}>&#x25CF;</div>
          {status} - {species}
        </h4>

        <p className="gris">Last known location:</p>
        <h4 className="colorBlanco hover">{location.name}</h4>
        <p className="gris">First seen in:</p>
        <h4 className="colorBlanco hover">{location.name}</h4>
      </div>
    </li>
  );
}
