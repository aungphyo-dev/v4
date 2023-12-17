import './hero.css'
import {SocialLink,Navbar} from "@/components";

const Hero = () => {
    return (
        <section className='hero-session pt-[15px] lg:pt-[5rem]'  id="home">
            <div className="hero-pt-1">
                <div
                    className="mb-3">
                    <div
                        className="cursor-pointer group/typle inline-flex font-semibold lg:text-slate-200 hero-pt-1-title">
                        Aung Pyae Phyo
                    </div>
                </div>
                <div
                    className='mb-3'>
                    <p className='hero-pt-1-paragraph max-w-sm'>
                        Experienced Front-End Developer
                    </p>
                </div>
                <div
                    className='mb-5'>
                    <p className='text-[16px] max-w-sm text-[#94a3b8]'>
                        I build exceptional and accessible digital experiences for the web.
                    </p>
                </div>
                <Navbar/>
                <div>
                    <div className='flex justify-center items-center space-x-4'>
                        <SocialLink link="https://www.github.com/aungpyaephyo1412/" icon={"github"}/>
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