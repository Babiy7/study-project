import React, { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { peopleSelector } from './redux/selectors/people';
import { planetsSelector } from './redux/selectors/planets';
import './App.scss';

function App() {
  const [counter, setCounter] = useState(0);
  const [update, setUpdate] = useState(false);
  const state = useSelector((state) => state);
  const { peopleData, peopleLoading, peopleError } = useSelector(peopleSelector);
  const { planetsData, planetsLoading, planetsError } = useSelector(planetsSelector);
  const dispatch = useDispatch();
  const [hex, setHex] = useState('#3ee63e');
  const [rgb, setRgb] = useState({ r: 62, g: 230, b: 62 });

  return (
    <div className="App">
      {/* <button
        type="button"
        onClick={() => {
          setCounter(counter + 1);
          setUpdate(!update);
        }}
      >
        Add one
      </button> */}
      {/* <Memoization a={counter} /> */}
      {/* <button
        type="button"
        onClick={() => {
          dispatch(getPeople());
          dispatch(getPlanets());
        }}
      >
        Click me
      </button> */}
      {/* <BEM /> */}
      {/* <div className="container">
        <div className="circle red" />
        <div className="circle yellow" />
        <div className="circle green" />
        <div className="circle blue" />
      </div> */}
      {/* <Positioning tabPosition={{ name: 'sticky', top: '-150px' }} /> */}
      {/* <div className="box-sizing" /> */}
      {/* <Responsive /> */}
      {/* <Basic /> */}
      {/* <Form
        inputsData={[
          {
            type: 'file',
            id: 'file',
            name: 'file',
            placeholder: 'Type file',
            required: true,
            onChange: (element) => console.log('element', element.target)
          },
          {
            type: 'text',
            id: 'name',
            name: 'name',
            placeholder: 'Type name',
            required: true,
            // можна добавляти регулярний вираз для кращої валідації
            // pattern: /[a-z]/,
          },
          {
            type: 'email',
            id: 'email',
            name: 'email',
            placeholder: 'Type email',
            required: true,
          },
          {
            type: 'submit',
            text: 'Save',
          },
        ]}
      /> */}
      {/* <Select
        options={[
          {
            value: 'one',
            option: 'One',
          },
          {
            value: 'two',
            option: 'Two',
          },
          {
            value: 'three',
            option: 'Three',
          },
        ]}
      /> */}
    </div>
  );
}

export default memo(App);
