import {useState} from "react";
import {AiOutlineMenu} from "react-icons/ai";
import {SiExpensify, SiPolymerproject} from "react-icons/si";
import {VscProject} from "react-icons/vsc";
import {
    BsExplicit,
    BsExplicitFill,
    BsFillInfoSquareFill,
    BsFillPersonFill,
    BsPencilSquare,
    BsPersonFillAdd
} from "react-icons/bs";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import useLogout from "../../Hooks/useLogout.js";
import Cookies from "js-cookie";
import {ImSwitch} from "react-icons/im";
const Dashboard = () => {
    const [side,setSide] = useState(false)
    const [dp1,setDp1] = useState(true)
    const [dp3,setDp3] = useState(true)
    const {logout} = useLogout()
    const nav = useNavigate()
    const handleLogout =async () => {
      await logout()
        Cookies.remove('user')
      nav("/login")
    }
  return(
      <section className='h-screen w-full flex justify-center items-center'>
            <div className='w-full  flex justify-center items-center'>
                <div className={side?"w-[30%]":""}>
                    <div className={`w-full  px-5 py-5 min-h-screen bg-gray-800`}>
                        {!side&&<button onClick={()=>setSide(!side)} className='w-full cursor-pointer'>
                            <AiOutlineMenu className='pointer-events-none mx-auto w-5 h-5 transition duration-75 text-gray-400 group-hover group-hover:text-white'/>
                        </button>}
                        <div className="flex justify-between items-center">
                            {side&&<Link to='/dash-board' className="text-base font-semibold uppercase text-gray-400">Dashboard</Link>}
                            {side&& <button onClick={()=>setSide(!side)} type="button" className="text-gray-400 bg-transparent hover rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center hover:bg-gray-600 hover:text-white" >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                            </button>}
                        </div>
                        <div className="py-4 overflow-y-auto">
                            <ul className="space-y-2 font-medium">
                                <li>
                                    <button onClick={()=>setDp1(!dp1)} type="button" className="flex justify-between items-center w-full p-2  transition duration-75 rounded-lg group  text-white hover:bg-gray-700">
                                        <div className='flex justify-center items-center'>
                                            <SiPolymerproject className={`${side?"":"mr-1"} text-slate-200`}/>
                                            {side && <span className="ml-3">Projects</span>}
                                        </div>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                    </button>
                                    <ul className={`${dp1?"hidden":"block"} py-2 space-y-2`}>
                                        <li>
                                            <NavLink to='/dash-board/project/all' className="flex items-center w-full p-2 transition duration-75 rounded-lg group text-white hover:bg-gray-700">
                                                <VscProject className='text-slate-200'/>
                                                {side && <span className="ml-3">All Projects</span>}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dash-board/project/create' className="flex items-center w-full p-2 transition duration-75 rounded-lg group text-white hover:bg-gray-700">
                                                <BsPencilSquare className='text-slate-200'/>
                                                {side && <span className="ml-3">Create Project</span>}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dash-board/cv/update' className="flex items-center w-full p-2 transition duration-75 rounded-lg group text-white hover:bg-gray-700">
                                                <BsPencilSquare className='text-slate-200'/>
                                                {side && <span className="ml-3">Update CV</span>}
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button onClick={()=>setDp3(!dp3)} type="button" className="flex justify-between items-center w-full p-2  transition duration-75 rounded-lg group  text-white hover:bg-gray-700">
                                        <div className='flex justify-center items-center'>
                                            <SiExpensify className={`${side?"":"mr-1"} text-slate-200`}/>
                                            {side && <span className="ml-3">Experience</span>}
                                        </div>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                    </button>
                                    <ul className={`${dp3?"hidden":"block"} py-2 space-y-2`}>
                                        <li>
                                            <NavLink to='/dash-board/experience/all' className="flex items-center w-full p-2 transition duration-75 rounded-lg group text-white hover:bg-gray-700">
                                                <BsExplicitFill className='text-slate-200'/>
                                                {side && <span className="ml-3">Experience All</span>}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dash-board/experience/create' className="flex items-center w-full p-2 transition duration-75 rounded-lg group text-white hover:bg-gray-700">
                                                <BsExplicit className='text-slate-200'/>
                                                {side && <span className="ml-3">Create Experience</span>}
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <button onClick={handleLogout} type="button" className="flex justify-center items-center gap-x-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium  focus:outline-none  rounded-lg border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700">
                            <ImSwitch className='inline-flex'/>
                            {side&&"logout"}
                        </button>

                    </div>
                </div>
                <div className='w-full px-2 h-screen overflow-y-auto'>

                    <Outlet/>
                </div>
            </div>
      </section>
  )
}
export default Dashboard