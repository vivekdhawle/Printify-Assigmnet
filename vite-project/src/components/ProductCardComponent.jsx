import { useState } from "react"

function ProductCard({img1Path,img2Path,description,by,prize,printifyPremium=" ",size}){

    const [display,setDisplay]=useState(true)
    return <>
        <div className="flex relative flex-col overflow-hidden p-3 flex-nowrap  flex-shrink-0 basis-1/4    " onMouseEnter={()=>setDisplay(false)}
        style={{minWidth:'300px'}} onMouseLeave={()=>setDisplay(true)} >
            <div className="absolute flex-shrink-0 z-10 left-5 top-5 border-2 rounded-xl text-lg border-yellow-600 bg-yellow-100 p-1">Bestseller</div>
            <button className="absolute z-10 right-5 top-5 border-2 rounded-full text-2xl p-1">❤️</button>
            <div className="h-full w-full overflow-hidden">
            <img
                    src={display ? img1Path : img2Path}
                    alt={description || "Product image"}
                    className={`w-full h-auto transition-transform max-h-64 duration-100 ease-in-out transform ${display?"scale-100":"scale-110"}`}
                    
                />
            </div>
            <div className="relative flex-nowrap flex flex-shrink-0 flex-col gap-2 ">
            <div className="  h-full w-full absolute flex-nowrap hover:bg-gray-500 opacity-5 "></div>
                <span className="gap-0 mt-2 px-5">
                    <h2 className="text-xl text-black">{description}</h2>
                    <h2 className="text-base text-gray-500">{by}</h2>
                </span>
                <span className="gap-0 px-5 flex-nowrap">
                    <h2 className="text-base text-black">{prize}</h2>
                    <h2 className=" text-base text-green-500">{printifyPremium}</h2>
                </span >
                <h2 className="text-base text-gray-500 px-5">{size}</h2>
            </div>
        </div>
    </>
    
}
export default ProductCard