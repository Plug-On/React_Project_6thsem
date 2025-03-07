import ProductContainer from "./ProductContainer"


function EventCard({ event })
{
    return (
        <div>
            <a href="" className="bg-white p-4 rounded-lg shadow-lg block hover:shadow-xl hover:-translate-y-1 transition duration:300">
            <img src={event.image} alt="product" className="h-40 w-full object-cover" />
            <h2 className="text-lg font-semibold mt-4">{event.productname}</h2>
            <p className="text-sm font-semibold mt-2"> {event.date} </p>
            <p className="text-sm font-semibold mt-2"> {event.description} </p>
            </a>
        </div>
    )
}

export default EventCard