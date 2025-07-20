import { useState } from "react"
import img1 from "../assets/img.svg"
import { NavLink } from "react-router-dom"
function CreateProduct({additionalProperties}){
    const [display,setDisplay]=useState(true)
    return <>
       <div className={`flex h-full flex-shrink justify-around flex-grow basis-0 gap-10 box-border ${additionalProperties}` } style={{minWidth:"280px"}} >
        
       {display?( <div className="w-96 mid:block hidden">
                <h1 className="text-3xl text-black font-bold">Create your first store and </h1><h1 className="text-3xl text-green-500 font-bold">get a free gift!</h1>
                <img src={img1} alt="" />
            </div>):""}
                
            <div className="flex flex-col    h-full  text-md gap-3 p-3" style={{minWidth:'270px'}}>

                 <div className="border-b-2 w-full p-3 h-full flex justify-between m-2">
                    <span className="self-start text-2xl font-bold ">Store setup checklist</span>
                    <button onClick={()=>setDisplay((prev)=> !prev)}>{display?"∨":">"}</button>
                    
                 </div>

                {display?(<div className="flex  flex-col w-full">
                <div className="text-gray-400 text-left w-full flex justify-between my-3">
                    <span className="">Signup for Printify</span>
                    <span className="text-green-400">✓</span>
                </div>

                <div className="flex justify-between w-full font-bold" >
                    <button className="flex justify-between w-full font-semibold hover:bg-slate-200 rounded-md " >
                        <span className=" w-full text-left">Create  your first product</span>
                        <span className="flex w-full gap-3">
                            <input type="range" value="0" className="w-full "/>
                            <span>{">"}</span>
                        </span>
                    </button>
                </div>

                <div className="flex justify-between w-full font-semibold my-3">
                    <button className="flex justify-between w-full font-semibold hover:bg-slate-200 rounded-md">
                    <span className=" w-full text-left">Connect  to Etsy,Shopify,etc</span>
                    <span className="flex w-full gap-3">
                        <input type="range" value="0" className="w-full " />
                        <span>{">"}</span>
                    </span>
                    </button>
                    
                </div>

                <div className="flex justify-end w-full items-center self-end  md:flex-row flex-col mt-5 font-semibold">
                    <span className="text-sm order-2 md:order-1 ">Complete the steps above and earn a $5.00 discount on your next order!</span>
                    <NavLink to={"/progress"} className="bg-green-500 order-1 md:order-2  flex-shrink-0 max-md:w-full  text-white px-3 py-1 flex justify-center items-center"><span className="text-2xl">+</span> Create first product</NavLink>
                </div>
                </div>):""}
            </div>
       </div>
    </>
}
export default CreateProduct