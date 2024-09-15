import React from 'react';
import './CardItem.css';
import {Link} from 'react-router-dom';



export default function CardItem({story}) {
  const coverPicUrl = `/storiesFiles/${story.storyId}/pictures/${story.coverImage}`;

  return (
    <Link to={`/story/${story.storyId}`} className="storyCardLink">
      <div className="card__container">
        <img src={coverPicUrl} alt={story.storyName} />
        <div className="card__data">
          <h3>{story.storyName}</h3>
          <p>{story.mainText.split(' ').slice(0, 10).join(' ')}</p>

        </div>
      </div>
    </Link>
  );
}

