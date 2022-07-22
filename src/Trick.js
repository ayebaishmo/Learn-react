import React from "react";
import { useState } from "react";




export default function Trick() {
  const [counter, setCounter] = useState(0);
  const handlesClick = () => setCounter(counter + 1);
  console.log({ counter });
  return (
    <div>
     <div>
      <button onClick={handlesClick}>Increment counter</button>
     </div>
     <div>
      counter value is {counter}
     </div>
    </div>
  )
}
