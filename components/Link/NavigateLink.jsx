import React from 'react';
import {BsArrowRightShort} from "react-icons/bs";
import Link from "next/link";
const NavigateLink = ({link,download,content}) => {
    return (
        <div>
            <Link download={download} href={link} className='text-slate-200 hover:underline group'>
                {content}
                <BsArrowRightShort className='transition duration-500 ml-1 inline-flex group-hover:translate-x-1'/>
            </Link>
        </div>
    );
};

export default NavigateLink;
