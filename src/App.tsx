import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';
import { MUITextField } from './components/MUITextField'
function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      <MUITextField />
    </div>
  );
}

export default App;
