import React from "react";
import styled from "styled-components";


import Container from "../styles/Container";
import FooterBackground from "../assets/footerBackground.png";
import Logo from "../assets/logo2.png"
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Pointer from "../assets/pointer.png";
import Twitter from "../assets/twitter.png";
import Img1 from "../assets/image1.png";
import Img2 from "../assets/image2.png";
import Img3 from "../assets/image3.png";
import Img4 from "../assets/image4.png";
import Img5 from "../assets/image5.png";
import Img6 from "../assets/image6.png";





const FooterCtn = styled.div`
width: 100%;
height: 574px;
background-color: #0E2A46;
display: flex;
align-items: center;
justify-content: space-evenly;
background-image: url(${FooterBackground});
`;


const RealFooterCtn = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: space-between;
`;


const Ctn1 = styled.div`
width: 300px;
height: 300px;
display: flex;
flex-direction: column;
gap: 30px;

h3 {
 font-size: 13px;
 color: white;
 font-weight: 400;
 line-height: 20px; 
}
img {
    width: 200px;
}
`;

const Ctn2 = styled.div`
width: 300px;
height: 300px;
display: flex;
flex-direction: column;
gap: 30px;
color: white;
h2 {
    font-weight: 400;
}


`;



const Ctn4 = styled.div`
width: 300px;
height: 300px;
display: flex;
flex-direction: column;
gap: 25px;
color: white;
`;



const LinksCtn = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  height: 30px;

  img {
    width: 30px; 
    cursor: pointer;
    transition: all 0.3s;
    height: 30px;

    &:hover {
      width: 40px; 
      height: 40px;
    }
  }
`;;

const Ctn2Inside = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
font-weight: 400;
h3 {
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        font-size: 20px;
        color: #785DD7;
    }
}
`;


const Ctn4Img1 = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const Ctn4Img2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`;
export default function Footer() {
    return (
        <>
        <FooterCtn>
            <Container>
                <RealFooterCtn>
                <Ctn1>
                    <img src={Logo} alt="" />
                    <h3>
                    Interdum velit laoreet id donec ultrices <br />
                    tincidunt arcu. Tincidunt tortor aliquam nulla <br />
                    facilisi cras fermentum odio eu.
                    </h3>
                    <LinksCtn>
                    
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Pointer} alt="" />
                    <img src={Twitter} alt="" />

                    </LinksCtn>
                    

                </Ctn1>

                <Ctn2>
                    <h1>our services:</h1>
                    <Ctn2Inside>
                    <h3>Web development</h3>
                    <h3>UI/UX Design</h3>
                    <h3>Management</h3>
                    <h3>Digital Marketing</h3>
                    <h3>Blog News</h3>
                    </Ctn2Inside>
                    


                </Ctn2>

                <Ctn2>
                <h1>quick links:</h1>
                    <Ctn2Inside>
                    <h3>templates</h3>
                    <h3>blog and article</h3>
                    <h3>integrations</h3>
                    <h3>webinars</h3>
                    <h3>privacy & policy</h3>
                    </Ctn2Inside>
                    


                </Ctn2>

                <Ctn4>
                    <h1>Gallery</h1>
                    <Ctn4Img1>
                        <Ctn4Img2>
                            <img src={Img1} alt="" />
                            <img src={Img2} alt="" />
                            <img src={Img3} alt="" />
                        </Ctn4Img2>
                        <Ctn4Img2>
                            <img src={Img4} alt="" />
                            <img src={Img5} alt="" />
                            <img src={Img6} alt="" />
                        </Ctn4Img2>

                    </Ctn4Img1>


                </Ctn4>

                </RealFooterCtn>
            </Container>
        </FooterCtn>
        
        </>
    )
}