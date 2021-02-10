import React from 'react';

function TopStoriesCardContent({ article }) {
  const date = new Date(article.published_date).toString().slice(4, 10);
  const section = article.subsection ? article.subsection : article.section;
  return (
    <div className='content'>
      <div className='date'>
        {date} — {section}
      </div>
      <div className='title ts-title'>
        <a href={article.url}>{article.title}</a>
      </div>
    </div>
  );
}

export default TopStoriesCardContent;
