import './contact.css'
import {useState} from "react";
import axios from "axios";
import {LoadingIcon} from "@/components";

const Contact = () => {
    const [contactForm, setContactForm] = useState({name:"", email:"", question:"", message:""})
    const [isLoading, setIsLoading] = useState(false)
    const sendMessage =async (data) => {
        const res = await axios.post("https://formspree.io/f/mrgvybye",data)
        return res.data;
    }
    const handleChange = (e) => {
        setContactForm(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit =async (e) => {
        e.preventDefault()
        setIsLoading(true)
        await sendMessage(contactForm)
        setIsLoading(false)
        setContactForm({name:"", email:"", question:"", message:""})
    }
    return(
                <div className="w-full pt-[5rem]">
                    <div className="sticky top-0 z-20 mb-4 w-full bg-slate-950/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Contact Me</h2></div>
                    <form onSubmit={handleSubmit} className='p-lg:p-5 w-full'>
                        <div
                            className="relative z-0 w-full mb-6 group">
                            <input value={contactForm.name} onChange={(e)=>handleChange(e)} type="text" name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Name</label>
                        </div>
                        <div
                            className="relative z-0 w-full mb-6 group">
                            <input value={contactForm.email} onChange={(e)=>handleChange(e)} type="eamil" name="email" id="floating_eamil" className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_eamil" className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Email</label>
                        </div>
                        <div
                            className="relative z-0 w-full mb-6 group">
                            <input value={contactForm.question} onChange={(e)=>handleChange(e)} type="text" name="question" id="floating_question" className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_question" className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Question</label>
                        </div>
                        <div
                            className="relative z-0 w-full mb-6 group">
                            <textarea value={contactForm.message}  onChange={(e)=>handleChange(e)} rows={5} name="message"  className="resize-none block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required ></textarea>
                            <label  className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                        </div>
                        <button disabled={isLoading}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                            {isLoading ? <LoadingIcon/> : "Send Message"}
                        </button>
                    </form>
                </div>
    )
}
export default Contact