import Nav from "./ui/homeUi/nav"
import Footer from "./ui/footer"
export default function Home(){
return (<>
<main > 

<div className="flex flex-col justify-center items-center gap-10  w-full md:h-screen">
  <div className="text-white w-full">
  <Nav/>
    
  <h2 className=" text-3xl bg-black w-full text-center p-2 font-bold">Summerising your financial life,goals,status into real time metrics and analysis</h2>

</div>
<div className="  w-full h-full flex flex-col items-center justify-center gap-10">
<h2 className=" text-2xl text-center bg-linear-to-t from-purple-700 to-pink-300 w-full font-bold" > NextBoard , providing you with your finance metrics!</h2>
<div  className="  w-full h-full flex flex-col items-center justify-center gap-15">
<h3 className="text-3xl font-bold">Our Analysis</h3>
{
// <Image alt="" src=""></Image> //
}
<h3 className="text-3xl font-bold">Target Check</h3>
{
// <Image alt="" src=""></Image> //
}

<h3 className="text-3xl font-bold">Target Check</h3>
{
// <Image alt="" src=""></Image> //
}
</div>
</div>


  </div>
</main>
<Footer></Footer>
</>
 
)
}