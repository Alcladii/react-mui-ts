import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiTypography } from './components/MuiTypography';
import { MUIButton } from './components/MUIButton';
import { MUITextField } from './components/MUITextField'
import { MUISelect } from './components/MUISelect';
import {MUIRadioButton} from './components/MUIRadioButton';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MUITextField /> */}      
      {/* <MUITextField /> */}
      {/* <MUISelect /> */}
      {<MUIRadioButton />}
    </div>
  );
}

export default App;
