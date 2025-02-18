import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Strike = ({ winPatt }) => {
    const [degree, setDegree] = useState(0);
    // const [coord, setCoord] = useState({ left: 0, top: 0 });
    const [idx, setIndex] = useState(null);

    useEffect(() => {
        if (!winPatt || winPatt.length === 0) return;

        if (winPatt.length < 3) return;

        setIndex(winPatt[1]);
        setTimeout(() => {}, 0);

        setDegree(() => {
            const diff = winPatt[2] - winPatt[1];
            if (diff === 4) return 45;
            if (diff === 3) return 90;
            if (diff === 2) return 135;
            if (diff === 1) return 0;
            return 0;
        });
    }, [winPatt]);

    const LineVarients = {
        initial: { opacity: 0, width: "4px", height: "4px" },
        animate: {
            opacity: 1,
            width: "100vh",
            height: "4px",
            transition: { duration: 0.7, ease: "easeInOut" },
        },
    };

    if (idx === null) return null; // Don't render if no winning pattern

    return (
        <>
            {idx === 4 && (
                <motion.div
                    variants={LineVarients}
                    animate="animate"
                    initial="initial"
                    style={{ transform: `rotate(${degree}deg)` }}
                    className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20 bg-neutral-600 w-1 h-[4px]"
                ></motion.div>
            )}
            {idx === 1 && (
                <motion.div
                    variants={LineVarients}
                    animate="animate"
                    initial="initial"
                    style={{ transform: `rotate(${degree}deg)` }}
                    className="absolute top-1/6 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20 bg-neutral-600 w-1 h-[4px]"
                ></motion.div>
            )}
            {idx === 3 && (
                <motion.div
                    variants={LineVarients}
                    animate="animate"
                    initial="initial"
                    style={{ transform: `rotate(${degree}deg)` }}
                    className="absolute top-1/2 left-1/6 translate-x-[-50%] translate-y-[-50%] z-20 bg-neutral-600 w-1 h-[4px]"
                ></motion.div>
            )}
            {idx === 5 && (
                <motion.div
                    variants={LineVarients}
                    animate="animate"
                    initial="initial"
                    style={{ transform: `rotate(${degree}deg)` }}
                    className="absolute top-1/2 left-5/6 translate-x-[-50%] translate-y-[-50%] z-20 bg-neutral-600 w-1 h-[4px]"
                ></motion.div>
            )}
            {idx === 7 && (
                <motion.div
                    variants={LineVarients}
                    animate="animate"
                    initial="initial"
                    style={{ transform: `rotate(${degree}deg)` }}
                    className="absolute top-5/6 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20 bg-neutral-600 w-1 h-[4px]"
                ></motion.div>
            )}
        </>
    );
};

export default Strike;
