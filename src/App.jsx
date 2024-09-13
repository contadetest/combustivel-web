import { useState } from 'react'
import './App.css'

function App(){
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [recomendacao, setRecomendacao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const precoAlcoolNum = parseFloat(precoAlcool);
    const precoGasolinaNum = parseFloat(precoGasolina);

    const dividir = precoAlcoolNum / precoGasolinaNum;

    if (dividir > 0.7){
      setRecomendacao("Abasteça com Alcool");

    } else{
      setRecomendacao("Abasteça com Gasolina");

    }
  };

  return (
    <div className="container">
      <h1>Qual Melhor Opção?</h1>
      <form onSubmit={handleSubmit}className="form">
        <input
        type="number"
        placeholder="Preço do Alcool por litro"
        step="0.01"
        value={precoAlcool}
        onChange={(e)=> setPrecoAlcool(e.target.value)}
        required
         />
          <input
        type="number"
        placeholder="Preço da Gasolina por litro"
        step="0.01"
        value={precoGasolina}
        onChange={(e)=> setPrecoGasolina(e.target.value)}
        required
         />
         <button type="submit">Recomendação</button>
        

      </form>

      {recomendacao && <h2>{recomendacao}</h2>}

    </div>
  );
}

 

 
export default App;