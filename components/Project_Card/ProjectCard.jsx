import Link from "next/link";

const ProjectCard = ({project}) => {
    return(
            <li className="mb-12">
                <div
                    className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100">
                    <div
                        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                                <span
                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                    {project?.title}
                                </span>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-300">{project.description}</p>
                        <ul className="mt-2 flex flex-wrap">
                            {project.skills.map(skill=><li key={skill} className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{skill}
                                </div>
                            </li>)}
                        </ul>
                    </div>
                    <Link  href={project?.demo} target={"_blank"}>
                        <img alt="img" loading="lazy"
                             src={`https://otgegesmjkdjmcppbsbl.supabase.co/storage/v1/object/public/projects/images/${project.image}`}
                        />
                    </Link>
                    </div>
            </li>
    )
}
export default ProjectCard