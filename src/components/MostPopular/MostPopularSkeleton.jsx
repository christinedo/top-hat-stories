import React from 'react';

function MostPopularSkeleton() {
  return (
    <div className='skeleton-loading'>
      <div className='skeleton-content mv-card'>
        <div className='rank'>
          <div className='skeleton-rank'></div>
        </div>
        <div className='skeleton-text-container content'>
          <div className='skeleton-text skeleton-main-text'></div>
          <div className='skeleton-text skeleton-sub-text'></div>
          <div className='skeleton-text skeleton-byline'></div>
        </div>
      </div>
    </div>
  );
}

export default MostPopularSkeleton;
