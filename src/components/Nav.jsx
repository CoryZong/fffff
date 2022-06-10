import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const routes = ["/", "/cancelBill", "/money", "/discount"];

  const navigate = useNavigate();
  const [NavName, setNavName] = useState([]);

  useEffect(() => getData, []);

  function getData() {
    Axios.get("http://localhost:3000/category")
      .then((res) => {
        setNavName(res.data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="background-content-nav">
      {NavName.map((e, index) => {
        return (
          <button
            key={e.id}
            className="btn-nav"
            onClick={() => {
              navigate(routes[index]);
            }}>
            {e.name}
          </button>
        );
      })}
    </div>
  );
};

export default Nav;
