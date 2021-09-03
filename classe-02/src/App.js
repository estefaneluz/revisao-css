import './App.css';
import Card from './components/Card'
import search from './assets/icone-lupa.svg'
import globo from './assets/icone-globo.svg'
import mapa from './assets/icone-mapa.svg'


function App() {
  const cards = [
    {
      titulo: "Search", 
      descricao: "Search in any topic you are interested and find any answers you need.",
      imagem: search
    },
    {
      titulo: "Browser", 
      descricao: "Search in any topic you are interested and find any answers you need.",
      imagem: globo
    },
    {
      titulo: "Maps", 
      descricao: "Search in any topic you are interested and find any answers you need.",
      imagem: mapa
    }
  ]
  return (
    <div className="container">
      <h1>Browse collections</h1>
      <div className="row">
        {cards.map( card =>
        <Card
          titulo={card.titulo}
          descricao={card.descricao}
          img={card.imagem}
        />
        )}
      </div>
    </div>
  );
}

export default App;
