import useFiresotre from "../../Hooks/useFiresotre.js";
import AllProjectCard from "../../components/Project_Card/AllProjectCard.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
const Projects = () => {
    const [mousePos, setMousePos] = useState({});
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);
    const {getAllCollection} = useFiresotre()
    const data = getAllCollection('projects')
        return(
            <div className='pt-[20px] min-h-screen w-full p-5 relative'>
                <div className='pointer-events-none fixed inset-0 z-30' style={{background:`radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}></div>
                <div className='py-9'>
                    <Link  className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>Typle</Link>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
                </div>
                <ul className="w-full relative group/list">
                    {/* eslint-disable-next-line react/prop-types */}
                    {data?.map(project=><AllProjectCard key={project.id} project={project}/> )}
                </ul>
            </div>
        )
    }
export default Projects