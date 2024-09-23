
import { NavLink } from "react-router-dom"
import img from "../assets/niche.webp"
function NiecheComponent() {
  return (
    <>
        <div className='flex  flex-shrink-0   lg:flex-row flex-col group ' style={{minWidth:"280px"}}>
            <div className='flex flex-col gap-5 p-5 lg:order-1 order-2'>
                <h1 className='font-bold text-3xl'>Double your chances of making that first sale!</h1>
                <h2>Stand out from competition and build a customer base with the help of our AI powered Niche Generator in less than a minute</h2>
                <span className='flex gap-10'>
                    <NavLink to={"/progress"} className='border-2 p-2 px-6 transition-all rounded-lg duration-100 ease-in-out group-hover:bg-green-500'>Try it now</NavLink>
                    <NavLink to={"/progress"} className='border-2 p-2 rounded-lg hover:bg-gray-200 px-6'>What is a nieche</NavLink>
                </span>
            </div>
            <div className='relative top-8 lg:order2 morder-1 self-center flex-shrink flex-grow basis-0 lg:mb-0 mb-5' style={{minWidth:"280px",maxwidth: '469px'}}>
                <img src={img} alt="" />
            </div>
        </div>
    </>
  )
}

export default NiecheComponent
