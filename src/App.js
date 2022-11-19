
import "./App.css";
import Pessoa from "./components/Pessoa";

function App() {

  const nome = "Maria";

  return (
    <div className="App">
      <Pessoa 
      nome="Gabriel" 
      foto="https://via.placeholder.com/150"
      idade="17" 
      profissao="estudante" 
  />

    </div>
  )

}

export default App;
