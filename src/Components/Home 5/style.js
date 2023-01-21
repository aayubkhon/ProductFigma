import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 40px;
  width: 100%;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 70px 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  background: #fcd8ca;
  border-end-start-radius: 24px;
  border-start-start-radius: 24px;
  width: 660px;
  height: 539px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 380px;
    border-end-start-radius: 17px;
    border-start-end-radius: 17px;
    border-start-start-radius: 17px;
  }
`;

const Main = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 20px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: 20px 20px;
  }
`;

const JoinButton = styled.button`
  font-family: "Poppins";
  background: #ffffff;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #1f2937;
  width: 63px;
  height: 29px;
  border: none;
  cursor: pointer;
`;

const Title = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  color: #1f2937;
  margin-top: 10px;
  @media screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 25px;
    width: 100%;
  }
`;

const TitleText = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #374151;
  margin-top: 10px;
  @media screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 18px;
    width: 100%;
  }
`;

const SecondButton = styled.button`
  font-family: "Poppins";
  background: #1f2937;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  width: 135px;
  height: 60px;
  border: none;
  cursor: pointer;
  margin-top: 35px;
`;

const Picture = styled.img`
  width:690px;
height:539px;
border-top-right-radius:24px;
border-bottom-right-radius:24px;
@media screen and (max-width: 600px) {
 width:320px;
 height:380px;
 border-end-start-radius: 17px;
  border-start-end-radius: 17px;
  border-start-start-radius: 17px;
border-bottom-right-radius:0px;
\
 margin-top:30px;
  }

`;

const LogoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  @media screen and (max-width: 600px) {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
`;

const LogoImg = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  @media screen and (max-width: 600px) {
    width: 33px;
    height: 33px;
  }
`;

const LogoImgTitle = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 24px;
  color: #1f2937;
  margin-top: 19px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    width: 70%;
  }
`;

const LogoImgText = styled.p`
  margin-top: 10px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4b5563;
  width: 80%;
  @media screen and (max-width: 600px) {
    font-size: 16px;
    width: 80%;
  }
`;

export {
  Container,
  Main,
  Wrapper,
  Items,
  JoinButton,
  Title,
  TitleText,
  SecondButton,
  LogoItem,
  LogoImg,
  Logo,
  LogoImgTitle,
  LogoImgText,
  Picture,
};
