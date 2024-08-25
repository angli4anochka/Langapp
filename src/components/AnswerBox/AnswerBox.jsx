/* eslint-disable @next/next/no-img-element */
"use client";
import React, {useState} from 'react';
import s from './answer.module.css';

function AnswerBox({answerItem, pictures, imgBasePath}) {
  const [associatedPictureItem, setAssociatedPictureItem] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);


  const handleDrop = (event) => {
    event.preventDefault();
    const pictureId = +event.dataTransfer.getData('pictureId');
    if (answerItem.id === pictureId) {
      setIsCorrect(true);
      setAssociatedPictureItem(pictures.find(el => el.id === pictureId));
      setIsWrongAnswer(false);

    } else {
      setIsCorrect(false);
      setIsWrongAnswer(true);
      setTimeout(() => {setIsWrongAnswer(false);}, 2000);
    }

  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className={[s.answer_box, isWrongAnswer ? s.wrongBg : ''].join(' ')}>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={s.answer_item}
      >
        {isCorrect ? (
          <div className={s.correct_answer_block} >
            <img
              className={s.answer_image}
              draggable="false"
              src={imgBasePath + associatedPictureItem.picSrc}
              alt={associatedPictureItem.text} />
          </div>
        ) : (
          <div className={s.default_answer_block}>{answerItem.text}</div>
        )}

        {/* {isWrongAnswer && <p>Не верно. Попробуй еще раз!</p>} */}
      </div>
    </div>
  );
}

export default AnswerBox;