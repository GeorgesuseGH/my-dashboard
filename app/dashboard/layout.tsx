
import SideNav from "../ui/sidenav"
export default function Layout({children}:LayoutProps<"/">){
return (<div className="flex flex-row h-full w-full items-start justify-start">
    <SideNav></SideNav>

<div className="flex-1 min-w-0">
{children}
</div>

</div>)
}