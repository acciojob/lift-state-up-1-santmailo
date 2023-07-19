import React from "react";
import Child from "./child";

const Parent = () => {
    const [showModal, setShowModal] = React.useState(false);

    function toggleModal() {
        setShowModal(!showModal);
    }


    return (
        <div className="parent">
            <h1>Parent Compnent</h1>
            <Child showModal={showModal} buttonClick = {toggleModal}/>
        </div>
    )
}

export default Parent;