import React, { useState, useEffect, useContext } from "react";

const Sectiontwo = () => {
  //short circuit evaluation
  const { employees } = useContext(AppContext);
  const url = "https://jsonplaceholder.typicode.com/users";
  const [isloading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(true);

  console.log(Boolean([]));

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      });
  }, []);

  return (
    <>
      {isloading && <h1>LOADING....</h1>}
      {users && (
        <div>
          <h1>List of users</h1>
          {users.map((user) => {
            const { id, username } = user;
            return (
              <div key={id}>
                <p> {username} </p>
              </div>
            );
          })}
        </div>
      )}
      {show ? <h1>SHOWING A COMPONENT</h1> : <h1>SHOWING ANOTHER COMPONENT</h1>}
      <button onClick={() => setShow(!show)}>SHOW/HIDE</button>
    </>
  );
};

export default Sectiontwo;
