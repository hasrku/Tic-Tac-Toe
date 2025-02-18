import { FaRegCircle } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

const Cell = ({ index, val, togglePlayer }) => {
    return (
        <div
            onClick={() => {
                togglePlayer(index);
            }}
            className="flex justify-center items-center w-full h-auto aspect-square text-5xl cursor-pointer"
        >
            {val === "o" ? <FaRegCircle className="size-10" /> : <></>}
            {val === "x" ? <IoCloseOutline className="size-18" /> : <></>}
        </div>
    );
};

export default Cell;
