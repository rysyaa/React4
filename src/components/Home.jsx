import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <Navbar>
        <Container>
          <Link to="/">
            <Navbar.Brand>Cards</Navbar.Brand>
          </Link>
          <Link to="/cards">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Link to="/add-blog">
            <Navbar.Brand>Add blog</Navbar.Brand>
          </Link>
          <Link to="/favorites">
            <Navbar.Brand>Favorites</Navbar.Brand>
          </Link>
          <Link to="/contact">
            <Navbar.Brand>Contact</Navbar.Brand>
          </Link>
          <Link to="/about-me">
            <Navbar.Brand>About me</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Home