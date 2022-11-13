import React from "react";
import { useNavigate } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
//useHistory
const About = () => {
  const change = useNavigate();

  return (
    <div>
      <h1>ABOUT US</h1>

      <a href="https://twitter.com">
        {" "}
        <BsTwitter className="twitter" />
      </a>

      <FaTwitter />
      <p className="text-danger text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, ipsam?
        Cum repellat doloribus quod numquam dolor excepturi ad reprehenderit
        exercitationem nesciunt sint quidem modi dolores tenetur itaque
        assumenda rerum similique placeat, illum et, recusandae, doloremque iure
        voluptatum quaerat. Nisi quia nostrum ut perspiciatis a dolorum
        consectetur quis sequi, excepturi neque?
      </p>
      <a href="https://google.com">Visit Google</a>
      <button onClick={() => change("/employees")}>See our Employees</button>
    </div>
  );
};

export default About;
