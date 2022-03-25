import React from 'react';
import './singleMenu.css'

const SingleMenu = (props) => {
     return (
          <div className="menu shadow border d-flex">
               <div>
               <img src={props.menu.img} alt="img" />
               </div>
               <div className="ms-2">
               <h5>{props.menu.name}</h5>
               <p>{props.menu.description}</p>
               </div>
          </div>
     );
};

export default SingleMenu;