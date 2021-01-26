import React, { useEffect, useState } from "react";
import "./Layout.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Modalz from "./Modalz";
function Edit() {
  const [data1, setData] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    const url = "/api/v1/jeps/index";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setData(response))
      .catch((err) => setError({ err }));
  }, []);

  return (
    <div className="fullLayout">
      <div className="fullLayout2">Edit</div>
      <CardDeck className="paddings">
        {data1.map((data) => (
          <Modalz
            id={data.id}
            topics={data.topic}
            questions={data.question}
            answers={data.answer}
            points={data.point}
          />
        ))}
      </CardDeck>
      <br />
    </div>
  );
}
export default Edit;
