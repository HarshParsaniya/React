function User(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <h3 className="muted">Age: {props.age}</h3>
    </div>
  );
}

export default User;
