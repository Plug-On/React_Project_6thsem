import React from "react";

function  ServiceCard({ service })
{
    return(
         <div>
            <a href="" className="bg-white p-4 round-lg shadow-lg  block over:shadow-xl hover:shadow-xl hover:-translate-y-1 transition duration:300 ">
                <h2 className="text-lg font-semibold mt-4">{service.title}</h2>
                <p className="text-sm font-semibold mt-2">{service.description}</p>
            </a>
         </div>
    )

}

export default ServiceCard