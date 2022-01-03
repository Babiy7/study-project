import React from 'react';
import PropTypes from 'prop-types';
import './Basic.scss';

const Basic = (props) => {
  const specifications = () => [
    {
      name: '*',
      fontSize: 20,
    },
    {
      name: 'tag',
      fontSize: 13,
    },
    {
      name: 'class',
      fontSize: 17,
    },
    {
      name: 'id',
      fontSize: 25,
    },
    {
      name: 'style',
      fontSize: 30,
    },
    {
      name: '!important',
      fontSize: 35,
    },
  ].map(({ name, fontSize }, i) => (
    <div
      className="basic__specifications__specification"
      style={{
        width: (i + 1) * 80,
        height: (i + 1) * 70,
        position: 'absolute',
        top: (i + 1) * 50,
        left: (i + 1) * 20,
        background: `rgb(255, ${(i + 1) * 30}, ${(i + 1) * 30})`,
        boxShadow: `${i * 3}px ${i * 3}px ${i * 6}px ${i * 2}px rgb(0, 0, 0, 30%)`,
      }}
    >
      <h2 className="basic__specifications__specification__title" style={{ fontSize }}>{name}</h2>
    </div>
  ));

  const Combinators = () => (
    <>
      <div className="combinators__container">
        <code>
          ul
          {' '}
          {'>'}
          {' '}
          li
        </code>
        <h1>
          List
          {' '}
          <code>ul</code>
        </h1>
        <ul>
          <li>
            <code>li</code>
            {' '}
            Line 1
          </li>
          <li>
            <code>li</code>
            {' '}
            Line 2
          </li>
          <li>
            <h2>
              List
              {' '}
              <code>ol</code>
            </h2>
            <ol>
              <li>
                <code>li</code>
                {' '}
                line 1
              </li>
              <li>
                <code>li</code>
                {' '}
                line 2
              </li>
            </ol>
          </li>
        </ul>
      </div>
      <div className="combinators__container">
        <code>h1 + p</code>
        <h1>Heading</h1>
        <p>
          <code>p</code>
          {' '}
          Lorem ipsum dolor
        </p>
        <p>
          <code>p</code>
          {' '}
          Lorem ipsum dolor
        </p>
        <p>
          <code>p</code>
          {' '}
          Lorem ipsum dolor
        </p>
      </div>
      <div className="combinators__container">
        <code>h1 ~ p</code>
        <h2>Heading 2</h2>
        <p>
          <code>p</code>
          {' '}
          Lorem ipsum dolor
        </p>
        <div>div Lorem ipsum dolor</div>
        <p>
          <code>p</code>
          {' '}
          Lorem ipsum dolor
        </p>
        <p>
          <code>p</code>
          {' '}
          Lorem ipsum dolor
        </p>
        <div>div Lorem ipsum dolor</div>
        <p>
          <code>p</code>
          {' '}
          Lorem ipsum dolor
        </p>
        <p>
          <code>p</code>
          {' '}
          Lorem ipsum dolor
        </p>
      </div>
    </>
  );

  return (
    <div className="basic">
      <div className="box basic__box-shadow">
        <h1>Box shadow</h1>
      </div>
      <div className="box basic__box-sizing basic__box-sizing_border-box">
        <div>
          <h1>Box sizing</h1>
          <h2>border box</h2>
        </div>
      </div>
      <div className="box basic__box-sizing basic__box-sizing_content-box">
        <div>
          <h1>Box sizing</h1>
          <h2>content box</h2>
        </div>
        <h3 className="basic__border-title">
          border 20px
        </h3>
        <h3 className="basic__padding-title">
          padding 8px
        </h3>
      </div>
      <div className="basic__specifications">
        <h1 className="basic__specifications__title">Specifications</h1>
        {specifications()}
      </div>
      <Combinators />
    </div>
  );
};

Basic.propTypes = {

};

export default Basic;
