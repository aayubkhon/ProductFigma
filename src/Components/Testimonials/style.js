import styled from "styled-components";

const Container = styled.div`
  background: #fcd8ca;
  border-radius: 24px;
  height: 700px;
  margin: 90px 80px;
`;

const MinTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const MinTitleButton = styled.button`
  font-family: "Poppins";
  background: #ffffff;
  border-radius: 4px;
  font-family: "DM Sans";
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #1f2937;
  margin-top: 70px;
  border: none;
  width: 101px;
  height: 29px;
`;

const Title = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #1f2937;
  margin-top: 15px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 16px;
  margin: 90px 20px;
  width: 380px;
  height: 328px;
`;

const Stars = styled.img`
  width: 500px;
  margin: 25px 20px;
`;

const WrapperText = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 17px;
  line-height: 27px;
  color: #1f2937;
  width: 90%;
  margin: 25px 20px;
`;

const Items = styled.div`
  display: flex;
  margin: 20px 20px;
`;

const ItemsAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const ImgName = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #111827;
`;

const ImgJob = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #6b7280;
`;

export {
  Container,
  MinTitle,
  MinTitleButton,
  Title,
  Wrapper,
  WrapperItem,
  WrapperText,
  Items,
  ItemsAbout,
  ImgName,
  ImgJob,
  Stars,
};
