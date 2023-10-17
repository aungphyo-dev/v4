import {BsArrowRightShort} from "react-icons/bs";
import Experiences from "@/DB/Experiences";
import {ExperienceCard, NavigateLink} from "@/components";

const Experience = () => {
    return (
        <div data-section className='w-full pt-[25px]  lg:pt-[5rem]' id='exp'>
            <div className="sticky top-0 z-20 mb-4 w-full bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2></div>
            <ol className="group/list">
                {Experiences.map(experience => <ExperienceCard key={experience.id} experience={experience}/>)}
            </ol>
            <div>
                <NavigateLink content={"view all my abilities"} download={true} link={"https://otgegesmjkdjmcppbsbl.supabase.co/storage/v1/object/public/projects/aungpyaephyo.pdf"}/>
            </div>
        </div>
    )
}
export default Experience