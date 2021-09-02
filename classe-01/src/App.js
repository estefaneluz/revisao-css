import './App.css';
import Modal from './components/Modal'
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="App">
      <Modal>
        <Feedback/>
      </Modal>
    </div>
  );
}

export default App;
