import React, { useState } from "react";
import "../../app.scss";
import defaultBeerImg from "../../assets/DefaultBeer.png";
import { Card, Col, Modal } from "react-bootstrap";

export default function BeerComponent(props) {
  const [selectedId, setSelectedId] = useState();
  return (
    <>
      <Col
        key={props.beer.id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        className="cursor p-0"
      >
        <Card onClick={() => setSelectedId(props.beer)} className="h-100">
          <Card.Img
            src={props.beer.image_url ? props.beer.image_url : defaultBeerImg}
            className="p-3"
          />
          <Card.Body>
            <Card.Title className="text-center"> {props.beer.name}</Card.Title>
          </Card.Body>
          <Card.Footer className="text-muted text-center">
            {props.beer.abv}%
          </Card.Footer>
        </Card>
      </Col>

      <Modal
        show={selectedId}
        onHide={() => setSelectedId(undefined)}
        dialogClassName="modal-10w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        {selectedId ? (
          <>
            <Modal.Header>
              <Modal.Title id="example-custom-modal-styling-title">
                {selectedId.name}
              </Modal.Title>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setSelectedId(undefined)}
              ></button>
            </Modal.Header>
            <Modal.Body>
              <p>
                <strong>Tagline:</strong> {selectedId.tagline}
              </p>
              <p>
                <strong>ABV:</strong> {selectedId.abv}%
              </p>
              <p>
                <strong>Description:</strong> {selectedId.description}
              </p>
              <strong>Best foods to drink this with:</strong>
              <ul>
                {selectedId.food_pairing.map((food) => (
                  <li key={food}>{food}</li>
                ))}
              </ul>
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header>
              <Modal.Title id="example-custom-modal-styling-title">
                No beer info found
              </Modal.Title>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setSelectedId(undefined)}
              ></button>
            </Modal.Header>
            <Modal.Body>
              <p>
                I'm sorry but we couldn't find any information about this beer
              </p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
}
