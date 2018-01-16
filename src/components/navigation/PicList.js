import React from 'react';
import Pic from './Pic';
import NoPics from './NoPics';

const PicList = props => {

const results = props.data;
let pics;
if (results.length  > 0) {
  pics = results.map(pic =>
  <Pic url={pic.images.fixed_height.url} key={pic.id} />
} else {
  pics = <NoPics />
}

return (

<ul className="pic-list">
{pics}
</ul>

);
}

export default PicList;
