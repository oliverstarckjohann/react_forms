import React, { useState } from "react";

function App() {
  //Setup of the State, where all Data is Stored
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
  });

  //Things ToDo when button is clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  //Things done on every input character in a form-input-field
  const handleChange = (event) => {
    //Writes to state
    setUser({
      //keeps the existing Data in state
      ...user,
      //Looks in which inpustfield we are by name and give the value to the matching target
      [event.target.name]: event.target.value,
    });
    //The consoleLog is used to emulate a controlled handling
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
            //the name is for the matching to the key in users object in the state
            name="firstname"
            //the value is set to the key in users object in the state
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
