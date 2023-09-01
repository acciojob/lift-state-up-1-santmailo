import React from "react";
import './../styles/App.css';

const Parent  = () => {
  const [showModal, setShowModal] = React.useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Child showModal={showModal} eventHandler={showModalHandler} />
    </div>
  )
}


const Child = ({showModal,eventHandler}) => {
  return (
    <div className="child">
      <h1>Child Component</h1>
      <button onClick={eventHandler}>show Modal</button>
      {showModal ? <Modal /> : null}
    </div>
  )
}

const Modal= ()=> {
  return (
    <div className="modal">
      <h1>Modal Content</h1>
      <p>this is modal content</p>
    </div>
  )
}


const App = () => { 
  return (
    <div>
        {/* Do not remove the main div */}
        <Parent />
    </div>
  )
}

export default App
