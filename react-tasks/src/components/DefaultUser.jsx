function DefaultUser({ name = "Guest", age = 18 }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <h3 className="muted">Age: {age}</h3>
    </div>
  );
}

export default DefaultUser;
