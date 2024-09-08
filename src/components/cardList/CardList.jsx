import React from 'react';
import CardItem from '../CardItem/CardItem';
import s from "./CardList.module.css"


export default function CardList({storiesData}) {
  return (
    <ul className={s.cardList}> 
      {storiesData.map(story => {
        return (
          <li key={story.id}>
            <CardItem story={story} />
          </li>
        );
      })}
    </ul>
  );
}
