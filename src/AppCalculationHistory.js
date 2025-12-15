import React from 'react';

export default function AppCalculationHistory({ history, onSelectHistoryItem }) {
  return (
    <div>
      <h2>Historia Działań</h2>
      {history.length === 0 ? (
        <p>Brak wykonanych działań.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Operacja</th>
              <th>Liczba A</th>
              <th>Liczba B</th>
              <th>Wynik</th>
              <th>Akcja</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>{item.operation}</td>
                <td>{item.a}</td>
                <td>{item.b}</td>
                <td>{item.result}</td>
                <td>
                  <button onClick={() => onSelectHistoryItem(item, index)}>
                    Wybierz
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
