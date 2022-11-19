//Aqui será a area para importação de aplicativos

import "./App.css";

// Importando Componente
import HelloWord from './components/HelloWord';

function App() {
//Criando a lógica por tras do HTML

const name = 'Gabriel';
const newName = name.toUpperCase();

function sum(a, b){
  return a + b;
}

const url = "https://via.placeholder.com/150"

  return (

    // sempre usar className em JSX ao inves de só class
    <div className="App">

      {/* posso puxar variaveis de fora do return */}
      <p>Olá, {name}</p>

      {/* consigo alterar e puxar novamente a variavel */}
      <p>Olá, {newName}</p>

      {/* é possível a realização de equações */}
      <p>Soma: {sum(1, 2)}</p>

      <img src={url} alt="Minha Imagem" />

      {/* Importando Componente */}
      <HelloWord />
    </div>
  )
}

export default App;
