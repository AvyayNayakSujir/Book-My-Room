

import Link from 'next/link';
import { useState } from 'react';


export default function Header(props: { type: string; }) {


    const [destination,setDestination] = useState("")
 


    return (
        <div>
            <div className="header bg-[#003580] text-white flex justify-center relative">
                <div className="headerContainer w-full max-w-[1024px] mt-[20px] mb-[100px]">
                    <div className="headerList flex items-center gap-[20px]">
                        <div className="headerListItems  cursor-pointer p-[10px] hover:bg-white hover:p-[10px] hover:rounded-lg hover:text-blue-600">
                            <span>Stays</span>
                        </div>
                        <div className="headerListItems  cursor-pointer p-[10px] hover:bg-white hover:p-[10px] hover:rounded-lg hover:text-blue-600">
                            <span>Flights </span>
                        </div>
                        <div className="headerListItems  cursor-pointer p-[10px] hover:bg-white hover:p-[10px] hover:rounded-lg hover:text-blue-600">
                            <span>Car Rentals</span>
                        </div>
                        <div className="headerListItems  cursor-pointer p-[10px] hover:bg-white hover:p-[10px] hover:rounded-lg hover:text-blue-600">
                            <span>Attractions</span>
                        </div>
                        <div className="headerListItems  cursor-pointer p-[10px] hover:bg-white hover:p-[10px] hover:rounded-lg hover:text-blue-600">
                            <span>Taxi</span>
                        </div>
                    </div>
                    {props.type!=="list" &&
                        <><h1 className="headertitle p-[2px]">A lifetime of discounts ? Its Genius</h1>
                    <p className="headerDesc p-[2px]">
                        Get rewarded for your travels - unlock instant savings of 10% or more with a free booking account
                    </p>
                    <button className="headerButton bg-blue-600 text-white font-medium cursor-pointer border-none p-[10px] rounded-lg"> Sign In </button>
                    <div className="headerSearch h-2 bg-white border-[3px] border-[#febb02]  flex items-center justify-evenly px-0 py-10 bottom-[-25px] rounded-lg absolute text-gray-500  w-full max-w-[1024px]">
                        <div className="headerSearchItem flex items-center gap-[10px]">
                            <input type="text" placeholder="Country/City/Hotel" className="header SearchInput border-none outline-none" onChange={e=>setDestination(e.target.value)} />
                        </div>
                        
                       
                        <div className="headerSearchItem flex items-center gap-[10px]">
                            <Link href={`/hotels`}>
                            <button className="headerButton bg-blue-600 text-white font-medium cursor-pointer border-none p-[10px] rounded-lg" > Search</button></Link>
                        </div>
                      
                    </div></>}
                </div>
            </div>
        </div>
    )
}
