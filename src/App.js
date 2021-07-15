import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import { Nav, Navbar, Container } from "react-bootstrap";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [foodChoice, setFoodChoice] = useState("all");

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers?food=${foodChoice}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [foodChoice]);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Beer food profiler</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setFoodChoice("all")}>All</Nav.Link>
              <Nav.Link onClick={() => setFoodChoice("pizza")}>Pizza</Nav.Link>
              <Nav.Link onClick={() => setFoodChoice("steak")}>Steak</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <BeerContainer data={data} error={error} />
    </>
  );
}

export default App;
