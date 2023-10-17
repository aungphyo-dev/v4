import {useEffect} from "react";
import anime from "animejs";

const AnimeC = () => {
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
        <div className='pointer-events-none fixed inset-0 z-30 hidden lg:block' id={"bg-effect"}></div>
    );
};

export default AnimeC;
