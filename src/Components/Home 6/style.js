import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 40px 0px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const TitleText = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  width: 50%;
  color: #1f2937;
  @media screen and (max-width: 600px) {
    font-size: 30px;
    text-align: center;
    width: 70%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-s;
  align-items: center;
  margin-top: 63px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const LogoText = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 24px;
  color: #1f2937;
  width: 45%;
  margin-top: 15px;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 16px;
    text-align: center;
  }
`;
const LogoParagraph = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #4b5563;
  width: 50%;
  margin-top: 15px;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 12px;
    text-align: center;
  }
`;

const Img = styled.div`
  margin-top: 79px;
`;

const Picture = styled.img`
  width: 510px;
  height: 630px;
  @media screen and (max-width: 600px) {
    width: 300px;
    height: 320px;
    margin: 19px 60px;
  }
`;

const Button = styled.button`
  font-family: "Poppins";
  background: #1f2937;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  width: 135px;
  height: 50px;
  border: none;
  cursor: pointer;
  margin-top: 35px;
`;

export {
  Container,
  Title,
  TitleText,
  Wrapper,
  Main,
  LogoText,
  LogoParagraph,
  Logo,
  LogoBox,
  Img,
  Picture,
  Button,
};
