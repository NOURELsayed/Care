import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";


const SearchBar = styled(Form)`
margin:auto;
marginTop:'10px'
background-color: rgba(140, 140, 140, 0.2);
border-radius: 25px;
background: "none";
border: groove;
`;
const Wrapper = styled.section`
postion:absoulte
padding:20px
`;
const  SearchBarComponent = () => {
  return (
    <Wrapper>
        <Form  style={{display:'flex',padding:'1.5rem',margin:'auto',width:'60%'}}>
          <FormControl type="text" placeholder="Search" />
          <Button variant="outline-primary">Search</Button>
        </Form>
    </Wrapper>
  );
}
export default SearchBarComponent;