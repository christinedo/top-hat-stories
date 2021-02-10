import React from 'react';

function TopStoriesSkeleton() {
  return (
    <div className='skeleton-loading'>
      <div className='skeleton-image'></div>
      <div className='skeleton-content'>
        <div className='skeleton-text-container'>
          <div className='skeleton-text skeleton-date-text'></div>
          <div className='skeleton-text skeleton-main-text'></div>
          <div className='skeleton-text skeleton-sub-text'></div>
        </div>
      </div>
    </div>
  );
}

export default TopStoriesSkeleton;
