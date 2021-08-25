import { useState } from "react";
import Modal from "./Modal";
import Overlay from "./Overlay";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler(){
    setModalIsOpen(true);
    let modalOpened = modalIsOpen;
    console.log('modalIsOpen', modalOpened);
    console.log('Clicked delete for: ', props.text);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return(
    <div>
      <h1>A Todo</h1>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler} >Delete</button>
        </div>
      </div>

      {/* {modalIsOpen ? <Modal/>: null} */}
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      { modalIsOpen && <Overlay onCloseOverlay={closeModalHandler} />}

    </div>
  );
}

export default Todo;