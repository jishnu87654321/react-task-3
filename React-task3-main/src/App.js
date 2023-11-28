import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = [ 
  'red',
    '#33FF57',
    'blue',
    'yellow',
    '#FF00FF',
    '#00FFFF',
    '#FFA500',
    'purple',
    '#FFB6C1',
    'green',
    'salmon',
    '#00CED1',
    'saddlebrown',
    '#FF8300',
    'steelblue',
    '#FFCC33'];

  return (
    <div className="App">
      <center><h1>Color Picker</h1></center>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
