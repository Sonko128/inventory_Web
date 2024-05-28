import { Link } from "react-router-dom";
import us from './images/sas1.jpeg'
function Navbar(){
    let links =[
        {name:"Home",link:"/"},
        {name:"Pos",link:"/pos"},
        {name:"Stock",link:"/stock"},
        {name:"Supplier",link:"/supplier"},
        {name:"Summary",link:"/summary"},
        {name:"User Management",link:"/user"},
        {name:"Profile",link:"/profile"},
        {name:"Login",link:"/login"}
    ]
    return(
        <div className="md:flex shadow-md w-full top-0 left-0 bg-purple-400 text-yellow-400 h-[10vh]">
            <div className="md:flex items-center justify-between w-full py-4 md:px-10 px-7 text-yellow-300">
                <div className="font-bold text-2x1 cursor-pointer flex items-center">
                    <span className='text-3x1 text-indigo-600 mr-1 pt-2'>
                        <div className="rad">
                            <img className="mx-auto h-14 w-auto rounded-full item-center" src={us} alt="" />
                        </div>
                    </span>
                    Inventory Management System
                </div>
                <ul className="md:flex md:items-center">
                    {
                        links.map((link)=>(
                           <li key={link.name} className="md:ml-8 text-xl">
                                <Link to={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</Link>
                           </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Navbar;