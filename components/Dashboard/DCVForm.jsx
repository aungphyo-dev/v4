import {useEffect, useState} from "react";
import useFiresotre from "../../Hooks/useFiresotre.js";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../Firebase/index.js";
const DCVForm = () => {
    const [file,setFile] = useState(null)
    const [url,setUrl] = useState("")
    const {deleteStorage,updateDocument} = useFiresotre()
    const id = "uqd4H1FV9bfJFBOeGune"
    const data = {}
    const handleSubmit = async (e) => {
        e.preventDefault()
        await deleteStorage(url)
        await updateDocument('cv-form',id,data,file,"cv-form")
        console.log(res)
        setFile(null)
    }
    useEffect(() => {
        const ref = doc(db,"cv-form",id)
        getDoc(ref).then(doc=>{
            if (doc.exists()){
                const {image} = doc.data()
                setUrl(image)
            }else {
                console.log("not found")
            }
        })
    }, []);
  return(
      <section className='min-h-screen w-full flex justify-center items-center'>
          <form onSubmit={handleSubmit} className='max-w-screen-md'>
              <label className="block mb-2 text-sm font-medium cursor-pointer text-white" htmlFor="file_input">Upload file</label>
              <input onChange={(e)=>setFile(e.target.files[0])} className="block w-full text-sm  border rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400 mb-5" id="file_input" type="file"/>
              <button className='px-4 py-1 bg-blue-500 text-white'>
                  Update
              </button>
          </form>
      </section>
  )
}
export default DCVForm