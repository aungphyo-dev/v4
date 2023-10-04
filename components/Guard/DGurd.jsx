import Cookies from "js-cookie";
import {Navigate, useLocation} from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.jsx";

const DGurd = () => {
    const data = Cookies.get('user')
    const {pathname} = useLocation()
    if (pathname==="/dash-board"||pathname==='/dash-board/'){
        return <Navigate to='/dash-board/project/all'/>
    }
    if (data){
        const user = JSON.parse(data)
        return <Dashboard user={user}/>
    }
    return <Navigate to='/login'/>
}
export default DGurd