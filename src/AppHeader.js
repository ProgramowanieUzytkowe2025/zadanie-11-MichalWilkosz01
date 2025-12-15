import React, { useState } from 'react';

const AppHeader = () => {
  const [fontSize, setFontSize] = useState('medium');

  const changeFontSize = (size) => {
    setFontSize(size);
  };

  return (
    <header style={{ textAlign: 'center', margin: '20px' }}>
      <h1 style={{ fontSize: fontSize === 'small' ? '14px' : fontSize === 'medium' ? '18px' : '24px' }}>
        Michał Wilkosz
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button onClick={() => changeFontSize('small')} style={{ fontSize: '14px' }}>A</button>
        <button onClick={() => changeFontSize('medium')} style={{ fontSize: '18px' }}>A</button>
        <button onClick={() => changeFontSize('large')} style={{ fontSize: '24px' }}>A</button>
      </div>
    </header>
  );
};

export default AppHeader;
