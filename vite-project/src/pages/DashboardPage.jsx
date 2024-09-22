import img2 from "../assets/cimage.avif"
import img1 from "../assets/cimage1.avif"
import ProductCard from '../components/ProductCardComponent'
import CreateProduct from "../components/CreateProductComponent"
import NiecheComponent from "../components/NiecheComponent"
import BlogComponent from "../components/BlogComponent"
import { NavLink } from "react-router-dom"
function Dashboard() {
  return (
    <div className="md:m-5 flex-col lg:w-3/4 w-full  flex gap-10 self-center p-5">
       <h1 className="text-3xl font-bold lg:m-3 mt-24 mx-3">Rise and shine! Let’s make some money today</h1>
      <div className="w-full bg-white border-2 rounded-lg ">
        <CreateProduct additionalProperties="p-5 w-full"/>
      </div>

      <div className="w-full bg-white border-2 rounded-lg "> 
            <NiecheComponent/>
      </div>

      <div className="w-full bg-white border-2 rounded-lg p-5 ">
           <div className="flex justify-between border-b-2 p-3">
            <h1 className="font-bold text-xl ">Our Bestsellers</h1>
            <NavLink  className="text-green-400 ">See more</NavLink>
            
           </div>
          <div className="flex flex-column w-full overflow-y-hidden overflow-x-scroll">
              <ProductCard img1Path={img1} img2Path={img2} printifyPremium="from USD 8.69 with Printify premium" description="Unisex jersey short sleeve tee" by="by bella+canvas-3001" prize="from USD 10.87" size="9 sizes-126 colors-20prints providers" />
              <ProductCard img1Path={img1} img2Path={img2} printifyPremium="from USD 8.69 with Printify premium" description="Unisex jersey short sleeve tee" by="by bella+canvas-3001" prize="from USD 10.87" size="9 sizes-126 colors-20prints providers"/>
              <ProductCard img1Path={img1} img2Path={img2} printifyPremium="from USD 8.69 with Printify premium" description="Unisex jersey short sleeve tee" by="by bella+canvas-3001" prize="from USD 10.87" size="9 sizes-126 colors-20prints providers"/>
              <ProductCard img1Path={img1} img2Path={img2} printifyPremium="from USD 8.69 with Printify premium" description="Unisex jersey short sleeve tee" by="by bella+canvas-3001" prize="from USD 10.87" size="9 sizes-126 colors-20prints providers"/>
          </div>
        {/*  */}
      </div>

      <div className="w-full bg-white border-2 rounded-lg p-5 " style={{minWidth:'280px'}}>
        <div className="flex  w-full flex-row overflow-x-scroll " >
            <BlogComponent heading="Printif blog" buttonInfo="Read Article"  description="Holiday Guide 2024 – Tackle the Shopping Season Like a Pro"/>
            <BlogComponent heading="Printif blog" buttonInfo="Read Article"  description="Holiday Guide 2024 – Tackle the Shopping Season Like a Pro"/>
            <BlogComponent heading="Printif blog" buttonInfo="Read Article"  description="Holiday Guide 2024 – Tackle the Shopping Season Like a Pro"/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
