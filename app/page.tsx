import Link from "next/link"
import Image from "next/image"
import { lavish } from "./ui/fonts"
export default function Home(){
return (
<main> 

<div className="grid grid-rows-2">
  <div className="grid grid-cols-3 items-center justify-items-center bg-linear-to-r from-purple-600 via-pink-200 to-purple-600 sticky">
    <Image alt="website logo" width="170" height="75" src="/purple_pink_dashboard_logo.svg"></Image>

    <h1 className={`text-4xl ${lavish.className}`}>FlatBoard</h1>
    <div className="w-20"></div>
    </div>
  
  <div className="flex flex-col gap-14 items-center text-3xl">
<h2 className="text-grey-400">Summerising your financial life,goals,status into real time metrics and analysis</h2>
<p>Welcome to FlatBoard , to  your new finance metrics maker!</p>
<Link href="/login" className="">
<span className="w-full h-[10%] bg-linear-to-r from-purple-600 via-pink-200 to-purple-600 rounded-2xl px-10 hover:shadow-2xl " >Login</span></Link>
<Link href="/signup" className="">
<span className="w-full h-[10%] bg-linear-to-r from-purple-600 via-pink-200 to-purple-600 rounded-2xl px-10 hover:shadow-2xl " >Signup</span></Link>
</div></div>
</main>
 
)
}