import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modals.css";
function Modalz({ topic, answer, question, point, id }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [is, setAnswer] = useState(false);
  const reveal = () => {
    setAnswer(true);
  };
  return (
    <>
      <Card className={`outliners z300-size hover1`} onClick={handleShow}>
        <Card.Title className="fonty hover2">
          {topic}
          <br />
          {point}
        </Card.Title>
      </Card>
      <Modal className="sizer" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            {question}
            <div>
              {is ? <div>{answer}</div> : ""}
              <Button onClick={reveal}>Reveal Answer</Button>
            </div>
          </Modal.Title>{" "}
          <Button variant="primary" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>
      </Modal>{" "}
    </>
  );
}

export default Modalz;
