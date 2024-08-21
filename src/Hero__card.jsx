import React from 'react';
import spirits from './sounds/spirits.mp3'
import reindeer from './sounds/reindeer.mp3'
import son from './sounds/son.mp3'
import holiday from './sounds/holiday.mp3'
import './Hero__card.css'



function Hero__card() {

    const playSound = (soundFile) => {
        const audio = new Audio(soundFile);
        audio.play();
      };


    return (
        <div className = "hero__content">
            <h1>Большие гонки</h1>
            <div className="hero__group_btns">
                <button className="btn1" onClick={() => playSound(holiday)}>Holiday</button>
                <button className="btn2" onClick={() => playSound(reindeer)}>reindeer team</button>
                <button className="btn3" onClick={() => playSound(spirits)}>Spirits</button>
                <button className="btn4" onClick={() => playSound(son)}>Son</button>
            </div>
<p className="hero__text">Давным-давно оленные люди устроили большой
holiday. И на этом holiday хозяева решили организовать
между стойбищами гонки на reindeer team. В состя-
заниях участвовал son одного богатого оленевода.
Перед началом гонок старик подошел к son и стал на-
ставлять его, как лучше обогнать остальных соперников,
дал ему самых быстрых оленей.
Начались гонки, но son пришел самым последним
— Как же так, ты, son тундры, и так опозорился? —
с досадой спросил его старик.
Отец, я оказался в окружении злых spirits
оправдываясь , ответил сын. 
Но ведь злые spirits днем не бродят, они выходят ночью, - в недоумении  пожал плечами старик.
 - Начал я было вырваться вперед, но меня обогнал Келъевье. Я оглянулся назад, там мчался Кэленкеу, слева  был Келелькут, справа был  Келерультын.  Ну в общем, я оказался в окружении  злых  духов и побоялся вырваться вперед, вот и все - просто объяснил son.
</p>

<div className="hero__game">

</div>
        </div>
    )
}

export default Hero__card
