import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaForward, FaArrowRotateRight, FaGear } from "react-icons/fa6";
import { Patterns } from "./components/WinPatterns";
import MessageBox from "./components/MessageBox";
import Cell from "./components/Cell";
import GridLines from "./components/GridLines";
import Strike from "./components/Strike";
import Settings from "./components/Settings";

const App = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isResetOpen, setIsResetOpen] = useState(false);
    const [isMessageOpen, setIsMessageOpen] = useState(false);
    const [isGameEnd, setIsGameEnd] = useState(false);
    const [message, setMessage] = useState("");
    const [score, setScore] = useState({ x: 0, o: 0 });
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [currPlayer, setCurrPlayer] = useState("x");
    const [winPatt, setWinPatt] = useState([]);

    const [oPlayFirst, setOPlayFirst] = useState(false);
    const [isPVP, setIsPVP] = useState(true);

    useEffect(() => {
        resetBoard();
    }, [oPlayFirst]);

    useEffect(() => {
        resetBoard();
    }, [isPVP]);

    const setSettings = (oFirst) => {
        resetBoard();
        oFirst === true ? setCurrPlayer("o") : setCurrPlayer("x");
    };

    const closeMessage = () => {
        setIsMessageOpen(false);
        setIsResetOpen(false);
    };

    const openResetMessage = () => {
        setIsMessageOpen(true);
        setIsResetOpen(true);
    };

    const togglePlayer = async (index) => {
        if (board[index] !== "") return;
        // console.log(board);
        setBoard((prevBoard) => prevBoard.map((val, idx) => (idx === index && val === "" ? currPlayer : val)));
        currPlayer === "x" ? setCurrPlayer("o") : setCurrPlayer("x");
    };

    useEffect(() => {
        checkIfGameFinished(currPlayer);
    }, [board]); // Runs whenever board updates

    const checkIfGameFinished = async (thisPlayer) => {
        thisPlayer = thisPlayer === "x" ? "o" : "x";

        for (let i = 0; i < Patterns.length; i++) {
            let check = true;
            for (let j = 0; j < Patterns[0].length && check; j++) {
                const element = Patterns[i][j];
                if (board[element] !== thisPlayer) {
                    check = false;
                }
            }
            if (check) {
                setIsGameEnd(true);
                setWinPatt(Patterns[i]);
                setMessage(thisPlayer === "x" ? "'X' won!" : "'O' won!");
                setScore((prevScore) => ({
                    ...prevScore,
                    [thisPlayer]: prevScore[thisPlayer] + 1,
                }));
                setTimeout(() => {
                    setIsMessageOpen(true);
                }, 800);
                return;
            }
        }

        if (board.every((cell) => cell !== "")) {
            setIsGameEnd(true);
            setWinPatt([]);
            setMessage("No One Won.");
            setIsMessageOpen(true);
            return;
        }

        if (!isPVP && currPlayer === "o") {
            setTimeout(computerMove, 500);
        }
    };

    const computerMove = () => {
        if (currPlayer !== "o") return;

        const emptyIndices = board.map((cell, idx) => (cell === "" ? idx : null)).filter((idx) => idx !== null);

        if (emptyIndices.length === 0) return;

        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];

        setBoard((prevBoard) => {
            const newBoard = [...prevBoard];
            newBoard[randomIndex] = "o";
            return newBoard;
        });

        setCurrPlayer("x");
    };

    const resetScore = () => {
        setScore({ x: 0, o: 0 });
        closeMessage();
        resetBoard();
    };

    const resetBoard = () => {
        setBoard((prevBoard) => prevBoard.map((val, idx) => ""));
        setIsGameEnd(false);
        setWinPatt([]);
        oPlayFirst === true ? setCurrPlayer("o") : setCurrPlayer("x");
    };

    return (
        <div className="flex flex-col justify-center items-center relative text-white bg-neutral-800 w-screen min-h-screen overflow-hidden">
            <h1 className="absolute font-bold text-4xl mb-5 top-4 ">Tic Tac Toe</h1>
            <div
                className="absolute top-5 right-5 sm:right-8 cursor-pointer "
                onClick={() => {
                    setIsSettingsOpen(true);
                }}
            >
                <FaGear className="size-7 " />
            </div>
            <div className="flex gap-28 mt-2 sm:mt-16 mb-11 sm:mb-5 text-2xl">
                <div>
                    X : <span>{score.x}</span>
                </div>
                <div>
                    O : <span>{score.o}</span>
                </div>
            </div>

            <div className="mt-0 w-[93%] max-w-[400px] sm:w-[400px] p-3 h-auto aspect-square rounded-lg">
                <div className="w-full h-full grid grid-cols-3 relative overflow-hidden">
                    {board.map((item, index) => {
                        return (
                            <Cell
                                key={index}
                                index={index}
                                val={item}
                                togglePlayer={togglePlayer}
                            />
                        );
                    })}
                    <GridLines />
                    {isGameEnd && <Strike winPatt={winPatt} />}
                    {isGameEnd && <div className="absolute w-full h-full top-0 left-0 z-20 bg-transparent"></div>}
                </div>
            </div>
            <div className=" flex mt-14 gap-8 font-semibold">
                <motion.button
                    onClick={resetBoard}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-400 px-7 py-3 rounded-[12px] flex items-center cursor-pointer transition duration-75 hover:bg-blue-500"
                >
                    <FaForward /> <span className="ml-2">New Game</span>
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={openResetMessage}
                    className="bg-blue-400 px-7 py-3 rounded-[12px] flex items-center cursor-pointer transition duration-75 hover:bg-blue-500"
                >
                    <FaArrowRotateRight /> <span className="ml-2">Reset Score</span>
                </motion.button>
            </div>
            <MessageBox
                isResetOpen={isResetOpen}
                resetScore={resetScore}
                isMessageOpen={isMessageOpen}
                closeMessage={closeMessage}
                message={message}
            />
            <Settings
                isSettingsOpen={isSettingsOpen}
                setIsSettingsOpen={setIsSettingsOpen}
                setSettings={setSettings}
                oPlayFirst={oPlayFirst}
                setOPlayFirst={setOPlayFirst}
                isPVP={isPVP}
                setIsPVP={setIsPVP}
            />
        </div>
    );
};

export default App;
