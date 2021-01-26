import React, { useEffect, useState } from "react";
import "./Layout.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Modals from "./Modals";
function Play() {
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
      <div className="fullLayout2">Guess It Right!!</div>
      <CardDeck className="paddings">
        {data1.map((data) => (
          <Modals
            id={data.id}
            topic={data.topic}
            question={data.question}
            answer={data.answer}
            point={data.point}
          />
        ))}
      </CardDeck>
    </div>
  );
}
export default Play;
