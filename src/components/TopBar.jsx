import {  RiFacebookBoxFill, RiInstagramFill, RiPhoneFill, RiPinterestFill, RiTwitterFill, RiUserLocationFill } from "react-icons/ri"


const TopBar = () => {
  return (
      <div className="bg-blue-600 flex justify-between items-center px-15 py-2 ">
               <div className="flex gap-3">
                <RiFacebookBoxFill size={20} className="text-white"/>
                <RiInstagramFill size={20} className="text-white"/>
                <RiPinterestFill size={20} className="text-white"/>
                <RiTwitterFill size={20} className="text-white" />
               </div >
               <div className="flex gap-3" >
                  <div className="flex gap-1 items-center">
                  <RiPhoneFill className="text-white"/>
                  <p className="text-white font-semibold">056-123456</p>
                  </div>
                  <div className="flex gap-1 items-center">
                  <RiUserLocationFill className="text-white"/>
                  <p className="text-white font-semibold">Bharatpur</p>
                  </div>
               </div>
                    
            </div>
  )
}

export default TopBar