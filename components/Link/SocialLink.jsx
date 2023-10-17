import React from 'react';
import {FaFacebookSquare} from "react-icons/fa";
import {BiLogoGithub, BiLogoInstagram, BiLogoTwitter} from 'react-icons/bi'
const SocialLink = ({link,icon}) => {
    return (
        <a target="blank" rel="noreferrer" href={link}
           className='font-bold text-2xl hover:text-slate-200 transition-colors duration-500 text-slate-400'>
            <ICON name={icon}/>
        </a>
    );
};

export default SocialLink;

export const ICON = ({name}) => {
  switch (name) {
      case "facebook" : return <FaFacebookSquare/>;
      case "instagram" : return  <BiLogoInstagram/>;
      case "github"  : return <BiLogoGithub/>;
      case "twitter" : return <BiLogoTwitter/>
  }
}