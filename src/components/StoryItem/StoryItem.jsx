"use client";
import AnswerBox from '../../components/AnswerBox/AnswerBox';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import React, {useState} from 'react';
import s from './StoryItem.module.css';
import {Link, useParams} from 'react-router-dom';
import {storiesData} from '../../mock/storiesData';
import {getRandom} from '../../utils/getRandom';
import {playSound} from '../../utils/playSound';

function StoryItem() {
  const params = useParams();

  function getStory() {
    return storiesData.find(story => story.storyId === +params.id);
  }

  const [story, setStory] = useState(getStory());

  const imgBasePath = `/storiesFiles/${params.id}/pictures/`;
  const soundBasePath = `/storiesFiles/${params.id}/sounds/`;

  return (
    <div className={s.storyItem_wrapper}
      style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${imgBasePath + story.coverImage})`}}
    >
      <div className={s.main_story_text_wrapper}>
        <h1 className={s.title}>{story.storyName}</h1>
        <div className={s.button_wrapper}>
          {story.pictures.map((item, index) => (
            <button
              key={index}
              className={s.btn}
              onClick={() => playSound(`${soundBasePath + item.soundSrc}`)}
            >
              {item.text}
            </button>
          ))}
        </div>

        <div className={s.scroll_wrapper}>
          <p className={s.main_story_text}>
            {story.mainText}
          </p>
        </div>
        <Link className={s.back_btn} to='/'>&#9668;&#9668; На главную</Link>
      </div>

      <div className={s.answer_content}>
        <div className={s.question_container}>
          {getRandom(story.pictures).map((storyItem) => (
            <QuestionBox
              key={storyItem.id}
              storyItem={storyItem}
              imgBasePath={imgBasePath}
            />
          ))}
        </div>

        <div className={s.answer_container}>
          {getRandom(story.pictures).map((answerItem) => (
            <AnswerBox
              key={answerItem.id}
              pictures={story.pictures}
              answerItem={answerItem}
              imgBasePath={imgBasePath}
              soundBasePath={soundBasePath}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoryItem;