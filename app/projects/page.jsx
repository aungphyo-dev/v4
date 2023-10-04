"use client"
import anime from "animejs";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import supabase from "@/services/supabase";
import {ProjectsCard} from "@/components";

const Projects = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [projects, setProjects] = useState([])
    const router = useRouter()
    const getData = async ()=>{
        setIsLoading(true)
        const {data,error} = await supabase.from('projects').select("*").order('id', { ascending: false })
        if (error ===null){
            setProjects(data)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getData()
        router.prefetch("/")
        const effect = document.getElementById("bg-effect");
        const cursor = document.getElementById("cursor");
        const handleMouseMove = (event) => {
            anime({
                targets: effect,
                direction: 'linear',
                easing: 'linear',
                duration:0,
                delay:0,
                background: `radial-gradient(600px at ${event.clientX}px ${event.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            });
            anime({
                targets:cursor,
                translateX:event.clientX,
                translateY:event.clientY,
                duration: 1000,
                delay:0,
                direction: 'linear',
                easing: 'easeOutElastic(1, .8)',
            })
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);
    return(
        <div className='pt-[20px] min-h-screen w-full p-5 relative'>
            <div className='pointer-events-none fixed inset-0 z-30' id={"bg-effect"}>
                <div className="cursor cursor--dot" id={"cursor"}></div>
            </div>
            <div className='py-9 sticky top-0'>
                <Link href={"/"}  className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>Typle</Link>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
            </div>
            <ul className="w-full relative group/list">
                {projects?.map(project=><ProjectsCard key={project.id} project={project}/> )}
            </ul>
        </div>
    )
}
export default Projects