import React, { useState, useEffect } from 'react';
import AppActionButton from './AppActionButton';
import AppCalculationHistory from './AppCalculationHistory';

export default function AppCalculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');  
  const [comparisonResult, setComparisonResult] = useState(''); 
  const [history, setHistory] = useState([]);  

  const handleAChange = (event) => {
    setA(event.target.value);
  };

  const handleBChange = (event) => {
    setB(event.target.value);
  };

  const compareNumbers = React.useCallback(() => {
  if (a === '' || b === '') {
    setComparisonResult('');
    return;
  }
  if (Number(a) > Number(b)) {
    setComparisonResult('Liczba A jest większa od liczby B');
  } else if (Number(a) < Number(b)) {
    setComparisonResult('Liczba A jest mniejsza od liczby B');
  } else {
    setComparisonResult('Liczba A jest równa liczbie B');
  }
}, [a, b]);

useEffect(() => {
  compareNumbers();
}, [compareNumbers]);



  const handleResultChange = (newResult, operation) => {
    setResult(newResult);  

    setHistory(prevHistory => [
      ...prevHistory,
      {
        operation,
        a,
        b,
        result: newResult
      }
    ]);
  };

  const isValidInput = a !== '' && b !== '';  

  const handleSelectHistoryItem = (item, index) => {
    setA(item.a);
    setB(item.b);
    setResult(item.result);
    setComparisonResult(''); 

    setHistory(prevHistory => prevHistory.slice(0, index + 1));

    compareNumbers();
  };

  return (
    <div>
      <h1>Kalkulator</h1>

      <div>
        <label htmlFor="a">A: </label>
        <input
          id="a"
          type="number"
          value={a}
          onChange={handleAChange}
        />
      </div>

      <div>
        <label htmlFor="b">B: </label>
        <input
          id="b"
          type="number"
          value={b}
          onChange={handleBChange}
        />
      </div>

      <div>
        <AppActionButton 
          label="Dodaj" 
          a={a} 
          b={b} 
          onResultChange={(result) => handleResultChange(result, 'Dodaj')} 
          isDisabled={!isValidInput} 
        />
        <AppActionButton 
          label="Odejmij" 
          a={a} 
          b={b} 
          onResultChange={(result) => handleResultChange(result, 'Odejmij')} 
          isDisabled={!isValidInput}  
        />
        <AppActionButton 
          label="Mnoż" 
          a={a} 
          b={b} 
          onResultChange={(result) => handleResultChange(result, 'Mnoż')} 
          isDisabled={!isValidInput}  
        />
        <AppActionButton 
          label="Podziel" 
          a={a} 
          b={b} 
          onResultChange={(result) => handleResultChange(result, 'Podziel')} 
          isDisabled={!isValidInput}  
        />
      </div>

      <div>
        <label htmlFor="result">Wynik: </label>
        <input
          id="result"
          type="text"
          value={result}
          readOnly
          style={{ width: '300px', padding: '8px', fontSize: '16px' }}  
        />
      </div>

      <div>
        <label htmlFor="comparisonResult">Porównanie: </label>
        <input
          id="comparisonResult"
          type="text"
          value={comparisonResult}
          readOnly
          style={{ width: '300px', padding: '8px', fontSize: '16px' }}  
        />
      </div>

      <AppCalculationHistory history={history} onSelectHistoryItem={handleSelectHistoryItem} />
    </div>
  );
}
