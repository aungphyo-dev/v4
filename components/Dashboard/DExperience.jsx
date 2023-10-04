import {Link} from "react-router-dom";
import useFiresotre from "../../Hooks/useFiresotre.js";

const DExperience = () => {
    const {getAllCollection} = useFiresotre()
    const data = getAllCollection('experience')
    const {deleteDocument} = useFiresotre()
    return(
        <div className="relative h-screen shadow-md sm:rounded-lg pb-5">
            <table className="w-full overflow-auto text-sm text-left text-gray-400">
                <thead className="text-xs  uppercase  bg-gray-700 text-gray-400 sticky top-0">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Experience
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Company
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Position
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {data?.map(experience => <tr key={experience.id} className="bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium max-w-screen-sm truncate  whitespace-nowrap text-white">
                            {experience?.experience}
                        </th>
                    <th scope="row" className="px-6 py-4 font-medium max-w-screen-sm truncate  whitespace-nowrap text-white">
                        {experience?.company}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium max-w-screen-sm truncate  whitespace-nowrap text-white">
                        {experience?.position}
                    </th>
                        <td className="px-6 py-4">
                            <Link to={`/dash-board/experience/edit/${experience.id}`} className="font-medium  text-blue-500 hover:underline mr-2">Edit</Link>
                            <button onClick={async ()=>{
                                if (confirm("Do you wanna delete this")){
                                    await deleteDocument('experience',experience.id)
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
export default DExperience