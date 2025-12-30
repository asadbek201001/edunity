import React from "react";
import styled from "styled-components";

import Container from "../styles/Container";

import Img1 from "../assets/grow1.png";
import Img2 from "../assets/grow2.png";
import Img3 from "../assets/grow3.png";

const GrowCtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const GrowFlex = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImgCtn = styled.div`
  width: 45%;
  height: 100%;
  display: grid;

  /* 2 ustun, 2 qator */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  gap: 10px;

  img {
    border-radius: 10px;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-6px) scale(1.03);
    }
  }
`;

const Image1 = styled.div`
  grid-column: 1 / 3; /* 2 ustunni egallaydi */
  grid-row: 2 / 3;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image2 = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image3 = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GrowText = styled.div`
  width: 49%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  background-color: white;
  h1 {
    font-size: 45px;
    color: #17254e;
  }
   p {
    font-weight: 400;
   }
`;


const PFlex = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
p {
    font-weight: 400;
   }
`;

const PFlex2 = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

div {
    display: flex;
    width: 43.5%;
}
p {
    font-weight: 400;
   }
`;
export default function Grow() {
  return (
    <>
      <GrowCtn>
        <Container>
          <GrowFlex>
            <ImgCtn>
              <Image3>
                <img src={Img2} alt="" />
              </Image3>

              <Image1>
                <img src={Img3} alt="" />
              </Image1>

              <Image2>
                <img src={Img1} alt="" />
              </Image2>
            </ImgCtn>
            <GrowText>
              <div>
                <h1>Learn & Grow your Skills</h1>
                <h1>From anywhere</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
                laboris..
              </p>
              <PFlex>
                <PFlex2>
                    <h3>Flexible classNamees</h3>
                    <div>
                    <h3>Flexible classNamees</h3>
                    </div>

                </PFlex2>
                <PFlex2>
                    <p>Suspendisse ultrice gravida dictum <br />
                    fusce placerat ultricies integer quis <br />
                    auctor elit sed vulputate mi sit.
                    </p>
                    <p>Suspendisse ultrice gravida dictum <br />
                    fusce placerat ultricies integer quis <br />
                    auctor elit sed vulputate mi sit.
                    </p>   
                </PFlex2>

              </PFlex>
            </GrowText>
          </GrowFlex>
        </Container>
      </GrowCtn>
    </>
  );
}
