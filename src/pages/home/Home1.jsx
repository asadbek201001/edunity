import React from "react";
import styled from "styled-components";



//component
import Header from "../../components/Header";



const HomeCtn = styled.div`
width: 100%;
height: 1200px;

`;

export default function Home1() {
    return (
        <>
        <Header />

        <HomeCtn>
            <h1>home ctn</h1>
        </HomeCtn>
        
        </>
    )
}