import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export default function TextAnimation({paragraph}) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 155px", "end 150px"]
    })
    const words = paragraph.split(" ")
    return (
        <p
            ref={container}
            className={"paragraph"}
        >
            {
                words.map( (word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                })
            }
        </p>
    )
}

const Word = ({children, progress, range}) => {
    const opacity = useTransform(progress, range, [0, 1])
    return <span className={"word"}>
    <span className={"shadow"}>{children}</span>
    <motion.span style={{ opacity: opacity }}>{children}</motion.span>
  </span>
}