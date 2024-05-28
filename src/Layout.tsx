import { ReactNode } from "react";
import Footer from "./Footer";
import Sidebar from "./Side";
function Layout({children}: {children: ReactNode}){
    return(
        <div className="md:lg:flex min-h-[100vh]">
            <Sidebar />
            <div className="min-h-full w-full">
            {children}
        <div className="w-full bg-red-200 fixed bottom-0">
            <Footer />
        </div>
            </div>
        </div>
    )
}
export default Layout;