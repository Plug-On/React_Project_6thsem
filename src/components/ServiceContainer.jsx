import React from 'react'
import ServiceCard from './ServiceCard'

function ServiceContianer(){

    const services =[
        {
            id:1,
            title:"Service 1",
            description:"This  is description"
        },
        {
            id:2,
            title:"Service 2",
            description:"This  is description"
        },
        {
            id:3,
            title:"Service 3",
            description:"This  is description"
        },
        {
            id:4,
            title:"Service 4",
            description:"This  is description"
        }

    ]
    return (
        <div>
            <h1 className=" text-center text-2xl font-bold mt-4">Our Services</h1>
            <div className=" grid grid-cols-4 gap-4 px-20 py-5">
               { 
               services.map((service)=>(
                <ServiceCard key={service.id} service={service}/>
               ))}
            </div>
        </div>
    )
}

export default ServiceContianer