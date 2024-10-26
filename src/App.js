import logo from './logo.svg';
import './App.css';
import { Componente1 } from './componentes/Componente1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Mi primer proyecto en React</p>
        <Componente1 />
      </header>
    </div>
  );
}

export default App;
