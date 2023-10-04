import './contact.css'
import {useState} from "react";
import {useLoginMutation} from "../../service/AuthApi.js";

const Contact = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [question,setQuestion] = useState("")
    const [message,setMessage] = useState("")
    const [login,{isLoading}] = useLoginMutation()
    const handleSubmit = (e) => {
        e.preventDefault()
        const FormData = {
            name:name,
            email:email,
            question:question,
            message:message
        }
        login(FormData)
        setName("")
        setEmail("")
        setQuestion("")
        setMessage("")
    }
    return(
                <div className="w-full py-[20px]">
                    <div className="sticky top-0 z-20 mb-4 w-full bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Contact Me</h2></div>
                    <form onSubmit={handleSubmit} className='p-lg:p-5 w-full'>
                        <div
                            className="relative z-0 w-full mb-6 group">
                            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Name</label>
                        </div>
                        <div
                            className="relative z-0 w-full mb-6 group">
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="eamil" name="floating_eamil" id="floating_eamil" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_eamil" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Email</label>
                        </div>
                        <div
                            className="relative z-0 w-full mb-6 group">
                            <input value={question} onChange={(e)=>setQuestion(e.target.value)} type="text" name="question" id="floating_eamil" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_eamil" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Question</label>
                        </div>
                        <div
                            className="relative z-0 w-full mb-6 group">
                            <textarea value={message}  onChange={(e)=>setMessage(e.target.value)} rows={5} name="messagee"  className="resize-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required ></textarea>
                            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                        </div>
                        <button
                             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                            {isLoading? "Sending Message...":"Send Message"}
                        </button>
                    </form>
                </div>
    )
}
export default Contact