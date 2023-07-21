import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import clsx from "clsx";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navItemDropdown, setNavItemDropdown] = useState(false);
    const navMobileBox = useRef();

    const toggleNavbar = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);
    const toggleNavbarItem = useCallback(() => {
        setNavItemDropdown(!navItemDropdown);
    }, [navItemDropdown]);

    const handleCLickOutsite = (e) => {
        if (navMobileBox.current && !navMobileBox.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    return (
        <nav className="md:hidden fixed z-50 w-full bg-white">
            <div className="flex items-center px-4 py-2 ">
                {/* hamburger */}
                <MdMenu className="w-6 h-6 cursor-pointer text-zinc-800" onClick={toggleNavbar} />
                {/* logo */}
                <h1 className="flex-1 w-full text-center font-bold text-xl">Company</h1>
            </div>
            {/* nav items */}
            <AnimatePresence>
                {isOpen && (
                    <div className="w-full h-screen absolute inset-y-11 overflow-hidden flex" onClick={handleCLickOutsite}>
                        <motion.ul ref={navMobileBox} initial={{ x: -224 }} animate={{ x: 0 }} exit={{ x: -224 }} transition={{ bounce: 0 }} className="w-56 h-full bg-white left-0 z-40">
                            <li className="relative hover:bg-zinc-200">
                                <div className="px-3 py-2 w-full transition cursor-pointer flex items-center" onClick={toggleNavbarItem}>
                                    <p className="flex-1">About</p>
                                    <MdKeyboardArrowDown className={clsx("w-5 h-5 text-zinc-900 transition-transform", !navItemDropdown && "-rotate-90")} />
                                </div>
                                {navItemDropdown && (
                                    <ul className={"w-full origin-top bg-zinc-100"}>
                                        <li className="cursor-pointer px-3 py-2 hover:bg-zinc-800 hover:text-white uppercase">History</li>
                                        <li className="cursor-pointer px-3 py-2 hover:bg-zinc-800 hover:text-white uppercase">Vision Mission</li>
                                    </ul>
                                )}
                            </li>
                            <li className="px-3 py-2 w-full hover:bg-zinc-200 transition uppercase cursor-pointer">our work</li>
                            <li className="px-3 py-2 w-full hover:bg-zinc-200 transition uppercase cursor-pointer">our team</li>
                            <li className="px-3 py-2 w-full hover:bg-zinc-200 transition uppercase cursor-pointer">contact</li>
                        </motion.ul>
                        {/* bg */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} className="bg-zinc-900 w-full h-full absolute" onClick={toggleNavbarItem} />
                    </div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default MobileNavbar;
