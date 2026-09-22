
'use client'
import { useActionState } from "react"
import {authenticate} from "../lib/action"
import clsx from "clsx"
export default function LoginForm() {
const [errorMessage,formAction,isPending]=useActionState(authenticate,undefined)

    return (
    <form action={formAction} className={clsx("flex flex-col gap-5 justify-center items-center border rounded-xl shadow-xl p-3 m-10",
       { 'border-gray-400 border-2':isPending===true,
        'border-black border-2':isPending===false
       }

    )}>
   
        
        <div className="grid grid-cols-2  justify-center items-center m-6">
        <label htmlFor="email" className="font-bold p-5" >Email :</label>
        <input type="email" id="email"  minLength={10} name="email" maxLength={25} aria-label="input element for email" className="border rounded-xl p-3 m-2 font-normal"></input>
</div>
<div className="grid grid-cols-2  justify-center items-center m-6">
        <label htmlFor="pass" className="font-bold p-5" >Password : </label>
        <input type="password" name="password" minLength={6} maxLength={22} id="pass" aria-label="input element for password" className="  font-normal border rounded-xl p-3 m-2"></input>
  
  </div>
        <button type="submit" className="m-6 border hover:bg-black hover:text-white rounded-xl p-6 font-bold ">Submit</button>
   
 </form>
    )

}