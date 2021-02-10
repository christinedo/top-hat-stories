import React from 'react';
import * as APIUtil from '../../util/useFetchUtil';
import TopStoriesCard from './TopStoriesCard';
import TopStoriesSkeleton from './TopStoriesSkeleton';

function TopStories({ section }) {
  const URL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYT_KEY}`;
  const result = APIUtil.useFetch(URL);
  const data = result.data;

  if (!data) {
    const skeleton = [...Array(10)].map((_, i) => (
      <li key={i} className='ts-card-item'>
        <TopStoriesSkeleton />
      </li>
    ));
    return <ul className='ts-container'>{skeleton}</ul>;
  }

  return (
    <div>
      <ul className='ts-container'>
        {data.results.slice(0, 10).map((article, idx) => (
          <li key={idx} className='ts-card-item'>
            <TopStoriesCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopStories;
