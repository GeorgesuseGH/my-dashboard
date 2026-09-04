
import SideNav from "../ui/sidenav"
export default function Layout({children}:LayoutProps<"/">){
return (<div className="flex flex-column">
    <div><SideNav></SideNav></div>

<div>
{children}
</div>

</div>)
}