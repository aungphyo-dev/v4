"use client"
import {useParams} from "next/navigation";

const Edit = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>

        </div>
    );
};

export default Edit;
