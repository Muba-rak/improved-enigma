import React, { useState, useContext } from "react";
//useContext
// provider - value
//consumer

const PeopleContext = React.createContext();

//provider- value consumer

const Propdrilling = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "Wilson" },
    { id: 2, name: "Jude" },
    { id: 3, name: "Ifeanyi" },
  ]);
  const clearPerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PeopleContext.Provider value={{ clearPerson, people }}>
      <h1>List Of people</h1>
      <List />
    </PeopleContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PeopleContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { clearPerson } = useContext(PeopleContext);
  return (
    <>
      <h4>
        {name} {id}
        <button onClick={() => clearPerson(id)}>Remove</button>
      </h4>
    </>
  );
};

export default Propdrilling;
