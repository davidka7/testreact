import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modals.css";
function Modalz({ topics, answers, questions, points, id }) {
  const [point, setPoints] = useState(points);
  const [topic, setTopic] = useState(topics);
  const [answer, setAnswers] = useState(answers);
  const [error, setError] = useState("");
  const [question, setQuestions] = useState(questions);
  const handleChange = (e) => {
    if (e.target.name === "points") {
      setPoints(e.target.value);
    }
    if (e.target.name === "topics") {
      setTopic(e.target.value);
    }
    if (e.target.name === "answers") {
      setAnswers(e.target.value);
    }
    if (e.target.name === "questions") {
      setQuestions(e.target.value);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  };
  const handleSubmit = () => {
    const newEntry = {
      topic,
      question,
      answer,
      point,
    };
    const url = `/api/v1/jeps/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify(newEntry),
    })
      .then((response) => response.json())
      .catch((err) => setError({ err }));
  };
  return (
    <>
      <Card className={`outliners z300-size hover1`} onClick={handleShow}>
        <Card.Title className="fonty hover2">
          Press Here To
          <br /> Edit Cards
        </Card.Title>
      </Card>
      <Modal className="sizer" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div>
              <input
                name="points"
                value={point}
                onChange={handleChange}
                placeholder="Topic"
              ></input>
              <input
                name="questions"
                value={question}
                onChange={handleChange}
                placeholder="Question"
              ></input>
              <input
                name="answers"
                value={answer}
                onChange={handleChange}
                placeholder="Answer"
              ></input>
              <input
                name="topics"
                value={topic}
                onChange={handleChange}
                placeholder="Points"
              ></input>
            </div>
          </Modal.Title>{" "}
          <Button onClick={handleSubmit} variant="primary">
            Submit
          </Button>
          <Button variant="primary" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>
      </Modal>{" "}
    </>
  );
}

export default Modalz;
