import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

const MessageBox = ({ isResetOpen, resetScore, isMessageOpen, closeMessage, message }) => {
    return (
        <AnimatePresence>
            {isMessageOpen && (
                <div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="absolute z-30 top-[50%] left-1/2 translate-y-[-50%] translate-x-[-50%] w-[300px] h-auto aspect-2/1 bg-white rounded-4xl px-6 pb-7 pt-4 shadow-md "
                    >
                        <div
                            onClick={closeMessage}
                            className="px-1 py-1 ml-auto mb-2 w-max border-2 border-red-700 rounded-full cursor-pointer"
                        >
                            <IoCloseOutline className="text-red-700 size-5" />
                        </div>
                        {isResetOpen && (
                            <div className="flex flex-col">
                                <p className="text-blue-800 text-2xl font-semibold">Are you sure you want to reset the score?</p>
                                <div className="flex items-center justify-center mt-5 px-5">
                                    <div
                                        onClick={resetScore}
                                        className="px-9 py-1 border-2 border-green-700 rounded-4xl cursor-pointer"
                                    >
                                        <FaCheck className="text-green-700 size-7 " />
                                    </div>
                                </div>
                            </div>
                        )}
                        {!isResetOpen && <p className="text-black flex justify-center items-center text-2xl">{message}</p>}
                    </motion.div>
                    <div
                        onClick={closeMessage}
                        className="absolute top-0 left-0 z-20 w-screen h-screen bg-transparent  flex justify-center items-center "
                    ></div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default MessageBox;
