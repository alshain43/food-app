import React from 'react'

import Helmet from "../components/Helmet/Helmet"
import Category from "../components/UI/category/Category"

import "../styles/home.css"
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx"

import {Col, Container, Row } from 'reactstrap'

import heroImg from "../img/delivery.png"
import chefImg from "../img/chef1.png"

import products from "../assets/fake-data/products"
import ProductCard from "../components/UI/product-card/ProductCard"

import foodCategoryImg01 from "../img/c1.png";
import foodCategoryImg02 from "../img/i1.png";
import foodCategoryImg03 from "../img/r1.png"

import "../styles/hero-section.css"
import { Link } from 'react-router-dom'

import { useState,useEffect } from 'react'

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PlaceIcon from '@mui/icons-material/Place';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

// import mode from "../store/darkModeSlice"

const Home = () => {

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "Chicken") {
      const filteredProducts = products.filter(
        (item) => item.category === "Chicken"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Icecream") {
      const filteredProducts = products.filter(
        (item) => item.category === "Icecream"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Fried Rice") {
      const filteredProducts = products.filter(
        (item) => item.category === "Fried Rice"
      );

      setAllProducts(filteredProducts);
    }

  }, [category]);


  return (
    <Helmet title="Home">
<div 
// style={ {background : mode ? 'black' : 'white' , color : mode ? 'white' : 'black'}}
>
<section>
    <Container>
      <Row>
        <Col lg='6' md='6' className=''>
        <div className="hero__content my-3">
          <h3 className='hero__title'>Easy Way To Make An Order</h3>
          <p>Helping you to enjoy comfortable and healthy food anywhere and anytime!</p>
      <div className="hero__btns mb-5">
        <button className=' btn btn-outline-danger border me-3'>Order Now</button>
      </div>
      <div>
           <div className='mb-2 '>
           <ShoppingBagIcon className='me-2'/>
           <span>select your favorite food and order</span>
           </div>
           <div className='mb-2'>
      <PlaceIcon className='me-2'/>
      <span>
        select your receiving place
      </span>
           </div>
           <div>
  <LocalShippingIcon className='me-2'/>
  <span>Get your food within 1~2 hours</span>
           </div>
          </div>
        </div>
        </Col>
        <Col lg='6' md='6'>
        <div className="hero__img">
  <img src={heroImg} alt="hero-img" />
        </div>
        </Col>
      </Row>
    </Container>
  </section>
  <section>
    <Category/>
  </section>


  <section>
    <Container>
      <Row>
        <Col lg='12' className=' text-center justify-center mt-5 mb-5'>
        <p>About</p>
        <h2 className='mb-3'>We are the best quality restaurant</h2>
        <span>We make delicious healthy meals for busy people who want to enjoy their food without the hassle of cooking.You deserve to eat great food,whether you are at home or somewhere else.</span>
        </Col>
      </Row>
      <Row className=' justify-center mb-5 px-5 py-3'>
      <h2 className='text-center mb-4'>Why Choose Us</h2>
        <Col lg='6' className='flex gap-10'>
       <div className='me-5'>
       <SoupKitchenIcon className='me-2'/>
        <span >We serve the best and fresh quality food</span>
       </div>
      <div>
      <DeliveryDiningIcon className='me-2'/>
        <span>We have fast delivery for your order</span>
      </div>
        </Col>
      </Row>
    </Container>
  </section>


  <section>
    <Container>
      <Row className='mb-3'>
        <Col lg='12' className='text-center'>
        <h2>Popular Foods</h2>
        </Col>

        <Col lg="12">
    <div className="food__category d-flex align-items-center justify-content-center gap-4">
      <button
        className={`all__btn  ${
          category === "ALL" ? "foodBtnActive" : ""
        } `}
        onClick={() => setCategory("ALL")}
      >
        All
      </button>
      <button
        className={`d-flex align-items-center gap-2 ${
          category === "Chicken" ? "foodBtnActive" : ""
        } `}
        onClick={() => setCategory("Chicken")}
      >
        <img src={foodCategoryImg01} alt="" />
        Chicken
      </button>

      <button
        className={`d-flex align-items-center gap-2 ${
          category === "Icecream" ? "foodBtnActive" : ""
        } `}
        onClick={() => setCategory("Icecream")}
      >
        <img src={foodCategoryImg02} alt="" />
        Icecream
      </button>

      <button
        className={`d-flex align-items-center gap-2 ${
          category === "Fried Rice" ? "foodBtnActive" : ""
        } `}
        onClick={() => setCategory("Fried Rice")}
      >
        <img src={foodCategoryImg03} alt="" />
        Fried Rice
      </button>
    </div>
  </Col>


  {
    allProducts?.map((item) => (
      <Col lg='3' md='4'  key={item.id} className='mt-5 '>
       <ProductCard item={item} />
      </Col>
    ))
  }

      </Row>
    </Container>
  </section>

  <section>
    <Container>
      <Row >
      <Col lg="6" md="6">
          <div className="testimonial ">
            <h5 className="testimonial__subtitle mb-4 mt-5">Testimonial</h5>
            <h2 className="testimonial__title mb-3">
              What our <span>customers</span> are saying
            </h2>
            <p className="testimonial__desc">
              These are our customers saying about our food and services!
            </p>

            <TestimonialSlider />
          </div>
        </Col>
        <Col lg="6" md="6">
          <img src={chefImg} alt="testimonial-img" className="w-100" />
        </Col>
      </Row>
    </Container>  

  </section>
</div>

    </Helmet>
  )
}
       
export default Home