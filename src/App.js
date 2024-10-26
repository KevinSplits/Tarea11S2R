import logo from './logo.svg';
import './App.css';
import { Componente1 } from './componentes/Componente1';
import { Componente2 } from './componentes/Componente2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>La intelegencia artificial</h1>
        <p>
        La inteligencia artificial (IA) es una rama de la informática que busca crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana, como el aprendizaje, el razonamiento y la resolución de problemas. A través de algoritmos y modelos de datos, la IA puede analizar información, reconocer patrones y tomar decisiones. Su aplicación abarca desde asistentes virtuales y chatbots hasta diagnósticos médicos y vehículos autónomos, transformando diversas industrias y mejorando la eficiencia de procesos cotidianos. A medida que la tecnología avanza, la IA plantea tanto oportunidades emocionantes como desafíos éticos que deben abordarse.</p>
        <Componente1 />
        <Componente2 />
      </header>
    </div>
  );
}

export default App;
