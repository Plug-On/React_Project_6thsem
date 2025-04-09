import React from "react"
import  { useEffect, useState } from 'react'
import ProductCard from "./ProductCard"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../constants/apiConstant"

function ProductContainer (){
      const navigation = useNavigate();
      const [products, setProducts] = useState([]);
 
   useEffect(() => {
     axios.get(`${ API_URL }/latestproduct`)
       .then((response) => {
         setProducts(response.data);
       })
   }, []);
      const handleClick = (id) =>{
        navigation(`/product/${id}`);
      }
    return (
        <>
            <div>
            <h1 className=" text-center text-2xl font-bold mt-4">Our Products</h1>
                <div className="grid grid-cols-4 gap-4 px-20 py-5">
                {
                    products.map((product) =>(
                        <ProductCard key={product.id} product={product} onClick={()=>handleClick(product.id)}/>
                ))}

                </div>
                
            </div>
        </>
    )

}

export default ProductContainer