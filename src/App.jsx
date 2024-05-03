import React, { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SketchPicker } from 'react-color';
import { Alpha } from 'react-color/lib/components/common';
import { Wheel, Colorful } from '@uiw/react-color';
import power from './icons/free-icon-power-button-1015571.png';
import { Context } from './css/StackingContext/Context';
// import BEM from './css/BEM/BEM';
import { } from './JavaScript/DataStructures/LinkedList';
import Hooks from './ReactJs/Hooks';
import Select from './ReactJs/Select/Select';
import Positioning from './css/Positioning/Positioning';
import Basic from './css/Basic/Basic';
import Grid from './css/Grid/Grid';
import Responsive from './css/Responsive/Responsive';
import { getPeople } from './redux/actionCreators/people';
import { getPlanets } from './redux/actionCreators/planets';
import { peopleSelector } from './redux/selectors/people';
import { planetsSelector } from './redux/selectors/planets';
import Memoization from './ReactJs/Memoization';
import WorkerTest from './network/WorkerTest';
import Notifications from './JavaScript/Notifications/Notifications';
import WebCamera from './JavaScript/WebCamera/WebCamera';
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

  // console.log('peopleData', peopleData);
  // console.log('planetsData', planetsData);

  return (
    <div className="App">
      {/* <WebCamera /> */}
      {/* <div style={{ */}
      {/*  width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#4f4e4a', */}

      {/* }} */}
      {/* > */}
      {/*  <div style={{ */}
      {/*    background: 'blue', width: '50px', height: '50px', borderRadius: '50%', boxShadow: '0px 0px 40px 10px blue' */}
      {/*  }} */}
      {/*  > */}
      {/*    <img alt="power" width="50px" src={power} /> */}
      {/*  </div> */}
      {/* </div> */}
      {/* <SketchPicker /> */}
      {/* <Colorful color="#9183e6" /> */}
      {/* <Wheel */}
      {/*  color={hex} */}
      {/*  onChange={(value) => { */}
      {/*    console.log('value', value); */}
      {/*    setHex(value.hex); */}
      {/*    setRgb({ r: value.rgb.r, g: value.rgb.g, b: value.rgb.b }); */}
      {/*  }} */}
      {/* /> */}
      {/* {hex} */}
      {/* <div> */}
      {/*  {`(${rgb.r}:${rgb.g}:${rgb.b})`} */}
      {/* </div> */}
      {/* <Basic /> */}
      <Notifications />
      {/* <WebCamera /> */}
      {/* <Grid />* /}
      {/* <Context /> */}
      {/* <WorkerTest />
      <video><track kind="captions" /></video> */}
      {/* <Hooks /> */}
      {/* <div className="container" /> */}
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
