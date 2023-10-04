import {useState} from "react";
import useLogin from "../../Hooks/useLogin.js";
import Cookies from 'js-cookie'
import {Navigate, useNavigate} from "react-router-dom";

const Login = () => {
    const data = Cookies.get("user")
    if (data){
        return <Navigate to='/dash-board/project/all'/>
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email,setEmail] = useState("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password,setPassword] = useState("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {error,login} = useLogin()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const nav = useNavigate()
    const handleLogin =async (e) => {
        e.preventDefault();
        const data = await login(email,password)
        if (data){
            const user = JSON.stringify(data.user)
            Cookies.set('user', user, { expires: 365 })
            nav('/dash-board')
        }
    }

  return(
      <section className='min-h-screen w-full flex justify-center items-center'>
              <div className="relative w-full max-w-md max-h-full">
                  <div className="relative  rounded-lg shadow bg-gray-700">
                      <div className="px-6 py-6 lg:px-8">
                          <h3 className="mb-4 text-xl font-medium  text-white">Sign in to your admin account</h3>
                          <form onSubmit={handleLogin} className="space-y-6" action="#">
                              <div>
                                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                  <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" id="email" className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name@company.com" required/>
                              </div>
                              <div>
                                  <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">Your password</label>
                                  <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" required/>
                              </div>
                              {error && <p className='text-red-500 text-sm'>{error}</p> }
                              <button type="submit" className="w-full text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Login</button>
                          </form>
                      </div>
                  </div>
              </div>
      </section>
  )
}
export default Login