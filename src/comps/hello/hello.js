import "./hello.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { skipIntroModal } from "../../AppSlice";

function Hello() {

  const { introModal } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  const handleDontShow = () => {
    dispatch(skipIntroModal());
  };

  if (!introModal)
    return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hello wonderer!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="hello-paragraph">
            This is my little demonstration app using:{" "}
          </p>
          <ul className="list-group hello">
            <li className="list-group-item">React</li>
            <li className="list-group-item">Redux Toolkit</li>
            <li className="list-group-item">Bootstrap 5</li>
             </ul>
          <br />
          <p className="hello-paragraph">
            HAVE FUN!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDontShow}>
            Don't show again
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default Hello;


