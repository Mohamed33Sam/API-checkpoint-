import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

function UserList() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setRes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <>
        {res.map((x) => (
          <Link
            className="entity"
            to={`details/${x.id}`}
            state={{ data: x }}
            key={x.id}
          >
            <FaUserAlt />
            <p>Name: {x.name}</p>
            
          </Link>
        ))}
      </>
    </div>
  );
}

export default UserList;
