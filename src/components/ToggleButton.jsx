import { motion } from "framer-motion";

const ToggleButton = ({ check, setCheck }) => {
    const width = 50;

    return (
        <motion.div
            onClick={() => {
                setCheck(!check);
            }}
            style={{ width: `${width}px` }}
            className={` h-auto aspect-2/1  rounded-full cursor-pointer relative`}
            animate={{ backgroundColor: check ? "#3B82F6" : "#A3A3A3" }}
            transition={{ type: "tween", duration: 0.2 }}
        >
            <motion.div
                className={`absolute h-[85%] top-[7.5%] w-auto aspect-square bg-white rounded-full `}
                animate={{ x: check ? width - width * 0.46 : width * 0.03 }}
                transition={{ type: "tween", duration: 0.2 }}
            />
        </motion.div>
    );
};

export default ToggleButton;
