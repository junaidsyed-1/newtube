import React from 'react'
import ButtonsContainer from './ButtonsContainer';
import CardContainer from './CardContainer';
import VideoCardShimmer from './ShimmerUi/videoCardShimmer';

const SecondaryContainer = () => {
    return (
        <div className=" md:pl-6">
            <ButtonsContainer />
            <VideoCardShimmer />
            {/* <CardContainer /> */}
        </div>
    )
}

export default SecondaryContainer;