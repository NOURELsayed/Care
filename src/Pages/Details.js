import React from "react";
import styled from 'styled-components'
import SeacrchBar from "../Components/SearchBar";
import HospitalCard from "../Components/HospitalCard";
import backgroundImage from '../Assest/bg.jpg'
const DetailsPage = styled.div`
background-image: url(${backgroundImage});
 background-repeat: no-repeat;
 background-size:cover;
 background-position: center;
 height:1000px
`;

const Details = () => {
    return (
    <DetailsPage>
      <SeacrchBar />
      <HospitalCard/>
      <HospitalCard/>
      <HospitalCard/>
      </DetailsPage>
      )
}
export default Details;