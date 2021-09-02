import './App.css';
import { useState } from 'react'
import Modal from './components/Modal'
import Feedback from './components/Feedback';

function App() {
  const [open, setOpen] = useState(true);

  const close = () => {
    return setOpen(!open);
  }

  return (
    <div className="App">
      { 
      open &&
      <Modal close={close}>
        <Feedback close={close}/>
      </Modal>
      }
    </div>
  );
}

export default App;
