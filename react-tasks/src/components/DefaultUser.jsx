function DefaultUser({ name = "Guest", age = 18 }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
    </div>
  );
}

export default DefaultUser;
