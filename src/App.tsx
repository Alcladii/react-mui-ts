import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';
import { MUITextField } from './components/MUITextField'
import { MUISelect } from './components/MUISelect';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MUITextField /> */}      
      {/* <MUITextField /> */}
      <MUISelect />
    </div>
  );
}

export default App;
