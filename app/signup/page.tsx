
import Footer from "../ui/footer"
import Nav from "../ui/homeUi/nav"
import SignupForm from "../ui/signupForm"
export default function Page(){
    return (<><main>
<div>
    <Nav/>
    
<div className="flex flex-col gap-10 items-center justify-center">
<h2 className="text-2xl font-bold w-full text-center bg-linear-to-t from-purple-700 via-pink-300 to-purple-700">Sign Up for a free trial</h2>
<SignupForm></SignupForm>
</div>
        </div></main>
<Footer/>
        </>
    )
}