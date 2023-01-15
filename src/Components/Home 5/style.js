import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
`;

const Wrapper = styled.div`
  display: flex;
  background: #fcd8ca;
  border-end-start-radius: 24px;
  border-start-start-radius: 24px;
  width: 700px;
  height: 539px;
`;

const Main = styled.div`
  display: flex;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
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
`;

const TitleText = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #374151;
  margin-top: 10px;
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

const LogoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

const LogoImg = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
`;

const LogoImgTitle = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  color: #1f2937;
  margin-top: 19px;
`;

const LogoImgText = styled.p`
  margin-top: 10px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4b5563;
  width: 80%;
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
};
