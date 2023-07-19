import React from "react";

const Child = (props) => {
    return (
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={props.buttonClick}>Show Modal</button>
            {
                props.showModal ? <Modal /> : null
            }

        </div>
    )
}

const Modal = () => {
    return (
        <div>
            <h3>Modal Content</h3>
            <p>This is the modal content</p>
        </div>
    )
}

export default Child;