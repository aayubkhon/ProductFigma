import styled from "styled-components";

const Container = styled.div`
  width: 700px;
  height: 700px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const ImageImges = styled.img`
  margin: 100px 80px;
  width: 576px;
  height: 592px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const ItemParagraph = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 48px;
  color: #1f2937;
  width: 590px;
  line-height: 55px;
  margin-top: 100px;
`;

const ItemText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #4b5563;
  margin-top: 20px;
`;

const Something = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
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
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  width: 135px;
  height: 50px;
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
  Item,
  ItemParagraph,
  ItemText,
  Something,
  Button,
  LearnT,
  ImageImges,
  Logo,
};
