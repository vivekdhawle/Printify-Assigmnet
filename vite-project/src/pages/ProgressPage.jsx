import work from "../assets/work.png"

function ProgressPage() {
  return (
    <div className='text-black text-3xl font-bold text-center flex flex-col justify-center items-center h-screen'>
      Work in progress
      <img src={work} alt="" className="h-32"/>
    </div>
  )
}

export default ProgressPage
