import React from 'react';
import TopStoriesCardImage from './TopStoriesCardImage';
import TopStoriesCardContent from './TopStoriesCardContent';

function TopStoriesCard({ article }) {
  return (
    <div>
      <a href={article.url}>
        <TopStoriesCardImage article={article} />
      </a>
      <TopStoriesCardContent article={article} />
    </div>
  );
}

export default TopStoriesCard;
