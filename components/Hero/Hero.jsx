import './hero.css'
import {AiFillHeart} from 'react-icons/ai'
import { BiLogoGithub, BiLogoInstagram} from 'react-icons/bi'
import {FaFacebookSquare} from "react-icons/fa";
import Navbar from "@/components/Navbar/Navbar";

const Hero = () => {
    return (
        <section className='hero-session pt-[15px] lg:pt-[35px]'  id="home">
                        <div className="hero-pt-1">
                            <div
                                className='mb-3'>
                                <div className='cursor-auto'>
                                    <AiFillHeart className='text-red-500 mb-1'/>
                                </div>
                                <p className='hero-pt-1-subtitle'>
                                    SPEED UP <br/>
                                    COMMUNICATIONS
                                </p>
                            </div>
                            <div
                                className="mb-5">
                                <h1 className='hero-pt-1-title'>
                                    Hi, I'm <span className='text-[#c3a6ff]'>Typle</span> <br/>
                                </h1>
                            </div>
                            <div
                                className='mb-5'>
                                <p className='hero-pt-1-paragraph'>
                                    Experienced junior web developer ready for collaborative projects. Let's build greatness!🚀
                                </p>
                            </div>
                            <Navbar/>
                            <div>
                                <div className='flex justify-center items-center space-x-4'>
                                    <a target="blank" rel="noreferrer" href="https://www.facebook.com/aungpyaephyo1412"
                                       className='font-bold text-2xl hover:text-slate-200 transition-colors duration-500 text-slate-400'>
                                        <FaFacebookSquare/>
                                    </a>
                                    <a target="blank" rel="noreferrer" href="https://github.com/typle"
                                       className='font-bold text-3xl hover:text-slate-200 transition-colors duration-500 text-slate-400'>
                                        <BiLogoGithub/>
                                    </a>
                                    <a target="blank" rel="noreferrer"
                                       href="https://www.instagram.com/aungpyaephyo1412/"
                                       className='font-bold text-3xl hover:text-slate-200 transition-colors duration-500 text-slate-400'>
                                        <BiLogoInstagram/>
                                    </a>
                                </div>
                            </div>
                        </div>
        </section>
    )
}
export default Hero