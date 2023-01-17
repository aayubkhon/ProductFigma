import styled from "styled-components";

const Container = styled.div`
  background: #00353b;
  height: 641px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
`;
const Title = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  width: 80%;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 23px;
`;

const Input = styled.input`
  font-family: "Poppins";
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  height: 50px;
  width: 290px;
  border: none;
`;

const Button = styled.button`
  font-family: "Poppins";
  background: #22a45a;
  border: 1px solid #22a45a;
  border-radius: 8px;
  font-weight: 400;
  font-size: 15px;
  border: none;
  cursor: pointer;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  width: 124px;
  height: 50px;
  margin-left: 15px;
`;

const AICompany = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 20px;
`;

const Box = styled.div`
display:flex;
justify-content:space-between;
width:650px;
`

const Items = styled.div`
display:flex;
flex-direction:column;
`

const Item = styled.div`
display:flex;
flex-direction:column;
margin-top:24px;
`

const Paragraphs = styled.p`
  font-family: "Poppins";
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`

const Pages = styled.p`
  font-family: "Poppins";
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
margin-top:24px;
`


export {
  Container,
  Wrapper,
  WrapperItem,
  Title,
  InputBox,
  Input,
  Button,
  AICompany,
  Items,
  Item,
  Paragraphs,Pages,Box
};
