
import home from "./assets/home.png"
import health from "./assets/health.png"
import settings from "./assets/settings.png"
import insights from "./assets/visualization.png"
import dollar from "./assets/dollar.png"
import truck from "./assets/truck.png"
import label from "./assets/label.png"
import catalog from "./assets/catalog.png"
import help from "./assets/help.png"
import pinch from "./assets/pinch.png"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import './App.css'
import CreateProduct from "./components/CreateProductComponent"
import { NavLink } from "react-router-dom"
function App() {
  const [display,setDisplay]=useState({})
  const [displayNav,setDisplayNav]=useState()
  
  const tabs=[
    {imgPath:home,tabName:'Dashboard'},
    {imgPath:catalog,tabName:'Catalog',more:['Catalog Home','Bestsellers','Holiday picks']},
    {imgPath:label,tabName:'my Products'},
    {imgPath:truck,tabName:'Orders'},
    {imgPath:dollar,tabName:'Wallet'},
    {imgPath:insights,tabName:'Insights',more:['Payments','Taxes','Rewards']},
    {imgPath:settings,tabName:'Store settings'},
    {imgPath:health,tabName:'Branding'},
    {imgPath:home,tabName:'Printify premium'},
    {imgPath:help,tabName:'Need help'},
    ]
    const toggleDropdown = (tabName) => {
      setDisplay((prevState) => ({
        ...prevState,
        [tabName]: !prevState[tabName],  // Toggle the visibility for the specific tab
      }));
    };
  
  return (
    <>
      <div className="  lg:flex-row flex flex-col flex-shrink-0 w-screen  " style={{minWidth:"280px"}}>
        <div className={`lg:flex-row   flex flex-col flex-shrink-0 whitespace-nowrap `} >
          <div className={`overflow-y-scroll   overflow-x-hidden  top-0 left-0 bottom-0   bg-white lg:z-10 z-10 lg:fixed lg:block hidden flex-row border-2 h-full ${displayNav?"w-72 ":"w-24"}`}>
            <div>
              <ul className={`flex justify-center items-start   flex-col mt-10 gap-5`}>

              <li className="flex  justify-center items-center  w-full">
                  <h1 className="font-bold text-3xl text-center p-3 mb-5 relative w-full ">{displayNav?<div className="flex justify-center items-center">
                    <img src={pinch} className="h-10"></img>
                    <NavLink to={"/Dashboard"}>Printify</NavLink>
                    
                  </div>:<img src={pinch} className="h-10"></img>}</h1>
                  <button className={`border-2 rounded-full p-2  absolute ${displayNav?"left-56 ":"left-14 "} `}  onClick={()=>{setDisplayNav(prev=>!prev);if (displayNav) {
                                                    setDisplay({}); 
                                                  };}}>{displayNav?"<":">"}
                  </button>
               </li>

              <li className={`border-2 flex  items-center   ${displayNav?"w-full p-5":"w-14 py-5"} w-full text-lg`}>
                  <img src={home} alt="" className={`${displayNav?"h-5 mx-3":"h-5 ml-7"}`}/>
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
                        {display[item.tabName]&&<ul className="flex fixed bg-white left-72 border-2 rounded-xl flex-col">
                            {item.more.map(element=><li className="m-1  px-8 text-lg h-full w-full" key={element}>{element}</li>)}
                        </ul>}
                      </>

                  ):<NavLink to={item.tabName === 'Dashboard' ? '/Dashboard' :"/progress"} className={({isActive})=>`flex flex-row items-center px-2  ${isActive?"border-l-2  h-10  border-green-500 w-full font-bold text-green-500":""} `} >
                    <img src={item.imgPath} alt="" className={`${displayNav?"h-5":"h-5"} mr-5`}/>
                    {displayNav&&<h2>{item.tabName}</h2>}
                </NavLink>}
                  
                </li>})
               }
            </ul>
        </div>
            </div>

      <div className="lg:hidden w-full fixed flex-shrink-0 flex h-20 border-2 z-10 bg-white items-center justify-between " style={{minWidth:"280px"}}>
            <div className="w-full justify-center items-center">
              <h1 className="font-bold text-3xl text-left mb-5 box-border  ">Printify</h1>
            </div>

            <div className="flex relative justify-center mr-5 items-center">
              <img src={home} className="h-5" alt="" />
              <button className="text-bold text-3xl ml-5" onClick={()=>setDisplayNav(prev=>!prev)} >≡</button>
            </div>
            {
                displayNav&&(
                  <>
                    <ul className="absolute  bg-white right-5 top-12 border-2 w-72 flex justify-center  h-96  pt-64 overflow-y-scroll flex-col mt-10 gap-5">
                    { 
                      tabs.map((item)=>{return <li key={item.tabName} className="my-2 ml-5 flex  items-center text-lg w-full">
                        {item.more?(
                            <ul className="flex">
                              <img src={item.imgPath} alt="" className={`${displayNav?"h-5":"h-5"} mx-2 `}/>
                              <button className=" flex w-full justify-between pr-5" onClick={()=>(toggleDropdown(item.tabName))}>
                              {displayNav&&(<><span>{item.tabName}</span>
                                <span className="mr-4 "> {">"} </span></>)}
                              </button>
                              {display[item.tabName]&&<li>
                                  {item.more.map(element=><li key={element}>{element}</li>)}
                              </li>}
                            </ul>
                        ):<NavLink to={item.tabName} className={({isActive})=>`flex flex-row items-center px-2  ${isActive?"border-l-2  h-10  border-green-500 w-full font-bold text-green-500":""} `} >
                          <img src={item.imgPath} alt="" className={`${displayNav?"h-5":"h-5"} mr-5`}/>
                          {displayNav&&<h2>{item.tabName}</h2>}
                      </NavLink>}
                        
                      </li>})
                    }
                    </ul>
                  </>
                )
               }
        </div>
               
        </div>
        <div className={`flex justify-self-center   w-full flex-grow flex-shrink basis-0  lg:p-0 ${displayNav?"lg:ml-64":"lg:ml-20"} box-border bg-gray-200  flex-col`} style={{minWidth:"280px"}}>
         
          <Outlet/>
        </div>
      </div>

    </>
  )
}

export default App
