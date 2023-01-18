import styled from "styled-components";

const Container = styled.div`
  background: #00353b;
  height: 950px;
`;

const BlogButton = styled.button`
  font-family: "Poppins";
  background: #fcd8ca;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  color: #1f2937;
  width: 107px;
  height: 50px;
  margin: 50px 80px;
  border: none;
  cursor: pointer;
`;

const MainTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 80px;
`;
const Title = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 48px;
  color: #ffffff;
`;

const ViewButton = styled.button`
  font-family: "Poppins";
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #1f2937;
  width: 107px;
  height: 50px;
  border: none;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
`;

const Photo = styled.img`
  width: 405px;
  height: 300px;
`;

const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const Picture = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px;
  background: #ffffff;
  width: 405px;
  height: 304px;
`;

const Button = styled.button`
  font-family: "Poppins";
  background: #aadea8;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #111827;
  width: 110px;
  height: 35px;
  border: none;
  cursor: pointer;
`;

const ImgTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  color: #1f2937;
  width: 80%;
  margin-top: 10px;
`;

const ImgText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #4b5563;
  margin-top: 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 45px;
`;

const ReadMore = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #111827;
  cursor: pointer;
`;

const Right = styled.img`
  width: 10px;
  height: 12px;
  margin-left: 10px;
  cursor: pointer;

`;

export {
  Container,
  BlogButton,
  MainTitle,
  Title,
  ViewButton,
  Wrapper,
  Photo,
  WrapperItem,
  Button,
  Picture,
  ImgTitle,
  ImgText,
  Item,
  ReadMore,
  Right,
};
