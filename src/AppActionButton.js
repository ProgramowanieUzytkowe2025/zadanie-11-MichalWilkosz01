import React from 'react';

export default function AppActionButton({ label, a, b, onResultChange, isDisabled }) {
  const handleClick = () => {
    let result;
    switch (label) {
      case 'Dodaj':
        result = Number(a) + Number(b);
        break;
      case 'Odejmij':
        result = Number(a) - Number(b);
        break;
      case 'Mnoż':
        result = Number(a) * Number(b);
        break;
      case 'Podziel':
        if (b === '0') {
          alert('Błąd: Dzielenie przez 0');
          return; 
        } else {
          result = Number(a) / Number(b);
        }
        break;
      default:
        result = '';
    }
    onResultChange(result);
  };

  return (
    <button onClick={handleClick} disabled={isDisabled}>
      {label}
    </button>
  );
}
