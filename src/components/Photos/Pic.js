import React from 'react';


// The <li> element is exported to the <ul> element in the PicList component.
  //img source has picture data

const Pic = props => (
  <li>
    <img src={props.url} alt={props.title} />
  </li>
);

export default Pic;
