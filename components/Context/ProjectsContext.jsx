"use client"
import {createContext, useContext, useEffect, useState} from "react";
import supabase from "@/services/supabase";
export const ProjectsContext = createContext({});
export const ProjectsContextProvider = ({children})=>{
    const [isLoading,setIsLoading] = useState(true)
    const [projects, setProjects] = useState([])
    const getData = async ()=>{
        setIsLoading(true)
        const {data,error} = await supabase.from('projects').select("*").order('id', { ascending: false })
        if (error ===null){
            setProjects(data)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getData().then()
    }, []);
    const data = {isLoading,projects}
    return (
        <>
            <ProjectsContext.Provider value={data}>
                {children}
            </ProjectsContext.Provider>
        </>
    )
}

const useProjectContext = ()=> useContext(ProjectsContext)
export default useProjectContext