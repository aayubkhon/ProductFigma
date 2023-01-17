import React from "react";
import {
  Container,
  ImgJob,
  ImgName,
  Items,
  ItemsAbout,
  MinTitle,
  MinTitleButton,
  Stars,
  Title,
  Wrapper,
  WrapperItem,
  WrapperText,
} from "./style";
import stars from "../Assets/icons/stars.svg";
import man from "../Assets/img/man.png";
import girl from "../Assets/img/girl.png";
import women from "../Assets/img/women.png";
const Testimonials = () => {
  return (
    <Container>
      <MinTitle>
        <MinTitleButton>Testimonials</MinTitleButton>
        <Title>What our students say</Title>
      </MinTitle>
      <Wrapper>
        <WrapperItem>
          <Stars src={stars} alt="" />
          <WrapperText>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </WrapperText>
          <Items>
            <img src={man} alt="" />
            <ItemsAbout>
              <ImgName>Orlando Diggs</ImgName>
              <ImgJob>Junior UI Designer, @Company</ImgJob>
            </ItemsAbout>
          </Items>
        </WrapperItem>
        <WrapperItem>
          <Stars src={stars} alt="" />
          <WrapperText>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </WrapperText>
          <Items>
            <img src={girl} alt="" />
            <ItemsAbout>
              <ImgName>Mollie Hall</ImgName>
              <ImgJob>Design System , @Company</ImgJob>
            </ItemsAbout>
          </Items>
        </WrapperItem>
        <WrapperItem>
          <Stars src={stars} alt="" />
          <WrapperText>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </WrapperText>
          <Items>
            <img src={women} alt="" />
            <ItemsAbout>
              <ImgName>Lori Bryson</ImgName>
              <ImgJob>UX Designer, @Company</ImgJob>
            </ItemsAbout>
          </Items>
        </WrapperItem>
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
