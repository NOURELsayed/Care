import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components'
const handleChange = ( e) => {
    e.preventDefault()
 
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
        alert("form submited")
  }
  const StyledForm = styled.section`

  padding: 50px;
  background-color: rgba(140, 140, 140, 0.40);
  border-radius: 25px;
  margin-top:200px
  `;
export default function HomePageForm() {

  return (
    <Container >
      <StyledForm  onSubmit={handleSubmit}>
        {/* <Form.Group controlId="formBasic">
          <Form.Control type="text" placeholder="Hospital name" onChange={handleChange}/>
        </Form.Group> */}

        <Form.Group controlId="formBasic">
          <Form.Control type="select" placeholder="location" onChange={handleChange}/>
        </Form.Group>

        <Button variant="primary"type="submit" >
          Submit
        </Button>
      </StyledForm>
    </Container>
  );
}