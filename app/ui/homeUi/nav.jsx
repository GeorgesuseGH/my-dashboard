
import Link from "next/link"
import Image from "next/image"
import { lavish } from "../fonts"
import Dropdown from "../dropdown"


export default function Nav(){
    return (<div className="grid grid-cols-3 gap-3 items-center justify-between bg-black sticky max-h-40 w-full py-10 text-white font-bold  ">
    <div className="p-4 flex flex-row  items-center justify-center ">
    

    <h1 className={`text-4xl ${lavish.className}`}><Link href="/">NextBoard</Link></h1>
    </div>
    
    <div className="flex flex-row gap-10 items-center justify-center text-xl ">

<Link href="/faq" className="">
<span className=" " >FAQ</span></Link>
<Link href="/about" className="">
<span className=" " >About</span></Link>

<Link href="/onboarding" className="">
<span className=" " >OnBoarding</span></Link>

<Dropdown></Dropdown>
    </div>


    
     <div className="flex flex-row gap-10 items-center justify-center text-xl ">

<Link href="/login" className="">
<span className=" bg-white rounded-xl border px-2 text-black hover:bg-black hover:text-white" >Login</span></Link>
<Link href="/signup" className="">
<span className="  bg-linear-to-t from-purple-700 to-pink-400 rounded-xl  border px-2 text-black hover:text-purple-700 hover:bg-white">Free trial</span></Link>


     </div>



    </div>)
}