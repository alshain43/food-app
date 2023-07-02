import product_01_image_01 from "../../img/c1.png"
import product_01_image_02 from "../../img/c2.png"
import product_01_image_03 from "../../img/c3.png" 

import product_02_image_01 from "../../img/cu1.png"
import product_02_image_02 from "../../img/cu2.png"
import product_02_image_03 from "../../img/cu3.png"

import product_03_image_01 from "../../img/d1.png"
import product_03_image_06 from "../../img/d6.png"
import product_03_image_03 from "../../img/d3.png"

import product_04_image_01 from "../../img/f1.png"
import product_04_image_02 from "../../img/f2.png"
import product_04_image_03 from "../../img/f3.png"

import product_05_image_01 from "../../img/i1.png"
import product_05_image_02 from "../../img/i2.png"
import product_05_image_04 from "../../img/i4.png"

import product_06_image_01 from "../../img/r1.png"
import product_06_image_02 from "../../img/r2.png"
import product_06_image_03 from "../../img/r3.png"


const products = [
    {
        id:1,
        title: "Fried Chicken",
        price : 7000,
        image01 : product_01_image_01,
        image02 : product_01_image_02,
        image03 : product_01_image_03,
        category : 'Chicken',
      
    },
    {
        id:2,
        title: "Spicy Chicken",
        price : 6000,
        image01 : product_01_image_03,
        image02 : product_01_image_02,
        image03 : product_01_image_01,
        category : 'Chicken',
    
    },
    {
        id:3,
        title: "Curry",
        price : 6000,
        image01 : product_02_image_02,
        image02 : product_02_image_03,
        image03 : product_02_image_01,
        category : 'Curry',
      
    },
    {
        id:4,
        title: "Curry With Shrimp",
        price : 10000,
        image01 : product_02_image_03,
        image02 : product_02_image_02,
        image03 : product_02_image_01,
        category : 'Curry',
    
    },
    {
        id:5,
        title: "Energy Drinks",
        price : 2000,
        image01 : product_03_image_01,
        image02 : product_03_image_03,
        image03 : product_03_image_06,
        category : 'Drinks',
        
    },
    {
        id:6,
        title: "Energy Drinks",
        price : 3000,
        image01 : product_03_image_03,
        image02 : product_03_image_01,
        image03 : product_03_image_06,
        category : 'Drinks',
    
    },
    {
        id:7,
        title: "Fruits",
        price : 4000,
        image01 : product_04_image_01,
        image02 : product_04_image_02,
        image03 : product_04_image_03,
        category : 'Fruits',
      
    },
    {
        id:8,
        title: "Fruits",
        price : 3000,
        image01 : product_04_image_02,
        image02 : product_04_image_03,
        image03 : product_04_image_01,
        category : 'Fruits',
        
    },
    {
        id:9,
        title: "Icecream",
        price : 5000,
        image01 : product_05_image_04,
        image02 : product_05_image_01,
        image03 : product_05_image_02,
        category : 'Icecream',
        
    },
        {
            id:10,
            title: "Icecream",
            price : 4000,
            image01 : product_05_image_01,
            image02 : product_05_image_02,
            image03 : product_05_image_04,
            category : 'Icecream',
            
        },
        {
            id:11,
            title: "Fried Rice",
            price : 5000,
            image01 : product_06_image_01,
            image02 : product_06_image_02,
            image03 : product_06_image_03,
            category : 'Fried Rice',
            
        },
        {
            id:12,
            title: "Fried Rice with Chicken",
            price : 7000,
            image01 : product_06_image_02,
            image02 : product_06_image_03,
            image03 : product_06_image_01,
            category : 'Fried Rice',
      
        },

]

export default products;