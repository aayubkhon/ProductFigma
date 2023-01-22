import React from "react";
import {
  Button,
  Carts,
  CartsImg,
  Container,
  Icons,
  Mobile,
  Pages,
  Wrapper,
  Link
} from "./style";
import search from "../Assets/icons/search.svg";
import cart from "../Assets/icons/cart.svg";
import {  Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Pages>
            <Link style={{color:"red"}} exact to={'/'}>
              Home
            </Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/courses'}>Courses</Link>
          </Pages>
        </Wrapper>
        <Icons>
          <Carts>
            <CartsImg src={search} alt="" />
            <p>search</p>
          </Carts>
          <Carts>
            <CartsImg src={cart} alt="" />
            <p>cart</p>
          </Carts>
          <Button>Sign Up</Button>
        </Icons>
        {/* <Mobile>
          <li className="fas fa-bars"></li>
          <li className="fas fa-times"></li>
        </Mobile> */}
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
