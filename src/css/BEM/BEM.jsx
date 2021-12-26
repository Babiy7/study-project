import React from 'react';
import PropTypes from 'prop-types';
import './BEM.scss';

function BEM(props) {
  const miksAbout = (
    <div className="about">
      <div className="about__title title" />
      <div className="about__subtitle subtitle" />
    </div>
  );

  const about = (
    <div className="about">
      <div className="about__title" />
      <div className="about__subtitle" />
    </div>
  );

  const menu = (
    <nav className="menu">
      <a href="" className="menu__item menu__item_active" />
      <a href="" className="menu__item" />
      <a href="" className="menu__item" />
      <a href="" className="menu__item" />
      <a href="" className="menu__item" />
    </nav>
  );

  return (
    <div className="about">
      <div className="about__body">
        <div className="about__header">
          <div className="about__title title">
            About
          </div>
          <div className="about__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, provident aut dicta a, facere nobis ea vitae qui ex sint ipsum. Aliquam laudantium perferendis deleniti neque deserunt placeat, ipsa ad!
          </div>
        </div>
        <div className="about__row">
          <div className="about__column">
            <div className="item-about">
              <div className="item-about__icon" />
              <div className="item-about__title">Web</div>
              <div className="item-about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iusto quam ducimus? Aspernatur vitae dolore deleniti molestias atque, quia incidunt, nemo consequatur velit placeat accusamus non tempora illum, quos nam.</div>
            </div>
          </div>
          <div className="about__column">
            <div className="item-about">
              <div className="item-about__icon" />
              <div className="item-about__title">Ios and android</div>
              <div className="item-about__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe omnis delectus mollitia molestiae incidunt error possimus debitis rerum, ipsa veritatis voluptates, ratione suscipit sapiente nam voluptate provident enim distinctio ipsum!</div>
            </div>
          </div>
          <div className="about__column">
            <div className="item-about">
              <div className="item-about__icon" />
              <div className="item-about__title">marketing</div>
              <div className="item-about__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima fugit iste sequi nam beatae corporis enim quibusdam illo, consequatur temporibus facilis commodi quam accusamus voluptatum at atque nihil aperiam nulla.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BEM.propTypes = {};

export default BEM;
