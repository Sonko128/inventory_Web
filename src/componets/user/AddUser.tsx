import Layout from "../../Layout";

function AddUser(){
    return(
        <Layout children={<Add/>}/>
    )

    function Add(){
        return(
          <div>
                <div className="bg-purple-300 md:flex shadow-md w-full">
                  <ul className="flex items-center ml-5">
                        <li className="">
                          <a className="inline-block py-1 px-3 text-gray-800" href="#">SAVE</a>
                        </li>
                        <li className="">
                          <a className="inline-block py-1 px-3 text-gray-800" href="#">DELETE</a>
                        </li>
                        <li className="">
                          <a className="inline-block py-1 px-3 text-gray-800" href="#">UPDATE</a>
                        </li>
                  </ul>
                </div>
                <div className="p-4 grid md:lg:grid-cols-1 gap-2">
                <form className="col-span-2">
         <div className="ring-slate-300 ring-1 rounded-md pb-12 bg-blue-40 w-full p-1">
           <div className="mt-1 col-span-2 grid grid-cols-1 gap-x-3 sm:grid-cols-5">

             <div className="sm:col-span-2">
                 <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Users Name
                 </label>
               <div className="mt-1">
                 <input
                   type="text"
                   name="last-name"
                   id="last-name"
                   autoComplete="family-name"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div className="sm:col-span-2">
               <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
               Password
               </label>
               <div className="mt-1">
                 <input
                   type="text"
                   name="first-name"
                   id="first-name"
                   autoComplete="given-name"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
    
             <div className="sm:col-span-2">
               <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                 Location
               </label>
               <div className="mt-1">
                 <input
                   type="text"
                   name="last-name"
                   id="last-name"
                   autoComplete="family-name"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
             <div className="sm:col-span-2">
               <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                 Category
               </label>
               <div className="mt-1">
                 <input
                   type="text"
                   name="last-name"
                   id="last-name"
                   autoComplete="family-name"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
             <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Role
              </label>
              <div className="mt-1">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Super Admin</option>
                  <option>Admin</option>
                  <option>User</option>
                </select>
              </div>
            </div>
           </div>
         </div>
         
              </form>
                </div>
                <div className="border-t-2 border-t-slate-400 mb-4 rounded-md ring-1 mx-4 p-4">
              <h1>
                All Users
              </h1>
          </div>
          </div>
        )
    }
}
export default AddUser;