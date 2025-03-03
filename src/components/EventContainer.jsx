
import EventCard from "./EventCard"


function EventContainer (){
      const events =[
        {
        id:1,
        productname:"Event 1",
        description:"bhaike khate me likh liyo",
        date:"18-11-2081",
        image:"https://picsum.photos/200"
      },
      {
        id:2,
        productname:"Event 2",
        description:"hehehehe",
        date:"18-11-2081",
        image:"https://picsum.photos/201"
      },
      {
        id:3,
        productname:"Event 3",
        description:"bhaike khate me likh liyo",
        date:"18-11-2081",
        image:"https://picsum.photos/202"
      },
      {
        id:4,
        productname:"Event 4",
        description:"bhaike khate me likh liyo",
        date:"18-11-2081",
        image:"https://picsum.photos/203"
      }]
    return (
        <>
            <div>
            <h1 className=" text-center text-2xl font-bold mt-4">Our Event</h1>
                <div className="grid grid-cols-4 gap-4 px-20 py-5">
                {
                    events.map((event) =>(
                        <EventCard key={event.id} event={event}/>
                ))}

                </div>
                
            </div>
        </>
    )

}

export default EventContainer