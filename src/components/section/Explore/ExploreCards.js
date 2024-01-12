import React from 'react'
import ExploreCardItem from './ExploreCardItem';
import '../../../scss/base/explore/_exploreCard.scss';
const ExploreCards = () => {
    return (
        <div className="exploreCards"> 
            <ExploreCardItem/>
            <ExploreCardItem/>
            <ExploreCardItem/>
            <ExploreCardItem/>
            <ExploreCardItem/>
            <ExploreCardItem/>
            <ExploreCardItem/>
        </div>
    )
}

export default ExploreCards;
