import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #00353b;
  height: 433px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #ffffff;
  margin-top: 100px;
`;

const Text = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  margin-top: 29px;
  width: 50%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 40px;
`;

const Button = styled.button`
  background: #22a45a;
  border: 1px solid #22a45a;
  border-radius: 8px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  border: none;
  width: 135px;
  height: 50px;
`;

const ItemButton = styled.button`
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 8px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #1f2937;
  border: none;
  width: 135px;
  height: 50px;
  margin-left: 16px;
`;

export { Container, Wrapper, Title, Text, Item, Button, ItemButton };
