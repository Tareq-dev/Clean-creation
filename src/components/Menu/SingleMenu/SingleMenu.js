import React from 'react';
import './singleMenu.css'

const SingleMenu = (props) => {
     console.log(props);
     return (
          <div className="menu m-1 shadow rounded-3 border d-flex">
               <div className="w-25">
               <img className="h-100" src={props.menu.img} alt="img" />
               </div>
               <div className="w-75 ms-2">
               <h5>{props.menu.name}</h5>
               <p>{props.menu.description}</p>
               </div>
          </div>
     );
};

export default SingleMenu;