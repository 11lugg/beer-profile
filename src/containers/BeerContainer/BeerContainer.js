import React from "react";
import "../../app.scss";
import { Container, Row } from "react-bootstrap";
import BeerComponent from "../../components/BeerComponent/BeerComponent";

export default function BeerContainer(props) {
  if (props.error) return `Error: ${props.error.message}`;
  if (!props.data) return "No beers!";

  return (
    <main>
      <Container className="p-3">
        <Row className="p-3">
          {props.data.map((beer) => (
            <BeerComponent beer={beer} />
          ))}
        </Row>
      </Container>
    </main>
  );
}
