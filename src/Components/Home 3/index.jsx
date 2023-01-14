import React from "react";
import picture from "../Assets/img/picture2.png";
import right from "../Assets/icons/right.svg";
import {
  Button,
  Container,
  Image,
  ImageImges,
  Items,
  ItemsBox,
  LearnT,
  Title,
  Wrapper,
  Text,
  Logo,
} from "./style";
const FindCourse = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Easily find the perfect course for you</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vel molestie magna curabitur tincidunt nunc sit amet.
        </Text>
        <Items>
          <ItemsBox>
            <Button>Get Started</Button>
            <LearnT>Learn More</LearnT>
            <Logo src={right} alt="" />
          </ItemsBox>
        </Items>
      </Wrapper>
      <Image>
        <ImageImges src={picture} alt="" />
      </Image>
    </Container>
  );
};

export default FindCourse;
