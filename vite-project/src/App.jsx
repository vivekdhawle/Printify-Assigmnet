import img2 from "./assets/cimage.avif"
import img1 from "./assets/cimage1.avif"
import home from "./assets/home.png"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import './App.css'
import ProductCard from './components/ProductCardComponent'
import CreateProduct from "./components/CreateProductComponent"
import NiecheComponent from "./components/NiecheComponent"
import BlogComponent from "./components/BlogComponent"
import { NavLink } from "react-router-dom"
function App() {
  const [display,setDisplay]=useState({})
  const [displayNav,setDisplayNav]=useState()
  const tabs=[
    {imgPath:home,tabName:'Dashboard'},
    {imgPath:home,tabName:'Catalog',more:['Catalog Home','Bestsellers','Holiday picks']},
    {imgPath:home,tabName:'my Products'},
    {imgPath:home,tabName:'Orders'},
    {imgPath:home,tabName:'Wallet'},
    {imgPath:home,tabName:'Insights',more:['Payments','Taxes','Rewards']},
    {imgPath:home,tabName:'Store settings'},
    {imgPath:home,tabName:'Branding'},
    {imgPath:home,tabName:'Printify premium'},
    {imgPath:home,tabName:'Need help'},
    ]
    const toggleDropdown = (tabName) => {
      setDisplay((prevState) => ({
        ...prevState,
        [tabName]: !prevState[tabName],  // Toggle the visibility for the specific tab
      }));
    };
  
  return (
    <>
      <div className="lg:flex-row flex flex-col flex-shrink-0 whitespace-nowrap ">
        <div >
          <div className={` lg:block hidden flex-row border-2 h-full ${displayNav?"w-72 ":"w-20"}`}>
            <ul className={`flex justify-center items-start   flex-col mt-10 gap-5`}>

              <li className="flex  justify-center items-center  w-full">
                  <h1 className="font-bold text-3xl text-center mb-5 relative w-full ">{displayNav?"Printify":"P"}</h1>
                  <button className={`border-2 rounded-full p-2 absolute ${displayNav?"left-60":"left-14"} `} onClick={()=>setDisplayNav(prev=>!prev)}>{">"}</button>
              </li>

              <li className={`border-2 flex justify-center items-center   ${displayNav?"w-full p-5":"w-14 py-5"} w-full text-lg`}>
                  <img src={home} alt="" className={`${displayNav?"h-5":"h-5"}`}/>
                  {displayNav&&<h3>My new store</h3>}
              </li>
               {

                
                tabs.map((item)=>{return <li key={item.tabName} className="my-2 ml-5 flex  items-center text-lg w-full">
                  {item.more?(
                      <>
                        <img src={item.imgPath} alt="" className={`${displayNav?"h-5":"h-5"} mx-2 `}/>
                        <button className=" flex w-full justify-between pr-5" onClick={()=>toggleDropdown(item.tabName)}>
                        {displayNav&&(<><span>{item.tabName}</span>
                          <span className="mr-4 relative"> {">"} </span></>)}
                        </button>
                        {display[item.tabName]&&<ul className="flex absolute left-72 border-2 rounded-xl flex-col">
                            {item.more.map(element=><li className="m-1  px-8 text-lg h-full w-full" key={element}>{element}</li>)}
                        </ul>}
                      </>

                  ):<NavLink to={item.tabName} className={({isActive})=>`flex flex-row items-center px-2  ${isActive?"border-l-2  h-10  border-green-500 w-full font-bold text-green-500":""} `} >
                    <img src={item.imgPath} alt="" className={`${displayNav?"h-5":"h-5"} mr-5`}/>
                    {displayNav&&<h2>{item.tabName}</h2>}
                </NavLink>}
                  
                </li>})
               }
            </ul>
          </div>

          <div className="lg:hidden flex h-20 border-2 items-center justify-between px-10">
            <div className=" justify-center items-center">
              <h1 className="font-bold text-3xl text-left mb-5 relative w-full ">Printify</h1>
            </div>
            <div >
              <button>home</button>
              <button className="text-bold text-3xl mx-5">≡</button>
            </div>
            <div>
               
            </div>

          </div>
        </div>
        <div className="flex items-center flex-col h-screen ">
          <Outlet/>
        </div>
      </div>


    {/* <CreateProduct additionalProperties={"  border-2 px-10 py-5 m-10  w-3/4"}/>
    <NiecheComponent/>
     <div className="flex h-screen flex-col justify-center items-center p-10 m-10  w-3/4">
      

     <div className="flex flex-column gap-5 w-9/12  flex-nowrap  ">
        <ProductCard img1Path={img1} img2Path={img2} printifyPremium="from USD 8.69 with Printify premium" description="Unisex jersey short sleeve tee" by="by bella+canvas-3001" prize="from USD 10.87" size="9 sizes-126 colors-20prints providers"/>
      <ProductCard img1Path={img1} img2Path={img2} printifyPremium="from USD 8.69 with Printify premium" description="Unisex jersey short sleeve tee" by="by bella+canvas-3001" prize="from USD 10.87" size="9 sizes-126 colors-20prints providers"/>
      <ProductCard img1Path={img1} img2Path={img2} printifyPremium="from USD 8.69 with Printify premium" description="Unisex jersey short sleeve tee" by="by bella+canvas-3001" prize="from USD 10.87" size="9 sizes-126 colors-20prints providers"/>
      <ProductCard img1Path={img1} img2Path={img2} printifyPremium="from USD 8.69 with Printify premium" description="Unisex jersey short sleeve tee" by="by bella+canvas-3001" prize="from USD 10.87" size="9 sizes-126 colors-20prints providers"/>
      </div>
     </div>
     <div>
      <BlogComponent heading="Printif blog" buttonInfo="Read Article" image={img1} description="Holiday Guide 2024 – Tackle the Shopping Season Like a Pro"/>
     </div> */}
    </>
  )
}

export default App
