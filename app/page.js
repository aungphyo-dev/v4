"use client"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {About, AnimeC, Contact, Experience, Footer, Hero, Project} from "@/components";
import supabase from "@/services/supabase";
const Home = () => {
    const [projects, setProjects] = useState([])
    const router = useRouter()
    useEffect(() => {
        router.prefetch("/projects")
    }, [router]);
    const getData = async ()=>{
        const {data,error} = await supabase.from('projects').select("*").order('id', { ascending: false }).limit(4)
        if (error ===null){
            setProjects(data)
        }
    }
    useEffect(() => {
        getData().then()
    }, []);
    return (
        <main className='relative w-full'>
            <AnimeC/>
            <div className='w-full min-h-screen'>
                <div className="progress fixed top-0 right-0 left-0 z-[2000]"></div>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-0 lg:px-6">
                    <div
                        className='h-auto lg:h-screen lg:sticky top-0 flex flex-col justify-start items-center px-3 lg:px-14'>
                        <Hero/>
                    </div>
                    <div className='min-h-screen flex flex-col justify-start items-center px-3 lg:px-16'>
                        <About/>
                        <Experience/>
                        <Project projects={projects}/>
                        <Contact/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
