import React, { useEffect, useState } from 'react';
import './Menu.css'
import SingleMenu from './SingleMenu/SingleMenu';

const Menu = () => {
     const [menus,setMenus] = useState([]);
     useEffect(()=>{
          fetch('data.json')
          .then(res => res.json())
          .then(data => setMenus(data));
     },[])
     return (
          <div className="bg-img p-5 w-100">
          <div className="mt-5 p-5 bg-white">
              <h2 className="text-center">Online Menu</h2>
              <p className="text-center">Not interested in a plan? Shop our online menu and pick as many or few meals as you need.</p> 
               <div className="menus mt-5 pt-5">
               {
                    menus.map(menu => <SingleMenu key={menu.id} menu={menu} />)
               }
               </div>
               <div className="d-flex d-flex justify-content-center">
               <button className="bg-info mt-5 border-0 rounded py-2 px-3 fw-bold shadow-lg">View Enter Menu</button>
               </div>
          </div>
          </div>
     );
};

export default Menu;