import './App.css';
import Card from './components/Card'
import search from './assets/icone-lupa.svg'

function App() {
  return (
    <div className="container">
      <h1>Browse collections</h1>
      <Card
        titulo="Search"
        descricao="Search in any topic you are interested and find any answers you need."
        img={search}
      />
    </div>
  );
}

export default App;
