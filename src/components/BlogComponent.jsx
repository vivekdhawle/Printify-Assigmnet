import { NavLink } from "react-router-dom"

function BlogComponent({heading,icon,buttonInfo,image,video,description}) {
  return (
    <>
        <div className="flex border-2 rounded-xl p-5  flex-shirnk flex-col gap-5 m-3" style={{width:'300px',minwidth: '280px'}}>
            <div className="p-3 border-b-2 flex justify-between">
                <span>
                    <img src={icon} alt="" />
                    <span className="font-bold text-xl">{heading}</span>
                </span>
                <NavLink to={"/progress"} className="text-green-500">See more</NavLink>
               
            </div>
            <div className="flex flex-col items-center justify-center">
                {
                    image&&( <div><img src={image} alt="" className="rounded-xl max-w-100%"/>
                                    <p className="mt-5">{description}</p>
                             </div>)
                }
                {
                    video&&( <video src={video} controls className="rounded-xl"></video>)
                }
            </div>
            <NavLink to={"/progress"} className="self-end">
                {
                    buttonInfo&&(<button className="border-2 px-3 py-2 rounded-xl font-semibold hover:text-green-400">{buttonInfo}</button>)
                }
            </NavLink>
        </div>
    </>
  )
}

export default BlogComponent
