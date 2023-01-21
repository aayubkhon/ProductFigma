import React from "react";
import {
  Button,
  Container,
  ImageImges,
  Item,
  ItemParagraph,
  ItemText,
  LearnT,
  Logo,
  Something,
  Wrapper,
} from "./style";
import picture from "../Assets/img/picture.png";
import right from "../Assets/icons/right.svg";
const AboutCourse = () => {
  return (
    <Container>
      <Wrapper>
        <ImageImges src={picture} alt="" />
        <Item>
          <ItemParagraph>
            Premium courses from the industry leaders!
          </ItemParagraph>
          <ItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus!
          </ItemText>
          <Something>
            <Button>Get Started</Button>
            <LearnT>Learn More</LearnT>
            <Logo src={right} alt="" />
          </Something>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default AboutCourse;
