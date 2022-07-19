import React from 'react'

export default function Tools(props) {
 const name = props.name;
 const tool = props.tool;
  return (
    <div>
     <h1>My name is {name}</h1>
     <p>My favourite design tool is {tool}</p>
    </div>
  );
}
