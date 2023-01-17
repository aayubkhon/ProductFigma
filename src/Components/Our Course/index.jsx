import React from "react";
import {
  BlogButton,
  Container,
  MainTitle,
  ViewButton,
  Title,
  Wrapper,
  WrapperItem,
  Button,
  ImgTitle,
  ImgText,
  Item,
  ReadMore,
  Picture,
  Photo,
  Right,
} from "./style";
import freelancer from "../Assets/img/freelance.png";
import design from "../Assets/img/design.png";
import developer from "../Assets/img/developer.png";
import right from "../Assets/icons/right.svg";
const LatestPost = () => {
  return (
    <Container>
      <BlogButton>Blog</BlogButton>
      <MainTitle>
        <Title>Our latest posts</Title>
        <ViewButton>View All</ViewButton>
      </MainTitle>
      <Wrapper>
        <WrapperItem>
          <Photo src={freelancer} alt="" />
          <Picture>
            <Button>Freelance</Button>
            <ImgTitle>7 freelance mistakes to avoid</ImgTitle>
            <ImgText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </ImgText>
            <Item>
              <ReadMore>Read more</ReadMore>
              <Right src={right} alt="" />
            </Item>
          </Picture>
        </WrapperItem>
        <WrapperItem>
          <Photo src={design} alt="" />
          <Picture>
            <Button>UI/UX Design</Button>
            <ImgTitle>Brand design process explained</ImgTitle>
            <ImgText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </ImgText>
            <Item>
              <ReadMore>Read more</ReadMore>
              <Right src={right} alt="" />
            </Item>
          </Picture>
        </WrapperItem>
        <WrapperItem>
          <Photo src={developer} alt="" />
          <Picture>
            <Button>Business</Button>
            <ImgTitle>The beginner’s guide to recruiting a developer</ImgTitle>
            <ImgText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </ImgText>
            <Item>
              <ReadMore>Read more</ReadMore>
              <Right src={right} alt="" />
            </Item>
          </Picture>
        </WrapperItem>
      </Wrapper>
    </Container>
  );
};

export default LatestPost;
