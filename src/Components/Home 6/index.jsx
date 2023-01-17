import React from "react";
import {
  Logo,
  LogoBox,
  LogoParagraph,
  LogoText,
  Main,
  Img,
  Title,
  TitleText,
  Wrapper,
  Picture,
  Button,
} from "./style";
import logo from "../Assets/icons/icon1.svg";
import logo2 from "../Assets/icons/logo1.svg";
import smile from "../Assets/icons/icon2.svg";
import contact from "../Assets/icons/icon3.svg";
import Children from "../Assets/img/children.png";
const AboutTeachers = () => {
  return (
    <div>
      <Title>
        <TitleText>
          Grow your knowledge from best teachers in the industry
        </TitleText>
      </Title>
      <Wrapper>
        <Main>
          <LogoBox>
            <Logo src={logo} alt="" />
            <LogoText>Over 430+ hours of lessons</LogoText>
            <LogoParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </LogoParagraph>
            <LogoBox>
              <Logo src={logo2} alt="" />
              <LogoText>40+ teachers</LogoText>
              <LogoParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </LogoParagraph>
            </LogoBox>
          </LogoBox>
          <Img>
            <Picture src={Children} alt="" />
          </Img>
          <LogoBox>
            <Logo src={smile} alt="" />
            <LogoText>Online community</LogoText>
            <LogoParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </LogoParagraph>
            <LogoBox>
              <Logo src={contact} alt="" />
              <LogoText>1-on-1 coaching</LogoText>
              <LogoParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </LogoParagraph>
            </LogoBox>
          </LogoBox>
        </Main>
        <Button>Get Started</Button>
      </Wrapper>
    </div>
  );
};

export default AboutTeachers;
