import React from 'react';
import './singleMenu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const SingleMenu = (props) => {
     return (
          <div className="menu shadow border d-flex">
          <img src={props.menu.img} alt="img" />
               <div className="ms-2 menu-content">
               <h5>{props.menu.name}</h5>
               <p><small>{props.menu.description.slice(0,78)+"..."}</small></p>
               <div className="star-fa">
               <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStarHalfAlt} />
               </div>
               <p className="text-secondary fs-6">(154 Calories)</p>
               </div>
          </div>
     );
};

export default SingleMenu;