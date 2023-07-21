import bg from "../../assets/bg.jpg";
import bgAbout from "../../assets/about-bg.jpg";
import clsx from "clsx";
import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const data = [
    {
        id: 1,
        label: "this is a place where technology & creativity fused into digital chemistry",
        img: bg,
    },
    {
        id: 2,
        label: "we don't have the best but we have the greatest team",
        img: bgAbout,
    },
];

const Carousel = () => {
    const maxIndex = 1;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("left");

    const handleNext = useCallback(() => {
        setDirection("right");
        var nextIndex = currentIndex + 1;
        if (nextIndex > maxIndex) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(() => nextIndex);
        }
    }, [currentIndex]);
    const handlePrevious = useCallback(() => {
        setDirection("left");
        var nextIndex = currentIndex - 1;
        if (nextIndex < 0) {
            setCurrentIndex(maxIndex);
        } else {
            setCurrentIndex(() => nextIndex);
        }
    }, [currentIndex]);
    const handleDot = (index) => {
        if (index > currentIndex) {
            handlePrevious();
        } else {
            handleNext();
        }
    };

    const slideVariants = {
        hiddenRight: {
            x: "80%",
            opacity: 0,
        },
        hiddenLeft: {
            x: "-80%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
        },
    };
    return (
        <div className="w-full aspect-[4_3] overflow-hidden relative md:pt-0 pt-10">
            <div className="w-full h-full bg-zinc-900 overflow-hidden">
                <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                        motion
                        initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                        animate={"visible"}
                        exit={direction === "left" ? "hiddenRight" : "hiddenLeft"}
                        variants={slideVariants}
                        transition={{ bounce: 0 }}
                        key={data[currentIndex].id}
                        className="w-full h-full overflow-hidden relative"
                    >
                        {/* img */}
                        <img src={data[currentIndex].img} alt="background" className="w-full h-full object-cover" />
                        {/* label */}
                        <div className="w-full h-full flex-1 absolute inset-0 flex items-end md:justify-start justify-center">
                            <div className="px-3 py-2 bg-black bg-opacity-70 h-fit text-white font-bold relative uppercase lg:inset-x-56 lg:mb-36 lg:w-[650px] lg:text-2xl md:inset-x-12 md:mb-16  md:w-[450px] md:text-lg w-72 mb-8 text-sm">
                                {data[currentIndex].label}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="w-full h-full absolute inset-0 my-auto flex items-center justify-between px-2 md:pt-0 pt-10">
                {/* prev */}
                <span className="rounded-full md:p-2 p-1 border border-white cursor-pointer hover:bg-zinc-200 group transition z-10">
                    <MdKeyboardArrowLeft className="md:w-5 md:h-5 w-4 h-4 text-white group-hover:text-zinc-800 transition" onClick={handlePrevious} />
                </span>
                {/* next */}
                <span className="rounded-full md:p-2 p-1 border border-white cursor-pointer hover:bg-zinc-200 group transition z-10">
                    <MdKeyboardArrowRight className="md:w-5 md:h-5 w-4 h-4 text-white group-hover:text-zinc-800 transition" onClick={handleNext} />
                </span>
            </div>
            {/* cicle */}
            <div className="absolute w-full py-3 flex items-center justify-center gap-3 inset-x-0 bottom-0 z-10">
                {Array.apply(null, Array(maxIndex + 1)).map((_, index) => (
                    <div className={clsx("md:w-3 w-2 aspect-square rounded-full cursor-pointer", index === currentIndex ? "bg-zinc-100" : "bg-zinc-500")} key={index} onClick={() => handleDot(index)} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
