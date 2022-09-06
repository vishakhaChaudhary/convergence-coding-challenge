import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Row, Col, Card, Button, Alert } from "react-bootstrap";
import validate from "./yup/index";
import { constant, cms } from "../../../lib/constant/constant";

const genderList = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const RegisterComponent = () => {
  const navigate = useNavigate();
  const { EMAIL, PASSWORD, CONFIRM_PASSWORD, GENDER, DATE_OF_BIRTH } = constant;
  const { label, placeHolder, message, button } = cms;
  const [value, setValue] = useState({
    email: "",
    password: "",
    confirm_password: "",
    dob: "",
    gender: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);
  const [submitButton, setSubmitState] = useState({
    isReadyToSubmit: false,
  });
  const [banner, setBanner] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === GENDER && event.target.value.includes("---")) {
      event.target.value = "";
    }
    const { name, value } = event.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleValidation = async (field, value) => {
    const validationError = await validate(field, value);
    setErrorMessage((prevState) => ({
      ...prevState,
      [field]: validationError,
    }));
  };

  useEffect(() => {
    localStorage.removeItem('user-password');
    localStorage.removeItem('user-details');
    localStorage.removeItem('isLoggedIn');
    const isAnyValidationError =
      errorMessage &&
      !!(
        errorMessage.email ||
        errorMessage.password ||
        errorMessage.confirm_password ||
        errorMessage.dob ||
        errorMessage.gender
      );
    const isAllValuesFilled =
      value.email &&
      value.password &&
      value.confirm_password &&
      value.dob &&
      value.gender;
    
    setSubmitState((prevState) => ({
      ...prevState,
      isReadyToSubmit: isAllValuesFilled && !isAnyValidationError,
    }));
  }, [value, errorMessage]);

  const renderOptions = (elements) => {
    return elements.map((element) => {
      return (
        <option key={element.value} value={element.value}>
          {element.label}
        </option>
      );
    });
  };

  const onSubmit = async () => {
    let bannerData = {}
    try {
      await handleValidation(EMAIL, value.email);
      await handleValidation(PASSWORD, value.password);
      await handleValidation(CONFIRM_PASSWORD, {
        password: value.password,
        confirm_password: value.confirm_password,
      });
      await handleValidation(DATE_OF_BIRTH, value.dob);
      await handleValidation(GENDER, value.gender);

      if (!submitButton.isReadyToSubmit) {
        return false;
      }

      bannerData = {
        isOpen: true,
        status: constant.SUCCESS,
        title: message.success.register,
      };

      if (bannerData) setBanner(bannerData);
      localStorage.setItem('user-password', JSON.stringify(value.password));
      localStorage.setItem('user-details', JSON.stringify(value));

      setTimeout(() => {
        navigate('/user/login');
      }, 2000);

    } catch (err) {
      console.log("error", err);
      bannerData = {
        isOpen: true,
        status: constant.DANGER,
        title: "Something went wrong"
      }
    }
  };

  return (
    <Container className="p-3 d-flex justify-content-center">
      <Card className="col-6">
        <Card.Body>
          <Row>
            <Col>
              <h4 className="text-center">{label.signUp}</h4>
              {banner && <Alert show={banner.isOpen} variant={banner.status}>
                <p>{banner.title}</p>
              </Alert>
              }
              <Form className="container">
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>{label.email}</Form.Label>
                  <Form.Control
                    type="email"
                    name={EMAIL}
                    placeholder={placeHolder.email}
                    value={value.email || ""}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => handleValidation(EMAIL, value.email)}
                    isInvalid={!!errorMessage.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMessage.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>{label.password}</Form.Label>
                  <Form.Control
                    type="password"
                    name={PASSWORD}
                    placeholder={placeHolder.password}
                    value={value.password}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => handleValidation(PASSWORD, value.password)}
                    isInvalid={!!errorMessage.password}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMessage.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>{label.confirmPassword}</Form.Label>
                  <Form.Control
                    type="password"
                    name={CONFIRM_PASSWORD}
                    placeholder={placeHolder.confirmPassword}
                    value={value.confirm_password}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => {
                      handleValidation(CONFIRM_PASSWORD, {
                        password: value.password,
                        confirm_password: value.confirm_password,
                      });
                    }}
                    isInvalid={!!errorMessage.confirm_password}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMessage.confirm_password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDOB">
                  <Form.Label>{label.dob}</Form.Label>
                  <Form.Control
                    type="date"
                    name={DATE_OF_BIRTH}
                    value={value.dob}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => handleValidation(DATE_OF_BIRTH, value.dob)}
                    isInvalid={!!errorMessage.dob}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMessage.dob}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGender">
                  <Form.Label>{label.GENDER}</Form.Label>
                  <Form.Control
                    as="select"
                    size="sm"
                    name={GENDER}
                    value={value.gender}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => handleValidation(GENDER, value.gender)}
                    isInvalid={!!errorMessage.gender}
                    required
                  >
                    <option>{label.pleaseSelect}</option>
                    {renderOptions(genderList)}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errorMessage.gender}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  variant="primary"
                  size="sm"
                  className="mt-3 col-12 text-center"
                  onClick={onSubmit}
                >
                  {button.submit}
                </Button>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegisterComponent;
