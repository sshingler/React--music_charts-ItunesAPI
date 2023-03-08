import React from 'react'; 

const ItunesItem = ({itune}) => {

    return <li><h3>{itune['im:name'].label}</h3><h3>{itune['im:artist'].label}</h3></li>
}

export default ItunesItem; 