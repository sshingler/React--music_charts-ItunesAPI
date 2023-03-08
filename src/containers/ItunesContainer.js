import React, {useEffect, useState} from 'react'; 
import ItunesList from '../components/ItunesList';

const ItunesContainer = () => {
    const [itunes, setItunes] = useState ([])

    useEffect (() => {
        getItunes();
    }, [])

    const getItunes = function () {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(itunes => setItunes(itunes.feed.entry))
    }

    return (
        <ItunesList itunes = {itunes}></ItunesList>
    )
}

export default ItunesContainer; 