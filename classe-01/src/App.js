import './App.css';
import { useState } from 'react'
import Modal from './components/Modal'
import Feedback from './components/Feedback';
import ThanksMessage from './components/ThanksMessage'

function App() {
  const [open, setOpen] = useState(true);
  const [openMessage, setOpenMessage] = useState(false);

  const close = () => {
    setOpenMessage(false);
    setOpen(!open);
  }

  const showMessage = () => {
    return setOpenMessage(true);
  }

  return (
    <div className="App">
      { 
      open &&
      <Modal close={close}>
        {
          !openMessage 
          ? <Feedback close={close} showMessage={showMessage}/>
          : <ThanksMessage/>
        }
      </Modal>
      }
    </div>
  );
}

export default App;
