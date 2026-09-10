import "./globals.css";
import { roboto} from "./ui/fonts"

export default function Layout({children}:LayoutProps<"/">){
return (

<html>
  <body className={`${roboto.className} antialiased` }>{children}</body>
</html>
)
}