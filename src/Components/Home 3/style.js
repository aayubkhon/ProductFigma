import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 100px 30px;
  display: flex;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 163px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;

const Title = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 56px;
  color: #1f2937;
  line-height: 67px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 47px;
    width: 80%;
  }
`;

const Text = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  color: #4b5563;
  line-height: 27px;
  width: 90%;
  margin-top: 30px;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

const ItemsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ImageImges = styled.img`
  width: 550px;
  height: 600px;
  margin-left: 30px;
  @media screen and (max-width: 600px) {
    margin-left: 0px;
    width: 340px;
    height: 340px;
    border-radius: 17px;
  }
`;

const Image = styled.div`
  margin: 48px 82px;
  @media screen and (max-width: 600px) {
    display: flex;
    margin-left: 1px;
  }
`;

const ItemImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  text-align: center;
`;

const LearnT = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #111827;
  margin-left: 15px;
`;

const Button = styled.button`
  background: #1f2937;
  border: 1px solid #1f2937;
  border-radius: 8px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  height: 50px;
  width: 135px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 15px;
`;

export {
  Container,
  Wrapper,
  Image,
  Items,
  ItemsBox,
  Button,
  Title,
  Text,
  ItemImg,
  ImageImges,
  LearnT,
  Logo,
};
