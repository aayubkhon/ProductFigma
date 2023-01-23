import React, {useState} from "react";
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
import { Icon } from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'
const Navbar = () => {

  const [mobile,setMobile] = useState(false)

  const onMenu = ()=>{
    setMobile(!mobile);
  }
  return (
    <>
      <Container>
        <Wrapper className="navbar">
          <Pages className={mobile? 'navbar expanded': 'navbar'}>
            <Link  exact to={'/'}>
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
        <Mobile className="icon" onClick={onMenu}>
          {mobile?<Icon icon={x} size={28} />:<Icon icon={menu} size={28}/>}
        </Mobile>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
