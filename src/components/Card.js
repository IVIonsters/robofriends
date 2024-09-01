import React from 'react';

const Card = ({ id, name, email }) => {
  // this is an example of destructuring, allows us to grab the properties of the object passed in as props 
  // instead of having to write props.id, props.name, props.email
  // we can just write id, name, email ^^ meaning id = props.id, name = props.name, email = props.email
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?set=set2 `} style={{ width: '200px', height: '200px' }}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;