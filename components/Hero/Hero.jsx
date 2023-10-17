import './hero.css'
import {AiFillHeart} from 'react-icons/ai'
import {SocialLink,Navbar} from "@/components";

const Hero = () => {
    return (
        <section className='hero-session pt-[15px] lg:pt-[5rem]'  id="home">
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
                                <div className="cursor-pointer group/typle inline-flex font-semibold lg:text-slate-200 hero-pt-1-title">
                                    <span className="sr-only">Typle</span>
                                    <span className="group-hover/typle:text-red-400 transition duration-75 group-hover/typle:-translate-y-px delay-[50ms]" aria-hidden="true">T</span>
                                    <span className="group-hover/typle:text-orange-400 transition duration-75 group-hover/typle:-translate-y-px delay-[75ms]" aria-hidden="true">Y</span>
                                    <span className="group-hover/typle:text-yellow-400 transition duration-75 group-hover/typle:-translate-y-px delay-[100ms]" aria-hidden="true">P</span>
                                    <span className="group-hover/typle:text-lime-400 transition duration-75 group-hover/typle:-translate-y-px delay-[125ms]" aria-hidden="true">L</span>
                                    <span className="group-hover/typle:text-green-400 transition duration-75 group-hover/typle:-translate-y-px delay-[150ms]" aria-hidden="true">E</span>
                                    <span className="group-hover/typle:text-teal-400 transition duration-75 group-hover/typle:-translate-y-px delay-[175ms]" aria-hidden="true">&nbsp;</span>
                                    <span className="group-hover/typle:text-cyan-400 transition duration-75 group-hover/typle:-translate-y-px delay-[200ms]" aria-hidden="true">A</span>
                                    <span className="group-hover/typle:text-sky-400 transition duration-75 group-hover/typle:-translate-y-px delay-[225ms]" aria-hidden="true">P</span>
                                    <span className="group-hover/typle:text-blue-400 transition duration-75 group-hover/typle:-translate-y-px delay-[250ms]" aria-hidden="true">2</span>
                                </div>
                            </div>
                            <div
                                className='mb-5'>
                                <p className='hero-pt-1-paragraph max-w-sm'>
                                    Experienced junior web developer ready for collaborative projects.
                                </p>
                            </div>
                            <Navbar/>
                            <div>
                                <div className='flex justify-center items-center space-x-4'>
                                    <SocialLink link="https://www.github.com/typle/" icon={"github"}/>
                                    <SocialLink link="https://www.instagram.com/aungpyaephyo1412/" icon={"instagram"}/>
                                    <SocialLink link="https://www.twitter.com/typle_x/" icon={"twitter"}/>
                                    <SocialLink link="https://www.facebook.com/aungpyaephyo1412/" icon={"facebook"}/>
                                </div>
                            </div>
                        </div>
        </section>
    )
}
export default Hero