import './project.css'
import {BsArrowRightShort} from "react-icons/bs";
import ProjectCard from "@/components/Project_Card/ProjectCard";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {NavigateLink} from "@/components";


const Project = ({projects}) => {
    const router = useRouter()
    useEffect(() => {
        router.prefetch("/projects")
    }, [router]);
    return (
        <div data-section className=' pt-[25px]  lg:pt-[5rem]' id='projects'>
            <div className="sticky top-0 z-20 mb-4 w-full bg-slate-950/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2></div>
            <ul className="group/list">
                {projects?.slice(0,4).map(project=><ProjectCard key={project.id} project={project}/> )}
            </ul>
            <div>
                <NavigateLink download={false} link={"/projects"} content={"view all my projects"}/>
            </div>
        </div>
)
}
export default Project