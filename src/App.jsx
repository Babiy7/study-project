import React, { useState } from 'react';
// import BEM from './css/BEM/BEM';
import Form from './ReactJs/Form/Form';
import Select from './ReactJs/Select/Select';
import Positioning from './css/Positioning/Positioning';
import Basic from './css/Basic/Basic';
// import Responsive from './css/Responsive/Responsive';
import './App.scss';

function App() {
  const [n, setN] = useState();
  return (
    <div className="App">
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
      <Basic />
      {/* <Form
        inputsData={[
          {
            type: 'text',
            id: 'name',
            name: 'name',
            placeholder: 'Type name',
            required: true,
            // можна добавляти регулярний вираз для кращої валідації
            // pattern: \/\,
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

export default App;
