import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoCloseOutline, IoLogoGithub } from "react-icons/io5";
import ToggleButton from "./ToggleButton";

const Settings = ({ isSettingsOpen, setIsSettingsOpen, oPlayFirst, setOPlayFirst, isPVP, setIsPVP }) => {
    const openSettingsVarients = {
        initial: { opacity: 1, width: "0px", height: "100vh" },
        animate: {
            opacity: 1,
            width: "300px",
            height: "100vh",
            transition: { type: "spring", stiffness: 200, damping: 20 },
        },
        exit: {
            opacity: 0,
            width: "0px",
            transition: { type: "spring", stiffness: 200, damping: 15 },
        },
    };

    return (
        <AnimatePresence>
            {isSettingsOpen && (
                <>
                    <motion.div
                        variants={openSettingsVarients}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed flex flex-col items-center z-40 top-0 right-0 w-[0px] h-screen bg-neutral-700 rounded-l-2xl"
                    >
                        <IoCloseOutline
                            onClick={() => {
                                setIsSettingsOpen(false);
                            }}
                            className="absolute cursor-pointer size-9 top-5 left-5 text-neutral-300"
                        />
                        <h1 className="mt-16 text-2xl font-semibold">Settings</h1>

                        <div className="grid w-4/5 grid-cols-[1fr_auto] items-center mt-8 gap-5">
                            <p className="text-xl flex flex-col ">
                                First Player
                                <span className="text-sm text-neutral-300">{oPlayFirst ? "O will play first" : "X will play first"}</span>
                            </p>
                            <ToggleButton
                                check={oPlayFirst}
                                setCheck={setOPlayFirst}
                            />
                            <p className="text-xl flex flex-col">
                                PvP / PvC
                                <span className="text-sm text-neutral-300">{isPVP ? "Player Vs Player" : "Player Vs Computer"}</span>
                            </p>
                            <ToggleButton
                                check={isPVP}
                                setCheck={setIsPVP}
                            />
                        </div>

                        <a
                            href="https://github.com/hasrku/"
                            className="absolute bottom-3 flex gap-3 items-center"
                        >
                            <IoLogoGithub className="size-6" />
                            <span className="font-mono text-lg">hasrku</span>
                        </a>
                    </motion.div>
                    <div
                        onClick={() => {
                            setIsSettingsOpen(false);
                        }}
                        className="absolute h-screen w-screen top-0 left-0 z-35"
                    ></div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Settings;
