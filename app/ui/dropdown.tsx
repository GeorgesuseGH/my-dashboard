'use client'

import Link from "next/link";
import { useState } from "react"


export default function Dropdown(){
    const [dropped,setDropped]=useState(false);
    return (
      <div className=" flex flex-col items-center justify-center relative"  onMouseEnter={() => setDropped(true)}
      onMouseLeave={() => setDropped(false)}>
      <button  
      onClick={()=>{
        setDropped(!dropped)
      }}>Marketing</button>
      {dropped===true && <div className="flex flex-col justify-center items-center text-[0.9rem] absolute top-7 ">

        <Link href="\company" className="bg-white w-20 flex justify-center border hover:bg-black hover:text-white text-black"><span>Company</span></Link>
                <Link href="\example" className="bg-white w-20 flex justify-center border hover:bg-black hover:text-white text-black"><span> Example </span></Link>

      </div>

      }
      </div>
    )
}