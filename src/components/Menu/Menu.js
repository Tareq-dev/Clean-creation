import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleMenu from "../SingleMenu/SingleMenu";
import "./Menu.css";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
  return (
    <div className="bg-img p-3 w-full ">
      <div className="mt-2 bg-white">
        <h2 className="text-center">Online Menu</h2>
        <p className="text-center">
          Not interested in a plan? Shop our online menu and pick as many or few
          meals as you need.
        </p>
        <hr />
        <div className="menus mt-3 pt-5 mb-3 p-2">
          {menus.map((menu) => (
            <SingleMenu key={menu.id} menu={menu} />
          ))}
        </div>
        <div className="d-flex d-flex justify-content-center">
          <button
            onClick={() => navigate("/menu")}
            className="btn-green mt-3 mb-4 border-0 rounded py-2 px-3 fw-bold shadow-lg"
          >
            View Enter Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
