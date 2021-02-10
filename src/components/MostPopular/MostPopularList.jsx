import React from 'react';
import * as APIUtil from '../../util/useFetchUtil';
import MostPopularCard from './MostPopularCard';
import MostPopularSkeleton from './MostPopularSkeleton';

function MostPopularList({ category, emoji, label }) {
  const URL = `https://api.nytimes.com/svc/mostpopular/v2/${category}/1.json?api-key=${process.env.REACT_APP_NYT_KEY}`;
  const result = APIUtil.useFetch(URL);
  const data = result.data;

  if (!data) {
    const skeleton = [...Array(6)].map((_, i) => (
      <li key={i} className='mv-card'>
        <MostPopularSkeleton />
      </li>
    ));
    return <ul className='mv-list-container'>{skeleton}</ul>;
  }

  return (
    <div className='mv-container'>
      <h1>
        <span role='img' aria-label={label}>
          {emoji}
        </span>
        <span className='category-title'>Most {category}</span>
      </h1>
      <ul className='mv-list-container'>
        {data.results.slice(0, 6).map((article, idx) => (
          <li key={idx}>
            <MostPopularCard article={article} rank={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MostPopularList;
