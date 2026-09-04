import Link from "next/link";
import Image from "next/image";

export default function SideNav(){
    return (
        <div className="flex flex-col items-between justify-center h-full w-[15%]">
         <Link href="" className="grid grid-cols-2">
         <Image width="" height="" alt="" src=""></Image>
         <span>Invoices
            </span></Link>
            <Link href="" className="grid grid-cols-2">
         <Image width="" height="" alt="" src=""></Image>
         <span>Customers            
            </span></Link>
            <Link href="" className="grid grid-cols-2">
         <Image width="" height="" alt="" src=""></Image>
         <span>Goals
            </span></Link>
            <Link href="" className="grid grid-cols-2">
         <Image width="" height="" alt="" src=""></Image>
         <span>Investments
            </span></Link>
            <Link href="" className="grid grid-cols-2">
         <Image width="" height="" alt="" src=""></Image>
         <span>Business
            </span></Link>
        </div>
    )
}
