import React from "react"
import ProductCard from "./ProductCard"


function ProductContainer (){
      const products =[
        {
        id:1,
        productname:"Product 1",
        description:"bhaike khate me likh liyo",
        price:100,
        image:"https://picsum.photos/200"
      },
      {
        id:2,
        productname:"Product 2",
        description:"hehehehe",
        price:200,
        image:"https://picsum.photos/201"
      },
      {
        id:3,
        productname:"Product 3",
        description:"bhaike khate me likh liyo",
        price:300,
        image:"https://picsum.photos/202"
      },
      {
        id:4,
        productname:"Product 4",
        description:"bhaike khate me likh liyo",
        price:400,
        image:"https://picsum.photos/203"
      }]
    return (
        <>
            <div>
            <h1 className=" text-center text-2xl font-bold mt-4">Our Products</h1>
                <div className="grid grid-cols-4 gap-4 px-20 py-5">
                {
                    products.map((product) =>(
                        <ProductCard key={product.id} product={product}/>
                ))}

                </div>
                
            </div>
        </>
    )

}

export default ProductContainer