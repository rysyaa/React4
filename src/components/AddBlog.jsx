import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const AddBlog = ({addBlog}) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const handleValues = () => {
    let newInfo = {name: name, category: category, details: details};
    addBlog(newInfo)
  }
  const styleContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    width: "800px",
    margin: "0 auto"
  }
  return (
    <div style={styleContainer}>
      <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setName(e.target.value)} type="text" placeholder='Name'
        />
      </InputGroup>
      <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setCategory(e.target.value)} type="text" placeholder='Category'
        />
      </InputGroup>
      <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setDetails(e.target.value)} type="text" placeholder='Details'
        />
      </InputGroup>
      <Link to="/cards">
        <Button onClick={() => handleValues()} variant="outline-primary">Создать</Button>
      </Link>
    </div>
  )
}
  
export default AddBlog