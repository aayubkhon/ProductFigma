import React from "react";
import {
  Container,
  Items,
  JoinButton,
  Logo,
  LogoImg,
  LogoImgText,
  LogoImgTitle,
  LogoItem,
  Main,
  Picture,
  SecondButton,
  Title,
  TitleText,
  Wrapper,
} from "./style";
import Join from "../Assets/img/Join.png";
import FirstLogo from "../Assets/icons/logo1.svg";
import SecondLogo from "../Assets/icons/logo2.svg";
import ThirtLogo from "../Assets/icons/logo3.svg";
const AboutJoin = () => {
  return (
    <Container>
      <Main>
        <Wrapper>
          <Items>
            <JoinButton>Join Us</JoinButton>
            <Title>Join more than 17,000+ students all over the world!</Title>
            <TitleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </TitleText>
            <SecondButton>Get Started</SecondButton>
          </Items>
        </Wrapper>
        <Picture src={Join} alt="" />
      </Main>
      <LogoItem>
        <LogoImg>
          <Logo src={FirstLogo} alt="" />
          <LogoImgTitle>Browse our courses!</LogoImgTitle>
          <LogoImgText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum!
          </LogoImgText>
        </LogoImg>
        <LogoImg>
          <Logo src={SecondLogo} alt="" />
          <LogoImgTitle>Purchase quickly and securely!</LogoImgTitle>
          <LogoImgText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum!
          </LogoImgText>
        </LogoImg>
        <LogoImg>
          <Logo src={ThirtLogo} alt="" />
          <LogoImgTitle>Start learning right away!</LogoImgTitle>
          <LogoImgText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum!
          </LogoImgText>
        </LogoImg>
      </LogoItem>
    </Container>
  );
};

export default AboutJoin;
