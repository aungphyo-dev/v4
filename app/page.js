import supabase from "@/services/supabase";
import HomeComponents from "@/components/Home/HomeComponents";
const Home = async () => {
    const getData = async ()=>{
        const {data} = await supabase.from('projects').select("*").order('id', { ascending: false }).limit(4)
        return data;
    }
    const projects = await getData()
    return (
        <HomeComponents projects={projects}/>
    );
};

export default Home;
