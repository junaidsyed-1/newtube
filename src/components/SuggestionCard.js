import React from 'react';
import { countViews } from '../utils/helper';

const SuggestionCard = ({ videos }) => {

    const { snippet, statistics } = videos;
    const { thumbnails, title, channelTitle } = snippet;


    return (
        <div className="flex flex-row mt-8 shadow-sm">
            <img src={thumbnails.medium.url} alt="Image" className='w-52 h-28 object-cover rounded-md ' />
            <div className='px-2'>
                <p className="font-bold">{title}</p>
                <p >{channelTitle}</p>
                <p>{countViews(statistics.viewCount)} views</p>
            </div>
        </div>
    )
}

export default SuggestionCard;