import './App.css';
import React, { useState } from 'react';

function App() {

  const [idade, setIdade] = useState();

  const [calcidade, setCalcidade] = useState();

  const [isChecked, setIsChecked] = useState(false);

  const [disable, setDisable] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleIdadeInput = (event) => {
    setIdade( parseInt(event.target.value) );
  }

  const handleClick = () => {
    setDisable(true);
    if (isChecked == true) {
      setCalcidade( (new Date().getFullYear()) - idade);
    } else {
      setCalcidade( (new Date().getFullYear()) - idade - 1);
    }
  }

  const handleClickClear = () => {
    setDisable(false);
    setCalcidade("");
    setIdade("");
  }

  return (
    <div>
      <h2>Cálculo do Ano de Nascimento</h2>
      <div>
        Digite sua idade:
        <input type="number" value={idade} onChange={handleIdadeInput} readOnly={disable}/>
      </div>

      <div>
      <input type="checkbox" checked={isChecked} onChange={handleOnChange}/>
        Já fiz aniversário esse ano!
      </div>

      <button onClick={handleClick} disabled={disable}>Calcular!</button><br />
      <button onClick={handleClickClear}>Limpar</button>
      <hr/>
      <div>
        Ano de nascimento:
        <input type="number" value={calcidade} readOnly/>
      </div>
     
    </div>
  );
}

export default App;
