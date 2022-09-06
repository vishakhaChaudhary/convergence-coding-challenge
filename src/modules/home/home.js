import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cms } from "../../lib/constant/constant";

const Home = () => {
  useEffect(() => {
    localStorage.removeItem('user-password');
    localStorage.removeItem('user-details');
    localStorage.removeItem('isLoggedIn');
  }, []);

  return (
    <Container className="p-3 m-3 d-flex align-item-center justify-content-center">
      <Row>
        <Col>
          <h1>{cms.label.welcomeHome}</h1>
          <p>{cms.label.homeInfo}</p>
          <div className="d-flex justify-content-center">
            <Link
              className="btn btn-lg"
              role="button"
              to="/user/register"
            >
              {cms.button.signUp}
            </Link>
            <Link className="btn btn-lg" role="button" to="/user/login">
              {cms.button.signIn}
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
