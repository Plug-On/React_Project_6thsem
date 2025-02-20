import React from "react"
import ProductCard from "./ProductCard"


function ProductContainer (){
    return (
        <>
            <div>
                <div className="grid grid-cols-4 gap-4 px-20 py-10">
                <ProducCard/>
                <ProducCard/>
                <ProducCard/>
                <ProducCard/>

                </div>
                
            </div>
        </>
    )

}

export default ProductContainer