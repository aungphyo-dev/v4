"use client"
import {createContext, useContext, useEffect, useState} from "react";
import supabase from "@/services/supabase";

const AuthContext = createContext({})

export const AuthContextProvider = ({children})=>{
    const [session,setSession] = useState(null)
    const getSession = async ()=>{
        const { data} = await supabase.auth.getSession()
        setSession(data)
    }
    console.log(session)
    useEffect(() => {
        getSession()
    }, []);
    return (
        <>
            <AuthContext.Provider value={session}>
                {children}
            </AuthContext.Provider>
        </>
    )
};
const authContext = ()=> useContext(AuthContext)
export default authContext