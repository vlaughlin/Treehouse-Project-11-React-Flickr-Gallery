import React from 'react';
import Pic from '../Photos/Pic';
import NoPics from '../Photos/NoPics'


const PicList = props => {

const results = props.data;
let pics;
if (results.length > 0) {
   pics = results.map(pic =>
 <Pic url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} key={pic.id} alt={props.title} /> );
    } else {
   pics = <NoPics />

}


return(
    <div>
      <ul>
        {pics}
      </ul>
    </div>
);

}

export default PicList;
