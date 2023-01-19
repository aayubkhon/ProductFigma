import styled from "styled-components";

const Container = styled.div`
  background: #00353b;
  border-radius: 0px;
  width: 100%;
  padding-left: 80px;
  display: flex;
  height: 730px;
  @media (max-width: 600px) {
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;
  height: 890px;

  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 163px;
  
`;

const Title = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 56px;
  color: #ffffff;
  line-height: 67px;
  @media (max-width: 600px) {
  width:80%;
  font-size: 46px;
  }
`;

const Text = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  line-height: 27px;
  width: 90%;
  margin-top: 30px;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
`;

const ItemsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ItemText = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  margin-left: 10px;
`;

const Image = styled.div`
  margin: 48px 82px;
  @media (max-width: 600px) {
 display:flex;
 align-items:center;
 justify-content:center;
  }
`;

const ImageImg = styled.img`
  width: 550px;
  height: 600px;
  margin-left: 30px;
  @media screen and (max-width: 300px) {
  width:460px;
  height:300px;
  margin-right:80px;
  }
`;

const ItemImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  text-align: center;
`;

const Button = styled.button`
  background: #22a45a;
  border: 1px solid #22a45a;
  border-radius: 8px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  height: 50px;
  width: 130px;
  cursor: pointer;
`;

export {
  Container,
  Wrapper,
  Image,
  Items,
  ItemsBox,
  Item,
  Button,
  ItemText,
  ItemImg,
  Title,
  Text,
  ImageImg
  
};
