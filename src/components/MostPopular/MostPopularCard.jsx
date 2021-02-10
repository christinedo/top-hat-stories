import React from 'react';
import MostViewedCardContent from './MostPopularCardContent';

function MostPopularCard({ article, rank }) {
  return (
    <div className='mv-card'>
      <div className='rank'>
        <span>{rank + 1}</span>
      </div>
      <MostViewedCardContent article={article} />
    </div>
  );
}

export default MostPopularCard;
