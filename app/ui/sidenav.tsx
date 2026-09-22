    'use client'
import { lavish } from "./fonts";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { XMarkIcon,Bars3Icon,ChartBarIcon,DocumentChartBarIcon,UserGroupIcon,PowerIcon,DocumentCurrencyDollarIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
export default function SideNav(){
    const [drop,setDrop]=useState(false)
    const [customerDropdown,setCustomerDropdown]=useState(false)
const [shopDropdown,setShopDropdown]=useState(false)
const [overviewDropdown,setODd]=useState(false)
    return (

        <div className="flex flex-col items-center justify-center h-full w-[17%]  border font-bold bg-linear-to-t from-purple-700 via-pink-300 to-purple-700">

         

         <div  className="flex flex-col gap-[10%] static p-10">

            <button onClick={()=>{

setDrop(!drop)

}} className="md:hidden sm:inline p-2 relative"  >{drop?(<XMarkIcon className="h-6 w-6"/>
):(<Bars3Icon className="h-6 w-6"/>
)}</button>
<div className={clsx("flex-col  md:hidden justify-center items-center gap-[10%]",
    {'hidden':drop===false,
        'flex':drop===true
    }
)}>
    <nav className="flex flex-col justify-center items-center gap-2 p-3 m-3">
        <Link href="/dashboard" >Dashboard</Link>
        <Link href="/transactions" >Transactions</Link>
     
    </nav>
   <nav><Link href="/login" >LogOut</Link></nav>


</div>
<div className="hidden md:flex flex-col w-full h-full justify-center items-center gap-[7vh] ">
   
<Link href='/' className={`text-5xl ${lavish.className} ml-2`}>NextBoard</Link>
<h2  className=" flex flex-row gap-1 p-2 rounded-xl   w-full p-2 items-center justify-center text-2xl ml-2">
<ChartBarIcon  className="h-10 w-10"></ChartBarIcon>
</h2> <hr className="w-full border-t border-white/20 my-2" />
<button onClick={()=>{
    setCustomerDropdown(!customerDropdown)
}} className="hover:bg-black hover:text-white flex flex-row gap-1 p-2 rounded-xl text-xl ml-2"><UserGroupIcon className="h-6 w-6"></UserGroupIcon> Customers </button>{customerDropdown&&(
    <div className="flex flex-col p-2 justify-center items-center gap-2">
        <Link  href='/customers'  >Customers</Link>
          
    </div>
)}
   <hr className="w-full border-t border-white/20 my-2" />
<button onClick={()=>{
    setShopDropdown(!shopDropdown)
}}  className="hover:bg-black hover:text-white flex flex-row gap-1 p-2 rounded-xl text-xl ml-2"> <DocumentCurrencyDollarIcon className="h-6 w-6"></DocumentCurrencyDollarIcon> Sales </button>{shopDropdown&&(<div className="flex flex-col p-2 justify-center items-center gap-2">
<Link  href='/transactions'  >Transactions</Link>
<Link href='/businesses' >Businesses</Link>
</div>)}

 <hr className="w-full border-t border-white/20 my-2" />

<button onClick={()=>{
    setODd(!overviewDropdown)
}} className="hover:bg-black hover:text-white flex flex-row gap-1 p-2 rounded-xl text-xl ml-2"><DocumentChartBarIcon className="h-6 w-6"></DocumentChartBarIcon>Performance</button>{overviewDropdown?(<div className="flex flex-col p-2 justify-center items-center gap-2 ml-2">
<Link  href='/porfolio'  >Porfolio </Link>
   <Link href="/alltimehigh" >ATH</Link>
<Link  href='/targets'  >Targets </Link></div>
):""}
 <hr className="w-full border-t border-white/20 my-2" />



   <Link href="/login" className="hover:bg-black hover:text-white flex flex-row gap-2 p-2 rounded-xl ml-2"><PowerIcon className="h-6 w-6"></PowerIcon>LogOut</Link>
  

</div>

         </div>

           
    
        </div>
    
)

}

