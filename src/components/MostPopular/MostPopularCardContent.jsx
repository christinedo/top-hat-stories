import React from 'react';

function MostPopularCardContent({ article }) {
  return (
    <div className='content'>
      <div className='title mp-title'>
        <a href={article.url}>{article.title}</a>
      </div>
      <div className='byline'>{article.byline.slice(3)}</div>
    </div>
  );
}

export default MostPopularCardContent;
