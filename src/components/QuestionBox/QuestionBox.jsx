"use client";
import React, {useRef, useState} from 'react';
import s from './QuestionBox.module.css';

export default function QuestionPictureBox({storyItem, imgBasePath, isHideAfterDragId}) {
  const [isDragging, setIsDragging] = useState(false);
  const imgRef = useRef(null);

  const handleDragStart = (event) => {
    setIsDragging(true);
    // Устанавливаем идентификатор картинки в `dataTransfer`
    event.dataTransfer.setData('pictureId', storyItem.id.toString()); // Преобразуем id в строку

  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };


  return (
    <div className={s.question_wrapper}>
      <img
        className={s.question_picture}
        ref={imgRef}
        src={imgBasePath + storyItem.picSrc}
        alt="Picture"
        draggable={true}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{
          visibility: isHideAfterDragId ? 'hidden' : 'visible',
          opacity: isDragging ? 0.3 : 1,
        }}
      />
    </div>
  );
}
