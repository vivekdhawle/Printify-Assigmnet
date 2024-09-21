import { useState } from "react"
import img1 from "../assets/img.svg"

function CreateProduct({additionalProperties}){
    const [display,setDisplay]=useState(true)
    return <>
       <div className={`flex h-full gap-10 ${additionalProperties}`}>
        
       {display?( <div className="w-96">
                <h1 className="text-3xl text-black font-bold">Create your first store and </h1><h1 className="text-3xl text-green-500 font-bold">get a free gift!</h1>
                <img src={img1} alt="" />
            </div>):""}
                
            <div className="flex flex-col   h-full w-full text-md gap-3">

                 <div className="border-b-2 w-full p-3 h-full flex justify-between ">
                    <span className="self-start text-2xl font-bold ">Store setup checklist</span>
                    <button onClick={()=>setDisplay((prev)=> !prev)}>{display?"∨":">"}</button>
                    
                 </div>

                {display?(<div>
                <div className="text-gray-400 text-left w-full flex justify-between ">
                    <span className="ml-5">Signup for Printify</span>
                    <span className="text-green-400">✓</span>
                    </div>

                <div className="flex justify-between w-full font-bold" >
                    <button className="flex justify-between w-full font-semibold hover:bg-slate-200 rounded-md p-2" >
                        <span className="ml-3">Create  your first product</span>
                        <span>
                            <input type="range" value="0" className="w-56 mx-5"/>
                            <span>{">"}</span>
                        </span>
                    </button>
                </div>

                <div className="flex justify-between w-full font-semibold ">
                    <button className="flex justify-between w-full font-semibold hover:bg-slate-200 rounded-md p-2">
                    <span className="ml-3">Connect  to Etsy,Shopify,etc</span>
                    <span >
                        <input type="range" value="0" className="w-56 mx-5" />
                        <span>{">"}</span>
                    </span>
                    </button>
                    
                </div>

                <div className="flex justify-end w-full items-center self-end  mt-10 font-semibold">
                    <span className="text-sm ">Complete the steps above and earn a $5.00 discount on your next order!</span>
                    <button className="bg-green-500 text-white px-3 py-1 flex justify-center items-center"><span className="text-2xl">+</span> Create first product</button>
                </div>
                </div>):""}
            </div>
       </div>
    </>
}
export default CreateProduct