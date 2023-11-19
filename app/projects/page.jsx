import supabase from "@/services/supabase";
import ProjectsComponents from "@/components/Project/ProjectsComponents";
const getData = async ()=>{
    const {data} = await supabase.from('projects').select("*").order('id', { ascending: false })
    return data;
}
const Projects =async () => {
    const projects =await getData();
    return(
        <ProjectsComponents projects={projects}/>
    )
}
export default Projects