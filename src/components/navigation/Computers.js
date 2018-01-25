import React from 'react';
import Container from '../Container';

//The computers query is passed into the Container component via props

const Computers = props => {

return (

<div>

      <h2>{props.query}</h2>
      <Container query={"computers"} />
    </div>
)
}
export default Computers;
