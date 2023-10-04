import './project.css'
import {BsArrowRightShort} from "react-icons/bs";


// eslint-disable-next-line react/prop-types
const Project = () => {
    return (
        <div data-section className=' pt-[25px]  lg:pt-[35px]' id='projects'>
            <div className="sticky top-0 z-20 mb-4 w-full bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2></div>
            <ul className="group/list">
                {/* eslint-disable-next-line react/prop-types */}
                {/*{projects?.map(project=><ProjectCard key={project.id} project={project}/> )}*/}
            </ul>
            <div>
                <div  className='text-slate-200 hover:underline group'>
                    view all my projects
                    <BsArrowRightShort className=' opacity-0 transition duration-500 ml-1 inline-flex group-hover:opacity-100'/>
                </div>
            </div>
        </div>
)
}
export default Project