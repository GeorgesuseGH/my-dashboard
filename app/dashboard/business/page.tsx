
import { BusinessChart } from "@/app/ui/business"
import { fetchAllBusinessChartData, fetchEveryBusiness } from "@/app/lib/action"
import { Business } from "@/app/lib/definitions"


const dataArr = [
  { month: 'Jan', total: 400 },
  { month: 'Feb', total: 300 },
  { month: 'Mar', total: 600 },
  { month: 'Apr', total: 200 },
  { month: 'May', total: 500 },
  { month: 'Jun', total: 350 },
]
export default async function Page(){

    const fetchBusiness=await fetchEveryBusiness()
    console.log(fetchBusiness[0].lastrevenue)
    return (< div className="flex-1 min-w-0"><h2>Your Business</h2>
  
    <BusinessChart data={dataArr}></BusinessChart>
    
    </div>)
}/*fetchBusiness.map((b:Business)=>{
        return (
            <div className="rounded-xl flex flex-col gap-2 justify-center items-center shadow-xl">
<div className="rounded-2xl shadow-xl p-4 m-4 flex flex-col">
<h3 className="text-xl font-bold">{b.name}</h3>
<h3>Revenue of last month : {b.lastRevenue}</h3>
<p>Overview : {b.overview}</p>
    </div>
    <BusinessChart {fetchData.b.id}></BusinessChart>

            </div>
        )
    })*/