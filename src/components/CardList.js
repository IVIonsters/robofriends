import React from "react";
import Card from "./Card";


// CardList component is a parent component that renders multiple Card components

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          // we need to give each child a unique key prop, so we use the index i
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />)
        })
      }
    </div>
  );
}

export default CardList;



// this is an example of destructuring, allows us to grab the properties of the object passed in as props
// this allows us to loop over the robots array and create a new Card component for each robot
// this data was previously in the index.js file, but we moved it here to keep the index.js file clean
// <div>
//   <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
//   <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
//   <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
// </div>

// this is the same as above, but with the data being mapped over instead of hard coded