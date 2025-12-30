import React from "react";
import styled from "styled-components";

//component
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../styles/Container";
import HomeBck from "../../assets/homeBck.png";
import HomeCard from "../../components/HomeCard";
import Grow from "../../components/Grow";

//browse images
import HomeBrowse1 from "../../assets/homeBrowse1.png";
import HomeBrowse2 from "../../assets/homeBrowse2.png";
import HomeBrowse3 from "../../assets/homeBrowse3.png";
import HomeBrowse4 from "../../assets/homeBrowse4.png";
import HomeBrowse5 from "../../assets/homeBrowse5.png";
import HomeBrowse6 from "../../assets/homeBrowse6.png";
import HomeBrowse7 from "../../assets/homeBrowse7.png";
import HomeBrowse8 from "../../assets/homeBrowse8.png";
import HomeBrowse9 from "../../assets/homeBrowse9.png";
import CourseBck from "../../assets/courseBck.png";

//students
import Student1 from "../../assets/Student1.png";
import Student2 from "../../assets/Student2.png";
import Student3 from "../../assets/Student3.png";
import Student4 from "../../assets/Student4.png";
import Student5 from "../../assets/Student5.png";
import Student6 from "../../assets/Student6.png";




const HomeCtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const DreamCtn = styled.div`
  width: 100%;
  height: 550px;
  background-color: #ffd25c;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  gap: 50px;
`;

const DreamCtn2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  h1 {
    font-size: 45px;
    color: #17254e;
  }

  h3 {
    color: #704fe6;
    font-weight: 400;
  }
`;

const DreamCtn3 = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden; /* tashqariga chiqmasin */
`;

const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* to‘liq moslashadi */
`;

const AccauntButton = styled.div`
  width: 220px;
  height: 50px;
  border-radius: 30px;
  background-color: #17254e;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #1f3061;
    transform: scale(1.05);


    div {
      background-color: #17254e;
    }
  }
`;

const AccauntButton2 = styled.div`
  width: 50px;
  height: 50px;
  background-color: #1f3061;
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

const BrowseCtn = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 700px;

  h1 {
    font-size: 45px;
    color: #17254e;
  }
`;

const RealBrowseCtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  background-color: white;
`;

const RealBrowseCtn2 = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: space-between;

  div:first-child {
    border-radius: 10px;
    background: #eaf6ff;
    border: 1px solid #1b75e8;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: all 0.4s ease;

    &:hover {
      color: #1b75e8;
      transform: translateY(-6px) scale(1.03);
    }
  }

  div:nth-child(2) {
    background: #fef2f4;
    border-radius: 10px;
    border: 1px solid #ff6881;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: all 0.4s ease;

    &:hover {
      color: #ff6881;
      transform: translateY(-6px) scale(1.03);
    }
  }
  div:nth-of-type(3) {
    background: #eefbf5;
    border: 1px solid #00bc65;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: all 0.4s ease;

    &:hover {
      color: #00bc65;
      transform: translateY(-6px) scale(1.03);
    }
  }
`;

const RealBrowseCtn4 = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: space-between;
  div:first-child {
    background: #fffaef;
    border-radius: 10px;
    border: 1px solid #f2a700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: all 0.4s ease;

    &:hover {
      color: #f2a700;
      transform: translateY(-6px) scale(1.03);
    }
  }
  div:nth-child(2) {
    background: #f7f3ff;
    border: 1px solid #4500d0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: all 0.4s ease;

    &:hover {
      color: #4500d0;
      transform: translateY(-6px) scale(1.03);
    }
  }

  div:nth-child(3) {
    background: #fff0f8;
    border: 1px solid #bb0064;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: all 0.4s ease;

    &:hover {
      color: #bb0064;
      transform: translateY(-6px) scale(1.03);
    }
  }
`;

const RealBrowseCtn5 = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: space-between;
  div:first-child {
    background: #f3f4fe;
    border: 1px solid #0011bb;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: all 0.4s ease;

    &:hover {
      color: #0011bb;
      transform: translateY(-6px) scale(1.03);
    }
  }
  div:nth-child(2) {
    background: #fff7ef;
    border: 1px solid #d16900;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: all 0.4s ease;

    &:hover {
      color: #d16900;
      transform: translateY(-6px) scale(1.03);
    }
  }
  div:nth-child(3) {
    background: #f1fbff;
    border: 1px solid #00a9ed;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: all 0.4s ease;

    &:hover {
      color: #00a9ed;
      transform: translateY(-6px) scale(1.03);
    }
  }
