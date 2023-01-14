import React from 'react'
import { Button, Carts, CartsImg, Container, Icons, Pages, Wrapper } from './style'
import search from '../Assets/icons/search.svg'
import cart from '../Assets/icons/cart.svg'
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Pages>
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
        <p>Courses</p>
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
    </Container>
  )
}

export default Navbar