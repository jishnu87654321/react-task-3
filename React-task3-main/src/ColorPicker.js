import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker() {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

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
    '#FFCC33',
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  return (
    <div className="color-picker" style={{ backgroundColor: selectedColor }}>
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      <button onClick={toggleColorList}>Pick a color</button>
      {selectedColor && (
        <div className="selected-color">
          <p>You picked: {selectedColor}</p>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
