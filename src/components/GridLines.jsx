import { motion } from "framer-motion";

const GridLines = () => {
    const virticalLineVarients = {
        initial: { opacity: 0, width: "4px", height: "4px" },
        animate: {
            opacity: 1,
            width: "4px",
            height: "100vh",
            transition: { duration: 2, ease: "easeInOut" },
        },
    };
    const horLineVarients = {
        initial: { opacity: 0, width: "4px", height: "4px" },
        animate: {
            opacity: 1,
            width: "100vh",
            height: "4px",
            transition: { duration: 2, ease: "easeInOut" },
        },
    };

    return (
        <>
            <motion.div
                variants={virticalLineVarients}
                initial="initial"
                animate="animate"
                className="absolute w-1 top-1/3 left-1/3  bg-blue-500 translate-x-[-50%] translate-y-[-50%]"
            ></motion.div>
            <motion.div
                variants={virticalLineVarients}
                initial="initial"
                animate="animate"
                className="absolute w-1 top-2/3 left-2/3  bg-blue-500 translate-x-[-50%] translate-y-[-50%]"
            ></motion.div>
            <motion.div
                variants={horLineVarients}
                initial="initial"
                animate="animate"
                className="absolute w-1 top-2/3 left-1/3  bg-blue-500 translate-x-[-50%] translate-y-[-50%]"
            ></motion.div>
            <motion.div
                variants={horLineVarients}
                initial="initial"
                animate="animate"
                className="absolute w-1 top-1/3 left-2/3  bg-blue-500 translate-x-[-50%] translate-y-[-50%]"
            ></motion.div>
        </>
    );
};

export default GridLines;
