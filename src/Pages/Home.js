import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../Assest/bg.jpg'
import HomePageForm from '../Components/HomePageForm';
import Navbar from '../Components/Navbar';
const Wrapper = styled.section`
padding: 25px;
background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-size:cover;
height: 980px;
background-position: center;
`;
export default function Home() {
    return (
        <Wrapper> 
            <Navbar/>
            <HomePageForm/>
        </Wrapper>
    )
}
