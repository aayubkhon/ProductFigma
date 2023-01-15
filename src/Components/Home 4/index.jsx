import React from "react";
import {
  Container,
  Title,
  Main,
  Wrapper,
  Course,
  CoursePrice,
  CoursePriceImg,
  CoursePriceButton,
  CoursePriceText,
  CoursePrices,
  ButttonBuy,
  Picture,
} from "./style";
import Beginner from "../Assets/img/first.png";
import MassterClass from "../Assets/img/second.png";
import Advanced from "../Assets/img/thirt.png";
const AboutPrice = () => {
  return (
    <Container>
      <Main>
        <Title>The most popular courses</Title>
      </Main>
      <Wrapper>
        <Course>
          <CoursePrice>
            <CoursePriceButton>Beginner</CoursePriceButton>
            <CoursePriceText>Webflow Basics</CoursePriceText>
            <CoursePrices>$ 24.00 USD</CoursePrices>
          </CoursePrice>
          <CoursePriceImg>
            <ButttonBuy>Buy Course</ButttonBuy>
            <Picture src={Beginner} alt="" />
          </CoursePriceImg>
        </Course>
        <Course>
          <CoursePrice>
            <CoursePriceButton>Masster</CoursePriceButton>
            <CoursePriceText>Webflow  Masterclass</CoursePriceText>
            <CoursePrices>$ 35.00 USD</CoursePrices>
          </CoursePrice>
          <CoursePriceImg>
            <ButttonBuy>Buy Course</ButttonBuy>
            <Picture src={MassterClass} alt="" />
          </CoursePriceImg>
        </Course>
        <Course>
          <CoursePrice>
            <CoursePriceButton>Advanced</CoursePriceButton>
            <CoursePriceText>Webflow Advanced</CoursePriceText>
            <CoursePrices>$ 55.00 USD</CoursePrices>
          </CoursePrice>
          <CoursePriceImg>
            <ButttonBuy>Buy Course</ButttonBuy>
            <Picture src={Advanced} alt="" />
          </CoursePriceImg>
        </Course>
      </Wrapper>
    </Container>
  );
};

export default AboutPrice;
