import React from "react";
import styled from "styled-components";
import Container from "../styles/Container";

import PhoneIcon from "../assets/headerPhoneIcon.png";
import MessageIcon from "../assets/headerMessageIcon.png";
import LocationIcon from "../assets/headerLocationIcon.png";
import Logo from "../assets/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const HeaderCtn = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const TopHeader = styled.div`
  width: 100%;
  height: 30%;
  background-color: #0e2a46;
`;

const BottomHeader = styled.div`
  width: 100%;
  height: 70%;
`;

const LeftCtn = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 200;

  gap: 50px;

  h3 {
    font-weight: 300;
    font-size: 15px;
  }

  img {
    width: 30px;
  }
`;

const RightCtn = styled.div`
  width: 20%;
  height: 100%;
  background-color: #ffd25c;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  svg {
    font-size: 22px;
    color: #0e2a46;
    cursor: pointer;
    transition: 0.3s;
  }

  svg:hover {
    transform: scale(1.15);
  }
`;

const HeaderLeftCtn = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const HeaderRightCtn1 = styled.div`
  width: 20%;
  height: 100%;
`;

const HeaderRightCtn2 = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  button {
    background-color: white;
    border: 0;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: #704fe6;
      font-size: 15px;
    }
  }
`;

const HomeButton = styled.div`
  width: 70px;
  height: 30px;
  border: 2px solid #704fe6;
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  color: #704fe6;
  position: relative;

  &:hover {
    background-color: #704fe6;
    color: white;
  }

  &:hover div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const HomeDropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 150px;
  background-color: white;
  border-radius: 10px;
  padding: 10px 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 8px;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s;

  span {
    padding: 8px 15px;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    transition: 0.3s;
  }

  span:hover {
    background-color: #f2f2f2;
    color: #704fe6;
  }
`;

const HeaderRightCtn3 = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AccauntButton = styled.div`
  width: 220px;
  height: 50px;
  border-radius: 30px;
  background-color: #704fe6;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #785dd7;
    transform: scale(1.05);

    div {
      background-color: #704fe6;
    }
  }
`;

const AccauntButton2 = styled.div`
  width: 50px;
  height: 50px;
  background-color: #785dd7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s;
  cursor: pointer;
`;

export default function Header() {
  return (
    <>
      <HeaderCtn>
        <TopHeader>
          <Container>
            <LeftCtn>
              <HeaderLeftCtn>
                <img src={PhoneIcon} alt="" />
                <h3>(00) 875 784 5682</h3>
              </HeaderLeftCtn>

              <HeaderLeftCtn>
                <img src={MessageIcon} alt="" />
                <h3>pacargoinfo@gmail.com</h3>
              </HeaderLeftCtn>

              <HeaderLeftCtn>
                <img src={LocationIcon} alt="" />
                <h3>238, Arimantab, Moska - USA.</h3>
              </HeaderLeftCtn>
            </LeftCtn>
            <RightCtn>
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
            </RightCtn>
          </Container>
        </TopHeader>

        <BottomHeader>
          <Container>
            <HeaderRightCtn1>
              <img src={Logo} alt="" />
            </HeaderRightCtn1>
            <HeaderRightCtn2>
              <HomeButton>
                Home
                <HomeDropdown>
                  <span>Home 1</span>
                  <span>Home 2</span>
                  <span>Home 3</span>
                  <span>Home 4</span>
                </HomeDropdown>
              </HomeButton>

              <button>About Us</button>
              <button>courses</button>
              <button>Pages</button>
              <button>Blog</button>
              <button>Contact</button>
            </HeaderRightCtn2>
            <HeaderRightCtn3>
              <AccauntButton>
                <span style={{ marginRight: "25px" }}>Create Accaunt</span>
                <AccauntButton2>{"→"}</AccauntButton2>
              </AccauntButton>
            </HeaderRightCtn3>
          </Container>
        </BottomHeader>
      </HeaderCtn>
    </>
  );
}
