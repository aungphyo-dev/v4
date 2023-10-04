import useFiresotre from "../../Hooks/useFiresotre.js";
import {Link} from "react-router-dom";
import {useState} from "react";

const DProjects = () => {
    const {getAllCollection} = useFiresotre()
    const data = getAllCollection('projects')
    const {deleteDocument} = useFiresotre()
    const [del,setDelete] = useState(false)
    return(
        <div className="relative h-screen shadow-md sm:rounded-lg pb-5">
            <table className="w-full overflow-auto text-sm text-left text-gray-400">
                <thead className="text-xs  uppercase  bg-gray-700 text-gray-400 sticky top-0">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Project name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Skills
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {data?.map(project => <tr key={project.id} className="bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                            {project?.title}
                        </th>
                        <td className="px-6 py-4">
                            <ul className='flex gap-x-2'>
                                {project.skills.map(skill=><li className='py-2 px-4 bg-slate-600 rounded-3xl text-sky-200' key={skill}>{skill}</li>)}
                            </ul>
                        </td>
                        <td className="px-6 py-4">
                            <Link to={`/dash-board/project/edit/${project.id}`} className="font-medium  text-blue-500 hover:underline mr-2">Edit</Link>
                            <button onClick={async ()=>{
                                if (confirm("Do you wanna delete this")){
                                       await deleteDocument('projects',project.id)
                                        setDelete(!del)
                                }
                                }} className="font-medium  text-blue-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}
export default DProjects