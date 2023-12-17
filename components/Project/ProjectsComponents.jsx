"use client"
import Link from "next/link";
import {FiExternalLink} from "react-icons/fi";

const ProjectsComponents = ({projects}) => {
    return (
        <div className='pt-[20px] min-h-screen w-full max-w-screen-xl mx-auto relative'>
            <div className='py-9 px-3 md:px-5'>
                <Link href={"/"}
                      className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
                         aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                              clipRule="evenodd"></path>
                    </svg>
                    Typle</Link>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
            </div>
            <div className='px-3 md:px-5'>
                <table id="content" className="w-full border-collapse text-left">
                    <thead
                        className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-950/75 px-6 py-5 backdrop-blur">
                    <tr>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with
                        </th>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200 text-right md:text-start">Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        projects.map(project => (
                            <tr key={project.title} className="border-b border-slate-300/10 last:border-none">
                                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                    <div>
                                        <div className="block sm:hidden">
                                        <span>
                                            {project.title}
                                        </span>
                                        </div>
                                        <div className="hidden sm:block">
                                            {project.title}
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                    <ul className="flex -translate-y-1.5 flex-wrap">
                                        {
                                            project.skills.map(skill => (
                                                <li key={skill.toString()} className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{skill}
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </td>
                                <td className="py-4">
                                    <a href={project.demo} target={"_blank"} rel="noreferrer" className='text-white group'>
                                        <FiExternalLink className='transition-all  duration-300 group-hover:translate-x-2 group-hover:-translate-y-1 mx-auto md:mx-0'/>
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectsComponents;