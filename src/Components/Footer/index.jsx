import React from "react";
import {
  AICompany,
  Border,
  Box,
  Button,
  Container,
  Input,
  InputBox,
  Item,
  Items,
  Pages,
  Paragraphs,
  SNS,
  SNSImg,
  Social,
  Title,
  Wrapper,
  WrapperItem,
} from "./style";
import facebook from "../Assets/icons/facebook.svg";
import twiter from "../Assets/icons/twiter.svg";
import instagram from "../Assets/icons/instagram.svg";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperItem>
          <Title>
            Join our newsletter to stay up to date on features and releases.
          </Title>
          <InputBox>
            <Input type="text" />
            <Button>Subscribe</Button>
          </InputBox>
          <AICompany>Akramov AI Company...</AICompany>
        </WrapperItem>
        <Box>
          <Items>
            <Paragraphs>Pages</Paragraphs>
            <Item>
              <Pages>Home</Pages>
              <Pages>About</Pages>
              <Pages>Contact</Pages>
              <Pages>Blog</Pages>
              <Pages>Courses</Pages>
              <Pages>Teachers</Pages>
            </Item>
          </Items>
          <Items>
            <Paragraphs>CMS Pages</Paragraphs>
            <Item>
              <Pages>Blog Post</Pages>
              <Pages>Blog Categories</Pages>
              <Pages>Courses Single</Pages>
              <Pages>Courses Categories</Pages>
              <Pages>Product Page</Pages>
              <Pages>Product Categories</Pages>
              <Pages>Teachers Single</Pages>
              <Pages>Episode Single</Pages>
            </Item>
          </Items>
          <Items>
            <Paragraphs>Account Pages</Paragraphs>
            <Item>
              <Pages>Login</Pages>
              <Pages>Sign Up</Pages>
              <Pages>Forgot Password</Pages>
              <Pages>Email Confirmation</Pages>
            </Item>
          </Items>
          <Items>
            <Paragraphs>Utility Pages</Paragraphs>
            <Item>
              <Pages>Style Guide</Pages>
              <Pages>Changelog</Pages>
              <Pages>Licenses</Pages>
              <Pages>404</Pages>
              <Pages>Password</Pages>
            </Item>
          </Items>
        </Box>
      </Wrapper>
      <Border></Border>
      <Social>
        <Pages>?? Learnico by Minimal Square . Powered by Akramov AI</Pages>
        <SNS>
          <SNSImg src={facebook} alt="" />
          <SNSImg src={twiter} alt="" />
          <SNSImg src={instagram} alt="" />
        </SNS>
      </Social>
    </Container>
  );
};

export default Footer;
