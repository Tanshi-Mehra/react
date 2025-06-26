import { useState } from 'react';
import './App.css';
 
function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput('');
  };
 const backspace = () => {
  setInput((prevInput) => prevInput.slice(0, -1));
};

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">React Calculator</h2>     
      <input
        type="text"
        value={input}
        readOnly
        className="calculator-display"
      />

      <div className="calculator-buttons">
        {buttons.map((btn) =>
          btn === '=' ? (
            <button key={btn} onClick={calculate} className="button equals">
              {btn}
            </button>
          ) : (
            <button key={btn} onClick={() => handleClick(btn)} className="button">
              {btn}
            </button>
          )
        )}
        <button onClick={backspace} className="button backspace">
           Back
        </button>
        <button onClick={clearInput} className="button clear">
          Clear
        </button>
        

      </div>
    </div>
  );
}

export default App;
