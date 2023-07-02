import React from 'react'
import "../../../styles/category.css"

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../img/c1.png"
import categoryImg02 from "../../../img/cu2.png"
import categoryImg03 from "../../../img/d1.png"
import categoryImg04 from "../../../img/f1.png"
import categoryImg05 from "../../../img/i1.png"
import categoryImg06 from "../../../img/r1.png"


const categoryData = [
    {
        display: 'Chicken',
        imgUrl : categoryImg01
    },
    {
        display: 'Curry',
        imgUrl : categoryImg02
    },
    {
        display: 'Drinks',
        imgUrl : categoryImg03
    },
    {
        display: 'Fruits',
        imgUrl : categoryImg04
    },
    {
        display: 'Icecream',
        imgUrl : categoryImg05
    },
    {
        display: 'Fried Rice',
        imgUrl : categoryImg06
    },
]

const Category = () => {
  return (
<Container>
  <Row>
    {categoryData?.map((item, index) => (
      <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
        <div className="category__item d-flex align-items-center gap-3">
          <div className="category__img w-50 h-50">
            <img src={item.imgUrl} alt="category__item" />
          </div>
          <h6>{item.display}</h6>
        </div>
      </Col>
    ))}
  </Row>
</Container>
  )
}

export default Category