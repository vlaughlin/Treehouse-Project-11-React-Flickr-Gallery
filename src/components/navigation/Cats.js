import React from 'react';
import Container from '../Container';

//The cats query is passed into the Container component via props

const Cats = props => {
  return (
    <div>
    <h2>{props.query}</h2>
    <Container query={"cats"} />

    </div>
  )
}

export default Cats;
