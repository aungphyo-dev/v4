"use client"
import {useEffect, useState} from "react";
import supabase from "@/services/supabase";
import {useRouter} from "next/navigation";

const Login = () => {
    const router = useRouter()
    useEffect(() => {
        let session;
        if (typeof window !== "undefined") {
            session = localStorage.getItem("sb-otgegesmjkdjmcppbsbl-auth-token")
        }
        router.prefetch("/")
        if(session){
            router.push("/")
        }
    }, [router]);
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleLogin =async (e) => {
      e.preventDefault()
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if(error === null){
            router.push("/dashboard")
        }
    }
    return (
        <section className='min-h-screen w-full flex justify-center items-center'>
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative  rounded-lg shadow bg-slate-900 shadow-white">
                    <div className="px-3 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium  text-white text-center">Sign in to your admin account</h3>
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" id="email" className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name@company.com" required/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">Your password</label>
                                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" required/>
                            </div>
                            <button type="submit" className="w-full text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
