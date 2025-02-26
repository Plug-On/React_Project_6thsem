import React from "react";

function About(){
    return(
       
            <div className="flex py-10 px-24 ">
                   <div className=" flex-initial ">
                    <img className="w-60 h-60 rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1683207906680-ee74d1425423?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                <div className="flex-1 pl-10">
                <h1 className="text-2xl font-bold">About Company</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, eveniet illo? Maxime assumenda quidem minus laborum recusandae perspiciatis delectus laboriosam, nam, error debitis molestias? Pariatur.</p>
                    <a href="#" className="mt-2 px-2 py-2 inline-block bg-blue-900 text-white font-bold rounded-lg hover:bg-black "> Know More</a>
                </div>
            </div>
        
    );
}

export default About