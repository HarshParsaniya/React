function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p className="muted">{props.description}</p>
    </div>
  );
}

export default Card;
