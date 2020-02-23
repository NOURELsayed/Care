
import React from 'react'
import { Button, Form } from "react-bootstrap";
import styled from 'styled-components'

const handleChange = ( e) => {
    e.preventDefault()
 
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  const StyledForm = styled(Form)`
  padding: 35px;
  background-color: rgba(140, 140, 140, 0.40);
  border-radius: 25px;
  margin-top:200px;
  width:50vw;
  display:inline-block
  `;
 const HomePageForm = () => {
   
  return (
    <StyledForm  onSubmit={handleSubmit}>
      <Form.Group controlId="formBasic">
        <Form.Control type="select" placeholder="location" onChange={handleChange}/>
      </Form.Group>

      <Button variant="primary"type="submit"  >
        Submit
      </Button>
    </StyledForm>
  )
}
export default HomePageForm;