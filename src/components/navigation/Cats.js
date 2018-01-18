import React from 'react';
import Container from '../Container';


const Cats = props => {
  return (
    <div>
    <h2>{props.query}</h2>
    <Container query={"cats"} />

    </div>
  )
}

export default Cats;
