import React from 'react'


function MadeGoal() {
 return <h1>Goal!</h1>
}

function MissedGoal() {
 return <h1>Missed</h1>
}

function Cond(props) {
 const isGoal = props.isGoal;
 if (isGoal) {
  {
   return <MadeGoal />;
  }
 }
  return (
    <div>
     <MissedGoal />
     {isGoal}</div>
  )
}

export default Cond