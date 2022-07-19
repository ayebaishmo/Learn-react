import React from "react";
import logo from './img/logo.png';

const user = {
 firstName: 'Ishmael',
 lastname: 'Ayebazibwe'
};

// const logo = <img src="img/logo.png"></img>

function Jsx() {
  return(
  <div>
    {user.firstName + ' ' +user.lastname}
    <img src={logo} alt="" />
  </div>
  )
}

export default Jsx;
