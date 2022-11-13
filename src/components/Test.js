import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//input.value
//value, onChange
//controlled input
//dynamic object properties
const Test = () => {
  const redirect = useNavigate();
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
    //console.log(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstname && person.lastname && person.email) {
      const newPerson = { ...person };
      setPeople([...people, newPerson]);
    }
    setPerson({ firstname: "", lastname: "", email: "" });
    redirect("/");
  };

  return (
    <div>
      <article>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstname">First Name : </label>
            <br />
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={person.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastname">Lastname : </label>
            <br />
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={person.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <button>SUBMIT</button>
        </form>
      </article>

      <article>
        {people.map((person, index) => {
          return (
            <div key={index}>
              <h3>
                {person.name} {person.lastname}{" "}
              </h3>
              <p>{person.email} </p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Test;
