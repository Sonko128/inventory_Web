import { useState } from "react";
import Layout from "../../Layout";

function Supplier(){
    return(
        <Layout children={<Supplier_details/>}/>
    )
}
export default Supplier;

function Supplier_details(){
  const [supplier_name, setSupplier_name]=useState('');
  const [business_name, setBusiness_name]=useState('');
  const [email, setEmail]=useState('');
  const [supplier_contact, setSupplier_contact]=useState('');
  const [product_name, setProduct_name]=useState('');
  const [category_name, setCategory_name]=useState('');
  


  const handlesubmit=(e: React.FormEvent<Element>)=>{
    e.preventDefault()
    
    fetch('http://127.0.0.1:8000/api/supplier',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'supplier_name':supplier_name,
        'business_name':business_name,
        'email':email,
        'supplier_contact':supplier_contact,
        'product_name':product_name,
        'category_name':category_name,
      })
    })
    .then(response => {response.json();
      if(response.status === 200) {
        setSupplier_name(''); 
        setBusiness_name('');                 
        setEmail('');                 
        setSupplier_contact('');                 
        setProduct_name('');                 
        setCategory_name('');                 
      }else if(response.status === 422){
          alert("Supplier Not Regist");
      }
  })//.then(data => console.log(data.message:?string))
  .catch(e => console.error(e));
  }
    return(
    <div>
        <div className="p-4 grid md:lg:grid-cols-1 gap-2">
          <form className="col-span-2" onSubmit={handlesubmit}>
          <div className="bg-purple-300 md:flex shadow-md w-full">
          <ul className="flex items-center ml-5">
                <li className="">
                    <button type="submit" className="bg-blue-500 text-white px-2 rounded my-4">
                        ADD
                    </button>
                </li>
                <li className="">
                  <a className="inline-block py-1 px-3 text-gray-800" href="#">DELETE</a>
                </li>
                <li className="">
                  <a className="inline-block py-1 px-3 text-gray-800" href="#">UPDATE</a>
                </li>
          </ul>
        </div>
            <div className="ring-slate-300 ring-1 rounded-md pb-12 bg-blue-40 w-full p-1">
          <div className="mt-1 col-span-2 grid grid-cols-1 gap-x-3 sm:grid-cols-5">
            <div className="sm:col-span-2">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Supplier's Name
                </label>
                <div className="mt-1">
                        <input
                        type="text"
                        name={supplier_name}
                        onChange={(e)=>setSupplier_name(e.target.value)}
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                </div>
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Supplier's Contact
                </label>
              <div className="mt-1">
                <input
                  type="text"
                  name={business_name}
                  onChange={(e)=>setBusiness_name(e.target.value)}
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Business Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Item Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name={supplier_contact}
                  onChange={(e)=>setSupplier_contact(e.target.value)}
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name={product_name}
                  onChange={(e)=>setProduct_name(e.target.value)}
                  id="first-name"
                  autoComplete="given-name"
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
                  name={category_name}
                  onChange={(e)=>setCategory_name(e.target.value)}
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        
          </form>
        </div>
        
        <div>
             <input className="border-t-2 border-t-slate-400 mb-4 rounded-md ring-1 mx-4 p-1" type="text"  placeholder="SEARCH SUPPLIER"/>
        </div>
        <div className="border-t-2 border-t-slate-400 mb-4 rounded-md ring-1 mx-4 p-4">
              Supplier's list
        </div>
      </div>
        
    )
}