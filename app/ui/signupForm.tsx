'use client'
import { useActionState } from "react"
import { addNewUser } from "../lib/action"
import Spinner from "./spinner"
import clsx from "clsx"
export default function SignupForm(){
const [prevState,formAction,isPending]=useActionState(addNewUser,undefined)

    return (<form action={formAction} className={clsx("static border rounded-xl  flex flex-col items-center justify-center p-10",{
        'border-2 border-gray-400':isPending===true,     
           'border-black border-2':isPending===false
    })}>

      {isPending&&<div className="absolute font-bold text-2xl flex flex-row justify-center items-center gap-5"> 
        
       <Spinner/> Action in Progress....</div>}  
        <div className={clsx("grid grid-cols-2 gap-10 items-center justify-center",{
            'blur-xs':isPending===true,
            '':isPending===false
        })}>
        <div className="flex flex-row items-center justify-center m-3">
        <label htmlFor="email" className="font-bold">
Email :
    </label>
<input id ="email" type="email" required minLength={8} name="email" className="p-3 border rounded-xl" aria-label="email input" placeholder="dasher@gmail.com"></input>
</div>
<div className="flex flex-row items-center justify-center m-3">
        <label htmlFor="password" className="font-bold">
Password :
    </label>
<input id ="password" type="password" required minLength={6} name="password" className="p-3 border rounded-xl"></input>

</div>
<div className="flex flex-row items-center justify-center m-3">
 <label htmlFor="first-name" className="font-bold">
First Name :
    </label>
          <input id="first-name" type="text" required minLength={2} name="firstName" className="p-3 border rounded-xl"></input>

</div>

<div className="flex flex-row items-center justify-center m-3">
 <label htmlFor="last-name"  className="font-bold">
Last Name :
    </label>
          <input id="last-name" type="text" required name="lastName"minLength={2}  className="p-3 border rounded-xl"></input>

</div>
</div>
<button type="submit" className="font-bold self-center m-5 hover:text-white hover:bg-black border rounded-xl p-3" disabled={isPending}>SUBMIT</button>
    </form>)
}