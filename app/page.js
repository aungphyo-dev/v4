"use client"
import {useEffect} from "react";
import anime from "animejs";
import {About, Hero,Experience} from "@/components";
const Home = () => {
    useEffect(() => {
        const effect = document.getElementById("bg-effect");
        const cursor = document.getElementById("cursor");
        const handleMouseMove = (event) => {
            anime({
                targets: effect,
                direction: 'linear',
                easing: 'linear',
                duration:0,
                delay:0,
                background: `radial-gradient(600px at ${event.clientX}px ${event.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            });
            anime({
                targets:cursor,
                translateX:event.clientX,
                translateY:event.clientY,
                duration: 1000,
                delay:0,
                direction: 'linear',
                easing: 'easeOutElastic(1, .8)',
            })
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);
    return (
        <main className='relative w-full'>
            <div className='pointer-events-none fixed inset-0 z-30' id={"bg-effect"}>
                <div className="cursor cursor--dot" id={"cursor"}></div>
            </div>
            <div className='w-full min-h-screen' >
                <div className="progress fixed top-0 right-0 left-0 z-[2000]"></div>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                    <div className='h-auto lg:h-screen lg:sticky top-0 flex flex-col justify-start items-center px-5 lg:px-14'>
                        <Hero/>
                    </div>
                    <div className='min-h-screen flex flex-col justify-start items-center px-5 lg:px-16'>
                        <About/>
                        <Experience/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
