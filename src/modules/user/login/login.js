import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { constant, cms } from "../../../lib/constant/constant";
import validate from "./yup/index";

const LoginComponent = () => {
  const navigate = useNavigate();
  const userPassword = localStorage.getItem("user-password");
  const { EMAIL, PASSWORD } = constant;
  const { label, placeHolder, message, button } = cms;

  const [values, setValues] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(false);
  const [submitButton, setSubmitState] = useState(false);
  const [banner, setBanner] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (userPassword !== null) {
      return;
    }
    const bannerData = {
      isOpen: true,
      status: constant.DANGER,
      title: message.error.noUser,
    };

    setBanner(bannerData);
  }, [userPassword, message]);

  useEffect(() => {
    const isAnyValidationError =
      errorMessage && !!(errorMessage.email || errorMessage.password);
    const isAllValuesFilled = values.email && values.password;
    setSubmitState(isAllValuesFilled && !isAnyValidationError);
  }, [values, errorMessage]);

  const handleValidation = async (field, value) => {
    const validationError = await validate(field, value);
    setErrorMessage((prevState) => ({
      ...prevState,
      [field]: validationError,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    let bannerData = {};
    try {
      await handleValidation(EMAIL, values.email);
      await handleValidation(PASSWORD, values.password);
      
      if (!submitButton) {
        return;
      }
      setLoading(true);

      if (values.password !== JSON.parse(userPassword)) {
        bannerData = {
          isOpen: true,
          status: constant.DANGER,
          title: message.error.invalid.loginPassword,
        };

        setBanner(bannerData);
        setValues({
          email: "",
          password: "",
        });
        setLoading(false);
        return;
      }

      bannerData = {
        isOpen: true,
        status: constant.SUCCESS,
        title: message.success.login,
      };
      setBanner(bannerData);
      localStorage.setItem('isLoggedIn', true);
      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard');
      }, 1000);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="p-3 m-3 d-flex justify-content-center">
      <Card className="col-6">
        <Card.Body>
          <Row>
            <Col>
              <h3 className="text-center pb-3">{label.login}</h3>
              {banner && (
                <Alert
                  show={banner.isOpen}
                  variant={banner.status}
                  onClose={() => setBanner(false)}
                  dismissible
                >
                  <p>{banner.title}</p>
                </Alert>
              )}
              <Form>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name={EMAIL}
                    placeholder={placeHolder.email}
                    value={values.email}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => handleValidation(EMAIL, values.email)}
                    isInvalid={!!errorMessage.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMessage.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Control
                    type="password"
                    name={PASSWORD}
                    placeholder={placeHolder.password}
                    value={values.password}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => handleValidation(PASSWORD, values.password)}
                    isInvalid={!!errorMessage.password}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMessage.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Button
                  variant="primary"
                  size="sm"
                  className="mt-3 col-12 text-center"
                  onClick={onSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? `${button.loading}` : `${button.login}`}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="mt-3 col-12 text-center"
                  onClick={() => navigate("/user/register")}
                >
                  {button.register}
                </Button>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginComponent;
