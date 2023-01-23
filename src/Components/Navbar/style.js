import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  background: #00353b;
  height: 52px;
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
  @media screen and (max-width: 600px) {
  }
`;

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  margin: auto;
  align-items: center;
  @media screen and (max-width: 600px) {
   
  }
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
   display:none;
  }
 

  
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 19px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
   display:none;
  }
`;

const Carts = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartsImg = styled.img`
  width: 30px;
  height: 19px;
`;

const Button = styled.button`
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #1f2937;
  width: 75px;
  height: 40px;
  margin-left: 10px;
  cursor: pointer;
`;

const Mobile = styled.div`
display:none;
  @media screen and (max-width: 600px) {
    display:block;
    position:absolute;
    top:10px; 
    right:20px;
    color:white;
  }

`;

const Link = styled(NavLink)`
  font-family: "Poppins";
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  margin-left:10px;
  
`;

export {
  Container,
  Link,
  Wrapper,
  Pages,
  Icons,
  Carts,
  Button,
  CartsImg,
  Mobile,
};
