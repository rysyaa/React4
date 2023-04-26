import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CardBlog = ({blog, getBlogs}) => {

  useEffect(()=> {
    getBlogs()
  },[])

  const navigate = useNavigate()

  return (
    <div className="container d-flex justify-content-evenly flex-wrap">
      {blog.map((elem) => (
        // <Card key={elem.id} style={{width: "18rem"}}>
        //   <Card.Body>
        //     <Card.Text>Название: {elem.name}</Card.Text>
        //     <Card.Text>Категория: {elem.category}</Card.Text>
        //     <Card.Text>Информация: {elem.details}</Card.Text>

        //   </Card.Body>
        // </Card>
        <Card style={{ width: '18rem', margin: "1em 0"}}>
      <Card.Body>
      <Card.Title>Название: {elem.name}</Card.Title>
        <Card.Text>Категория: {elem.category}</Card.Text>
        <Card.Text>Информация: {elem.details}</Card.Text>
      </Card.Body>
    </Card>
      ))}
    </div>
  )
}
  
export default CardBlog