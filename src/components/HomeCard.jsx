import React from "react";
import styled from "styled-components";
import Container from "../styles/Container";

// course images
import CourseImg1 from "../assets/Student1.png";
import CourseImg2 from "../assets/Student2.png";
import CourseImg3 from "../assets/Student3.png";
import CourseImg4 from "../assets/Student4.png";
import CourseImg5 from "../assets/Student5.png";
import CourseImg6 from "../assets/Student6.png";




// teacher images
import Teacher1 from "../assets/homeBrowse1.png";
import Teacher2 from "../assets/homeBrowse2.png";

/* ================= DATA ================= */
const courses = [
  {
    img: CourseImg1,
    category: "Digital Marketing",
    rating: "★★★★★ 4.5k",
    price: "$50.00",
    title: "It Statistics Data Science And Business Analysis",
    lesson: "Lesson 10",
    time: "19h 30m",
    students: "Students 20+",
    teacherImg: Teacher1,
    teacher: "Samantha",
  },
  {
    img: CourseImg2,
    category: "Digital Marketing",
    rating: "★★★★★ 4.5k",
    price: "$50.00",
    title: "Bilginer Adobe Illustrator For Graphic Design",
    lesson: "Lesson 10",
    time: "19h 30m",
    students: "Students 20+",
    teacherImg: Teacher2,
    teacher: "Charles",
  },
  {
    img: CourseImg3,
    category: "Digital Marketing",
    rating: "★★★★★ 4.5k",
    price: "$50.00",
    title: "Starting SEO As Your Home Based Business",
    lesson: "Lesson 10",
    time: "19h 30m",
    students: "Students 20+",
    teacherImg: Teacher1,
    teacher: "Morgan",
  },
  {
    img: CourseImg4,
    category: "Digital Marketing",
    rating: "★★★★★ 4.5k",
    price: "$50.00",
    title: "Bilginer Adobe Illustrator For Graphic Design",
    lesson: "Lesson 10",
    time: "19h 30m",
    students: "Students 20+",
    teacherImg: Teacher2,
    teacher: "Brian Brewer",
  },
  {
    img: CourseImg5,
    category: "Digital Marketing",
    rating: "★★★★★ 4.5k",
    price: "$50.00",
    title: "It Statistics Data Science And Business Analysis",
    lesson: "Lesson 10",
    time: "19h 30m",
    students: "Students 20+",
    teacherImg: Teacher1,
    teacher: "Rodriquez",
  },
  {
    img: CourseImg6,
    category: "Digital Marketing",
    rating: "★★★★★ 4.5k",
    price: "$50.00",
    title: "Starting SEO As Your Home Based Business",
    lesson: "Lesson 10",
    time: "19h 30m",
    students: "Students 20+",
    teacherImg: Teacher2,
    teacher: "Morgan",
  },
];

/* ================= STYLES ================= */

const CardCtn = styled.div`
width: 100%;
height: auto;
margin-bottom: 50px;
margin-top: 50px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const Card = styled.div`
  width: 360px;
  background: #fff;
  border-radius: 20px;
  padding: 14px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);

  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Category = styled.div`
  position: absolute;
  bottom: 14px;
  left: 14px;
  background: #1f2b5c;
  color: #fff;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 14px;
`;

const Content = styled.div`
  padding: 18px 6px;
`;

const RatingPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 12px;
`;

const Rating = styled.div`
  color: #ff7a00;
  font-weight: 600;
`;

const Price = styled.div`
  color: #6a5cff;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #17254e;
  margin-bottom: 16px;
`;

const Info = styled.div`
  display: flex;
  gap: 18px;
  font-size: 14px;
  color: #666;
  margin-bottom: 18px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Teacher = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

const EnrollBtn = styled.button`
  background: #6a5cff;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: #5848e5;
  }
`;

/* ================= COMPONENT ================= */
export default function HomeCard() {
  return (
    <CardCtn>
    <Container>
    <Grid>
      {courses.map((item, index) => (
        <Card key={index}>
          <ImageBox>
            <img src={item.img} alt="course" />
            <Category>{item.category}</Category>
          </ImageBox>

          <Content>
            <RatingPrice>
              <Rating>{item.rating}</Rating>
              <Price>{item.price}</Price>
            </RatingPrice>

            <Title>{item.title}</Title>

            <Info>
              <span>📘 {item.lesson}</span>
              <span>⏰ {item.time}</span>
              <span>👨‍🎓 {item.students}</span>
            </Info>

            <Bottom>
              <Teacher>
                <img src={item.teacherImg} alt="teacher" />
                <span>{item.teacher}</span>
              </Teacher>

              <EnrollBtn>Enroll →</EnrollBtn>
            </Bottom>
          </Content>
        </Card>
      ))}
    </Grid>
    </Container>
    </CardCtn>
  );
}