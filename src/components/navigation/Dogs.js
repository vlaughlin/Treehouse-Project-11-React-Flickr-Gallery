import React from 'react';
import Container from '../Container';

//The dogs query is passed into the Container component via props

const Dogs = props => {

return (

<div>
<h2>{props.query}</h2>
<Container query={"dogs"} />
    </div>
)
}
export default Dogs;
