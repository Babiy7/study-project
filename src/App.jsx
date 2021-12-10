import React, { useState } from 'react';
// import BEM from './css/BEM/BEM';
import Form from './ReactJs/Form/Form';
import Select from './ReactJs/Select/Select';
import './App.scss';

function App() {
  const [n, setN] = useState();
  return (
    <div className="App">
      {/* <BEM /> */}
      {/* <div className="box" />
      <div className="container">
        <div className="item red" />
        <div className="item yellow" />
        <div className="item green" />
        <div classsName="item blue" />
      </div> */}
      <Form
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
      />
      <Select
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
      />
    </div>
  );
}

export default App;
