import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    console.log(user.firstname);
    console.log(user.lastname);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Frirst Name:
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleChange}
          />
        </label>
        <button type="submit" value="Abschicken" />
      </form>
    </div>
  );
}

export default App;
