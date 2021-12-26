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
  ].map(({ name, fontSize }, i) => {
    console.log();

    return (
      <div
        className="basic__specifications__specification"
        style={{
          width: (i + 1) * 110,
          height: (i + 1) * 110,
          position: 'absolute',
          top: (i + 1) * 50,
          left: (i + 1) * 20,
          background: `rgb(255, ${(i + 1) * 30}, ${(i + 1) * 30})`,
          // boxShadow: `${i + 3}, ${i + 3}, ${i + 4}, ${i + 1}, rgb(0, 0, 0, 30%)`,
        }}
      >
        <h2 className="basic__specifications__specification__title" style={{ fontSize }}>{name}</h2>
      </div>
    );
  });

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
      <div className="basic__combinators">
        sfdf
      </div>
    </div>
  );
};

Basic.propTypes = {

};

export default Basic;