`;


const RealBrowseCtn3 = styled.div`
  width: 30%;
  height: 130px;
  background-color: red;

`;


const CourseCtn = styled.div`
width: 100%;
height: 1300px;
display: flex;
flex-direction: column;
overflow: hidden; /* tashqariga chiqmasin */



background-image: url(${CourseBck});
  background-size: cover;       /* rasm divni to‘liq qoplaydi */
  background-position: center;  /* markazga moslaydi */
  background-repeat: no-repeat; /* takrorlanmaydi */

`;

const EdunityCourse = styled.div`
width: 100%;
height: 200px;
display: flex;
align-items: center;
justify-content: space-between;
h1 {
    font-size: 45px;
    color: #17254e;
  }


`;



export default function Home1() {

    const Students = [
        {
            id: 1,
            image: Student1,
            sharh: "It Statistics Data Science And Business Analysis",
        },
        {
            id: 2,
            image: Student2,
            sharh: "Bilginer Adobe Illustrator For Graphic Design"
        },
        {
            id: 3,
            image: Student3,
            sharh: "Starting SEO as your Home Based Business"
        },
        {
            id: 4,
            image: Student4,
            sharh: "Bilginer Adobe Illustrator For Graphic Design"
        },
        {
            id: 5,
            image: Student5,
            sharh: "It Statistics Data Science And Business Analysis"
        },
        {
            id: 6,
            image: Student6,
            sharh: "Starting SEO as your Home Based Business"
        }
    ];


  return (
    <>
      <Header />

      <HomeCtn>
        <DreamCtn>
          <Container>
            <DreamCtn2>
              <h3>Welcome Edunity online courses</h3>
              <h1>
                Achieving Your Dreams <br />
                Through Education
              </h1>
              <p>
                We are experienced in educationl platform and skilled strategies{" "}
                <br />
                for the success of our online learning.
              </p>

              <AccauntButton>
                <span style={{ marginRight: "25px" }}>Create Accaunt</span>
                <AccauntButton2>{"→"}</AccauntButton2>
              </AccauntButton>
            </DreamCtn2>

            <DreamCtn3>
              <BgImage src={HomeBck} alt="background" />
            </DreamCtn3>
          </Container>
        </DreamCtn>

        <BrowseCtn>
          <h1>Browse By Categories</h1>
          <Container>
            <RealBrowseCtn>
              <RealBrowseCtn2>
                <RealBrowseCtn3>
                  <img src={HomeBrowse1} alt="" />
                  <h3>Business Management</h3>
                </RealBrowseCtn3>

                <RealBrowseCtn3>
                  <img src={HomeBrowse2} alt="" />
                  <h3>Arts & Design</h3>
                </RealBrowseCtn3>

                <RealBrowseCtn3>
                  <img src={HomeBrowse3} alt="" />
                  <h3>Personal Development</h3>
                </RealBrowseCtn3>
              </RealBrowseCtn2>

              <RealBrowseCtn4>
                <RealBrowseCtn3>
                  <img src={HomeBrowse4} alt="" />
                  <h3>UI/UX Design</h3>
                </RealBrowseCtn3>

                <RealBrowseCtn3>
                  <img src={HomeBrowse5} alt="" />
                  <h3>Graphic Design</h3>
                </RealBrowseCtn3>

                <RealBrowseCtn3>
                  <img src={HomeBrowse5} alt="" />
                  <h3>Digital Marketing</h3>
                </RealBrowseCtn3>
              </RealBrowseCtn4>

              <RealBrowseCtn5>
                <RealBrowseCtn3>
                  <img src={HomeBrowse7} alt="" />
                  <h3>Exclusive man</h3>
                </RealBrowseCtn3>

                <RealBrowseCtn3>
                  <img src={HomeBrowse8} alt="" />
                  <h3>Product Design</h3>
                </RealBrowseCtn3>

                <RealBrowseCtn3>
                  <img src={HomeBrowse9} alt="" />
                  <h3>Video & Photography</h3>
                </RealBrowseCtn3>
              </RealBrowseCtn5>
            </RealBrowseCtn>
          </Container>
        </BrowseCtn>

        <HomeCard />
        <Grow />

      </HomeCtn>

      <Footer />
    </>
  );
}
