import React from "react";
import cardimg from "../images/myAvatar.png";

const Card = ({ employee, title }) => {
  //const { fullname, job } = props;
  //console.log(props);
  const { fullname, job } = employee;
  return (
    <div>
      <div className="card">
        <h4>{title} </h4>
        <img src={cardimg} alt="Card Image" />
        <footer>
          <h4>{fullname} </h4>
          <h2>{job} </h2>
        </footer>
      </div>
    </div>
  );
};

export default Card;
