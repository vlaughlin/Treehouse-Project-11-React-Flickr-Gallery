import React from 'react';
import Container from '../Container';

const Computers = props => {

return (

<div>

      <h2>{props.query}</h2>
      <Container query={"computers"} />
    </div>
)
}
export default Computers;
