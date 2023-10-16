import './about.css'

const About = () => {
    return (
        <section data-section className='about-session  pt-[25px]  lg:pt-[35px]' id="about">
            <div className='about-ct-2-div'>
                <div
                    className="sticky top-0 z-20 mb-4 w-full bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                </div>
                <div
                    className='about-ct-2-para'>
                    Hello, I am <span className='text-[#e6f1ff]'>Aung Pyae Phyo</span>, a junior web developer based in
                    Mandalay. I am currently part of the talented team at Counter, where I am honing my skills and
                    contributing to innovative web projects with tech stacks that include
                        <ul className='skill-list text-[#e6f1ff] px-5'>
                            <li className='list-item'>Typescript</li>
                            <li className='list-item'>ReactJS</li>
                            <li className='list-item'>ReactNative</li>
                            <li className='list-item'>NextJS</li>
                            <li className='list-item'>Firebase</li>
                            <li className='list-item'>Supabase</li>
                            <li className='list-item'>PHP</li>
                            <li className='list-item'>Laravel</li>
                            <li className='list-item'>MySql</li>
                            <li className='list-item'>Postgresql</li>
                        </ul>
                    <br/>
                    I am passionate about crafting seamless and captivating online experiences.
                </div>
                <p className='about-ct-2-para'>
                    Beyond my dedication to <span className='text-[#e6f1ff]'>Web Development</span>, I am driven by my
                    love for language and culture. I have embarked on a journey to learn the <span
                    className='text-[#e6f1ff]'>Japanese Language</span>, fascinated by its intricacies and the doors it
                    can open to a whole new world of understanding. As a firm believer in lifelong learning, I am
                    excited to expand my horizons and continuously grow both as a developer and a language enthusiast.
                </p>
            </div>
        </section>
    )
}
export default About