import React from 'react';
import Pic from './Pic';

const PicList = props => {

const results = props.data;
let pics = results.map(pic =>
<Pic url={pic.images.fixed_height.url} />

);

return (

<ul className="pic-list">
{pics}
</ul>

);
}

export default PicList;
