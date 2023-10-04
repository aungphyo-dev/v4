import {useEffect, useState} from "react";
import {doc, getDoc} from 'firebase/firestore'
import useFiresotre from "../../Hooks/useFiresotre.js";
import {BsPlusSquareFill} from "react-icons/bs";
import {GrFormClose} from "react-icons/gr";
import {useNavigate, useParams} from "react-router-dom";
import {db} from "../../Firebase/index.js";
const DExperienceFormEdit = () => {
    const {id} = useParams()
    const [company,setCompany] = useState("");
    const [experience,setExperience] = useState("");
    const [description,setDescription] = useState("");
    const [skill,setSkill] = useState('')
    const [skills,setSkills] = useState([])
    const [loading,setLoading] = useState(false)
    const [position,setPosition] = useState('')
    const nav = useNavigate()
    const {updateDocument} = useFiresotre()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        setLoading(true)
        const data = {
            company:company,
            description:description,
            experience:experience,
            position:position,
            skills:skills,
        }
        await updateDocument("experience",id,data)
            setCompany('')
            setExperience('')
            setDescription('')
            setSkills([])
            setPosition('')
            setLoading(false)
        nav('/dash-board/experience/all')
    }
    const addSkills = () => {
        setSkills((prevState)=>[skill,...prevState])
        setSkill('')
    }
    const removeSkill = (skill) => {
        setSkills((prevState)=>prevState.filter((prev)=>prev!==skill))
    }
    useEffect(() => {
        const ref = doc(db,"experience",id)
        getDoc(ref).then(doc=>{
            if (doc.exists()){
                const {company,experience,description,skills,position} = doc.data()
                setCompany(company)
                setExperience(experience)
                setDescription(description)
                setSkills(skills)
                setPosition(position)
            }else {
                console.log("not found")
            }
        })
    }, []);
    return (
        <form onSubmit={handleSubmit} className='mt-5'>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} name="title" id="title" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="title" className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <textarea rows={7}  value={description} onChange={(e)=>setDescription(e.target.value)} name="description" id="description" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
                <label htmlFor="description" className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text"  value={experience} onChange={(e)=>setExperience(e.target.value)} name="project_demo" id="project_demo" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="project_demo" className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Experience Date</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text"  value={position} onChange={(e)=>setPosition(e.target.value)} name="project_demo" id="project_demo" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="project_demo" className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Position</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type='text'  value={skill} onChange={(e)=>setSkill(e.target.value)} name="description" id="description" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                <label htmlFor="description" className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Skills</label>
                <button type={'button'} onClick={addSkills}>
                    <BsPlusSquareFill className='text-xl text-slate-200 absolute right-0'/>
                </button>
            </div>
            <ul className='flex flex-wrap gap-2 my-4'>
                {skills?.map(skill=><li className='bg-gray-300 rounded-3xl px-2 py-1' key={skill}>{skill} <GrFormClose className='inline-flex cursor-pointer' onClick={()=>removeSkill(skill)}/></li>)}
            </ul>
            <button type="submit" className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700">
                {loading?"updating....":"update"}
            </button>
        </form>
    )
}
export default DExperienceFormEdit