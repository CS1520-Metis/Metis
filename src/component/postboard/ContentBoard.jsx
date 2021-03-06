import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./contentboard.css";
import "react-notifications/lib/notifications.css";
import TrueFalse from "../layout/TrueFalse";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const ContentBoard = (props) => {
  let [up, setUp] = useState(props.post.up);
  let [down, setDown] = useState(props.post.down);
  const clickUp = () => {
    NotificationManager.success("SUCCESS!!", "Up Vote");
    setUp(++up);
  };
  const clickDown = () => {
    NotificationManager.info("SUCCESS!!", "Down Vote");
    setDown(++down);
  };

  return (
    <>
      <NotificationContainer />
      <Card className="text-center mt-3 shadow">
        <Card.Header as="h5">{props.post.title}</Card.Header>
        <Card.Body>
          <Card.Text>{props.post.content}</Card.Text>
          <Card.Img
            src="https://media.giphy.com/media/cPNXOm7ln8HwK7UcbV/giphy.gif?cid=ecf05e47nwc2riha7w8ehrp83jrlvt4tf02xq3neaichs2oi&rid=giphy.gif&ct=g"
            style={{ width: "10rem" }}
          />
          <TrueFalse
            sty={up === "???" ? "pending" : up > down ? "true" : "false"}
            decision={up === "???" ? "PENDING" : up > down ? "TRUE" : "FALSE"}
          />
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" className="mx-2" onClick={clickUp}>
            <i className="fas fa-caret-up" />
            <span> {up}</span>
          </Button>
          <Button variant="danger" onClick={clickDown}>
            <i className="fas fa-caret-down" />
            <span> {down}</span>
          </Button>
          <span id="end-time">
            <span className="font-weight-bold">Voting:</span> End in{" "}
            <span className="count-days font-weight-bold">2</span> day
          </span>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ContentBoard;
