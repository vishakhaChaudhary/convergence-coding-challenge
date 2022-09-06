import React, { useEffect } from "react";
import { Breadcrumb, Card, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { cms } from "../../lib/constant/constant";

const DasboardComponent = () => {
  const navigate = useNavigate();
  let userDetails = localStorage.getItem("user-details");
  const { message, label } = cms;

  useEffect(() => {
    if (
      localStorage.getItem("user-password") !== null &&
      userDetails !== null
    ) {
      return;
    }
    navigate("/user/register");
  }, [userDetails, navigate]);

  userDetails = JSON.parse(userDetails);

  return (
    <Container className="p-3 col-12">
      <h2 className="p-3 text-center">{label.welcomeDashboard}</h2>
      <Breadcrumb>
        <Breadcrumb.Item active>{label.dashboard}</Breadcrumb.Item>
      </Breadcrumb>
      <Card className="col-12">
        <Card.Body>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>{label.email}</th>
                    <th>{label.dob}</th>
                    <th>{label.gender}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{userDetails?.email}</td>
                    <td>{userDetails?.dob}</td>
                    <td>{userDetails?.gender}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DasboardComponent;
