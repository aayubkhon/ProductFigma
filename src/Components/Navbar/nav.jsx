import React from 'react'
import { Button, Carts, CartsImg, Container, Icons, Mobile, Pages, Wrapper } from './style'
import search from '../Assets/icons/search.svg'
import cart from '../Assets/icons/cart.svg'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
      <>
    <Container>
      <Wrapper>
        <Pages>
        <p exact to={'/'}>Home</p>
        <p to={'about'} >About</p>
        <p to={'blog'}>Blog</p>
        <p to={'contact'}>Contact</p>
        <p to={'courses'}>Courses</p>
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
      <Mobile>
        <li className='fas fa-bars'></li>
        <li className='fas fa-times'></li>
      </Mobile>
    </Container>
    <Outlet/>
      </>
  )
}

export default Navbar