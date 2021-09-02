import './App.css';
import { useState } from 'react'
import Modal from './components/Modal'
import Feedback from './components/Feedback';
import ThanksMessage from './components/ThanksMessage'

function App() {
  const [open, setOpen] = useState(true);
  const [openMessage, setOpenMessage] = useState(false);

  const toggleModal = () => {
    setOpenMessage(false);
    setOpen(!open);
  }

  const showMessage = () => {
    return setOpenMessage(true);
  }

  return (
    <div className="App">
      {!open && <button onClick={toggleModal} >Dar Feedback</button>}
      { 
      open &&
      <Modal close={toggleModal}>
        {
          !openMessage 
          ? <Feedback close={toggleModal} showMessage={showMessage}/>
          : <ThanksMessage close={toggleModal}/>
        }
      </Modal>
      }
    </div>
  );
}

export default App;
