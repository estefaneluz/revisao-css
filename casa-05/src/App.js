import './App.css';
import Header from './components/Header'
import LearnMoreSection from './components/LearnMoreSection';
import imgLearnMore from './assets/image-transform.jpg'

function App() {
  return (
    <div className="container">
      <Header/>
      <LearnMoreSection
        img={imgLearnMore}
        title="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
      />
    </div>
  );
}

export default App;
