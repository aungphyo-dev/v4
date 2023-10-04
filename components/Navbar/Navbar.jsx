import './navbar.css'
import {useEffect, useRef, useState} from "react";

const Navbar = () => {
    const GoSection = (id) => {
        const EL = document.getElementById(id);
        EL.scrollIntoView({behavior:"smooth"})
    }
    const [activeSection, setActiveSection] = useState("about");
    const sections = useRef([]);

    const handleScroll = () => {
        const pageYOffset = window.pageYOffset;
        let newActiveSection = null;

        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionOffsetTop && pageYOffset
                < sectionOffsetTop + sectionHeight) {
                newActiveSection = section.id;
            }
        });

        setActiveSection(newActiveSection);
    };

    useEffect(() => {
        sections.current = document.querySelectorAll('[data-section]');
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-12 mb-9 w-max">
                <li className={activeSection==="about" ? "active" :""}>
                    <button onClick={()=>GoSection("about")} className="group flex items-center py-3"><span
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                    className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                    </button>
                </li>
                <li className={activeSection==="exp" ? "active" : ""}>
                    <button onClick={()=>GoSection("exp")} className="group flex items-center py-3 "><span
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                    className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                    </button>
                </li>
                <li className={activeSection==="projects" ? "active" : ""}>
                    <button onClick={()=>GoSection("projects")} className="group flex items-center py-3 "><span
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                    className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar