import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Items,
  Container,
  Image,
  Wrapper,
  ItemsBox,
  Item,
  Button,
  ItemText,
  ItemImg,
  Title,
  Text,
  ImageImg,
} from "./style";
import picture from "../Assets/img/main.png";
import play from "../Assets/icons/play.svg";
import AboutCourse from "../Home 2"
import FindCourse from "../Home 3"
const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <Container>
      <Wrapper>
        <Title>Become an No-Code expert and find a job!</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vel molestie magna curabitur tincidunt nunc sit amet.
        </Text>
        <Items>
          <ItemsBox>
            <Button onClick={()=>navigate('/about')}>Explore courses</Button>
            <Item>
              <ItemText>Watch Video</ItemText>
              <ItemImg src={play} alt="" />
            </Item>
          </ItemsBox>
        </Items>
      </Wrapper>
      <Image>
        <ImageImg src={picture} alt="" />
      </Image>
    </Container>
    <AboutCourse/>
    <FindCourse/>
    </>
  );
};

export default Home;
