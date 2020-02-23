import React from "react";
import { Button, Image } from "react-bootstrap";
import styled from "styled-components";
import HosImage from "../Assest/bg1.jpg";
const HospitalCard = () => {
  const Card = styled.div`
    background-color: rgba(140, 140, 140, 0.2);
    border-radius: 25px;
    width: 60%;
    height: 230px;
    border: groove;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    margin-bottom:15px
  `;
  return (
    <Card>
      <div style={{ fontSize: "1vw", textAlign: "right" }}>
        <h3>مستشفي عين شمس التخصصي</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button variant="primary">More...</Button>
      </div>
      <div>
        <Image
          src={HosImage}
          style={{ maxWidth: "90px", height: "100px", borderRadius: "25px" }}
        />
      </div>
    </Card>
  );
};
export default HospitalCard;
