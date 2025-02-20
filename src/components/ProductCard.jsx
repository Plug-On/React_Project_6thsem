import React from "react"

function ProducCard()
{
    return (
        <div>
            <a href="" className="bg-white p-4 rounded-lg shadow-lg block hover:shadow-xl hover:-translate-y-1 transition duration:300">
            <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" className="h-40 w-full object-cover" />
            <h2 className="text-lg font-semibold mt-4">Product Name</h2>
            <p className="test-sm mt-2"> Product Description </p>
            <p className="text-sm font-semibold mt-2">$100</p>
            </a>
        </div>
    )
}

export default ProducCard