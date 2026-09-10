
import Footer from "../ui/footer"
import LoginForm from "../ui/loginForm"
import Nav from "../ui/homeUi/nav"
import { Suspense } from "react"
export default function LoginPage(){
    return (
    <>
<main>
    <Nav/>
    <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-3xl font-bold mt-15">Log in</h1>
        
        <Suspense >
<LoginForm/>
</Suspense>
    </div>
    </main>
   <Footer></Footer>
    </>

)}