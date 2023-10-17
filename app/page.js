"use client"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import supabase from "@/services/supabase";
import {About, Hero, Experience, Project, Contact, AnimeC,Footer} from "@/components";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default: true
        },
    },
})
const Home = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [projects, setProjects] = useState([])
    const router = useRouter()
    const getData = async ()=>{
        setIsLoading(true)
        const {data,error} = await supabase.from('projects').select("*").order('id', { ascending: false }).limit(4)
        if (error ===null){
            setProjects(data)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getData().then()
        router.prefetch("/projects")
    }, [router]);
    return (
        <main className='relative w-full'>
            <AnimeC/>
            <div className='w-full min-h-screen' >
                <div className="progress fixed top-0 right-0 left-0 z-[2000]"></div>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-0 lg:px-6">
                    <div className='h-auto lg:h-screen lg:sticky top-0 flex flex-col justify-start items-center px-3 lg:px-14'>
                        <Hero/>
                    </div>
                    <div className='min-h-screen flex flex-col justify-start items-center px-3 lg:px-16'>
                        <About/>
                        <Experience/>
                        <Project projects={projects}/>
                        <QueryClientProvider client={queryClient}>
                            <Contact/>
                        </QueryClientProvider>
                        <Footer/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
