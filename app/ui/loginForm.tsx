
'use client'
import { useActionState } from "react"
import authenticate from "../lib/action"
export default function LoginForm() {
const [errorMessage,formAction,isPending]=useActionState(authenticate,undefined)
    return (
    <form action={formAction} className="flex flex-col gap-5 justify-center items-center border rounded-xl shadow-xl p-3 m-10">
        
        <div className="grid grid-cols-2  justify-center items-center">
        <label htmlFor="email" className="font-bold" >Email :</label>
        <input type="email" id="email"  minLength={10} maxLength={25} aria-label="input element for email" className="border rounded-xl p-3 m-2 font-normal"></input>
</div>
<div className="grid grid-cols-2  justify-center items-center ">
        <label htmlFor="pass" className="font-bold" >Password : 
        <input type="password" minLength={12} maxLength={22} id="pass" aria-label="input element for password" className="  font-normal border rounded-xl p-3 m-2"></input>
  </label>
  </div>
        <button type="submit" className="border hover:bg-black hover:text-white rounded-xl p-6 font-bold ">Submit</button>
    </form>
    )

}