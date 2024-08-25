import React from 'react';
import CardItem from '../CardItem/CardItem';


export default function CardList({storiesData}) {
  return (
    <div>
      {storiesData.map(story => {
        return <div key={story.id}>
          <CardItem story={story} />
        </div>;
      })}
    </div>
  );
}
