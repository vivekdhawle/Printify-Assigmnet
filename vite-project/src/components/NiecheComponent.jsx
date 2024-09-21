
import img from "../assets/niche.webp"
function NiecheComponent() {
  return (
    <>
        <div className='flex w-3/4 flex-shrink-0  border-2 group '>
            <div className='flex flex-col gap-5 p-5'>
                <h1 className='font-bold text-3xl'>Double your chances of making that first sale!</h1>
                <h2>Stand out from competition and build a customer base with the help of our AI powered Niche Generator in less than a minute</h2>
                <span className='flex gap-10'>
                    <button className='border-2 p-2 px-6 transition-all rounded-lg duration-100 ease-in-out group-hover:bg-green-500'>Try it now</button>
                    <button className='border-2 p-2 rounded-lg hover:bg-gray-200 px-6'>What is a nieche</button>
                </span>
            </div>
            <div className='relative top-8 ' style={{width: '469px',maxwidth: '469px'}}>
                <img src={img} alt="" />
            </div>
        </div>
    </>
  )
}

export default NiecheComponent
