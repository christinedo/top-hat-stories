import React from 'react';

function TopStoriesCardImage({ article }) {
  const image = article.multimedia[0];
  return (
    <div className='ts-image'>
      {image && <img src={image.url} alt={image.copyright} />}
    </div>
  );
}

export default TopStoriesCardImage;
