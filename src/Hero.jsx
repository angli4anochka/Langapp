import './Hero.css';
import {Link} from 'react-router-dom';



function Hero() {
  return (
    <div className="hero">
      <ul className="hero__card_list">
        <li className='hero__card__el'>
          <Link to="/hero-card" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="hero__card__el_top hero__card_picture">
              <h3 className="hero__card_title">Большие гонки</h3>
            </div>
            <p className="hero__description">
              Давным-давно оленные люди устроили большой праздник. И на этом празднике хозяева решили организовать между стойбищами гонки на оленьих упряжках.
            </p>
          </Link>
        </li>
        <li className='hero__card__el'>
          <Link to="/hero-card2" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="hero__card__el_top hero__card_picture2">
              <h3 className="hero__card_title">Розовые люди</h3>
            </div>
            <p className="hero__description">
              Давно это было. Жил оленный человек  - чаучу.
              У него были  престарелые родители, жена и двое детей.
              Но однажды от непонятного мора у него пало все стадо.
            </p>
          </Link>
        </li>
        <li className='hero__card__el'>
          <Link to="/hero-card3" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="hero__card__el_top hero__card_picture3">
              <h3 className="hero__card_title">Орлиное сердце</h3>
            </div>
            <p className="hero__description">
              В одном стойбище жили две подруги. Они всегда соревновались друг с другом в ловкости, быстроте силе.
              Как юноши, упражнялись они с копьем
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Hero;
