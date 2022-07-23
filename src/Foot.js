import React from 'react'

export default function Foot() {
 const shoot = () => {
  alert("Great shot!");
 }
  return (
    <div>
     <button onClick={shoot}>
      Take the shot!
     </button>
    </div>
  )
}
