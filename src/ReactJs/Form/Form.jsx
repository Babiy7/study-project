/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

function Form({ inputsData }) {
  const form = useRef(null);

  function setForm(form) {
    const data = {};

    function getData({ children, tagName }) {
      if (tagName === 'FORM') {
        getData(children[0]);
      }

      if (tagName === 'DIV') {
        for (let i = 0; i < children.length; i++) {
          getData(children[i]);
        }
      }

      if (tagName === 'LABEL') {
        data[children[0].name] = children[0].value;
      }
    }
    getData(form);

    return data;
  }

  function buildInput(element) {
    if (['text', 'email', 'file'].includes(element.type)) {
      return (
        <label htmlFor={element.id}>
          <input className="form__input" {...element} />
        </label>
      );
    }

    if (['submit'].includes(element.type)) {
      return (
        <button className="form__button" type={element.type}>
          {element.text}
        </button>
      );
    }
  }

  return (
    <form
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();
        const data = setForm(form.current);
        console.log('data', data);
      }}
    >
      <div className="form">
        <div className="form__header">
          <h3>Simple form</h3>
        </div>
        {inputsData.map((data) => buildInput(data))}
      </div>
    </form>
  );
}

Form.defaultProps = {
  inputsData: [],
};

Form.propTypes = {
  inputsData: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Form;
