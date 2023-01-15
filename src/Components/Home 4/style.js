import styled from "styled-components";

const Container = styled.div``;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 48px;
  text-align: center;
  color: #1f2937;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 80px;
  justify-content: space-between;
`;

const Course = styled.div`
  background: #00353b;
  border-end-start-radius: 17px;
  border-start-end-radius: 17px;
  border-start-start-radius: 17px;
  width: 405px;
  height: 500px;
  padding: 36px 36px;
  display: flex;
  flex-direction: column;
`;

const CoursePrice = styled.div`
  display: flex;
  flex-direction: column;
`;

const CoursePriceButton = styled.button`
  background: #ffffff;
  border-radius: 4px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  color: #1f2937;
  width: 77px;
  height: 29px;
  border: none;
  cursor: pointer;
`;

const CoursePriceText = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  margin-top: 10px;
`;

const CoursePrices = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  margin-top: 10px;
`;

const CoursePriceImg = styled.div`
  display: flex;
  position: relative;
`;

const ButttonBuy = styled.button`
  background: #22a45a;
  border: 1px solid #22a45a;
  border-radius: 8px;
  font-family: "Poppins";
  border: none;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  width: 142px;
  height: 42px;
  margin-top: 280px;
  cursor: pointer;
`;

const Picture = styled.img`
  width: 210px;
  height: 270px;
  position: absolute;
  top: 82px;
  left: 47.8%;
`;

export {
  Container,
  Main,
  Title,
  Wrapper,
  Course,
  CoursePrice,
  CoursePriceText,
  CoursePriceButton,
  CoursePrices,
  CoursePriceImg,
  ButttonBuy,
  Picture,
};
