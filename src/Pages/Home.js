import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../Assest/bg.jpg'
import HomePageForm from '../Components/HomePageForm';
import Navbar from '../Components/Navbar';
const Wrapper = styled.div`
padding: 25px;
background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-size:cover;
height: 980px;
background-position: center;
`;
const Home = () => {
    return (
        <Wrapper> 
            <Navbar/>
            <HomePageForm/>
        </Wrapper>
    )
}
export default Home