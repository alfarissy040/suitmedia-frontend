import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";
import { Transition } from "@headlessui/react";
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
        <nav className="md:hidden fixed z-50 w-full">
            <div className="flex items-center px-4 py-2 ">
                {/* hamburger */}
                <MdMenu className="w-6 h-6 cursor-pointer text-zinc-800" onClick={toggleNavbar} />
                {/* logo */}
                <h1 className="flex-1 w-full text-center font-bold text-xl">Company</h1>
            </div>
            {/* nav items */}
            <Transition
                as={"div"}
                className="w-full h-screen bg-zinc-900 absolute inset-y-11 overflow-hidden"
                show={isOpen}
                enter="transition-all duration-300"
                enterFrom="bg-opacity-0"
                enterTo="bg-opacity-50"
                leave="transition-all duration-300"
                leaveFrom="bg-opacity-50"
                leaveTo="bg-opacity-0"
                onClick={handleCLickOutsite}
            >
                <Transition
                    as="ul"
                    show={isOpen}
                    ref={navMobileBox}
                    className="w-56 h-full bg-white"
                    enter="transition-all duration-150"
                    enterFrom="-translate-x-56"
                    enterTo="translate-x-0"
                    leave="transition-all duration-150"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-56"
                >
                    <li className="relative hover:bg-zinc-200">
                        <div className="px-3 py-2 w-full  transition cursor-pointer flex items-center" onClick={toggleNavbarItem}>
                            <p className="flex-1">About</p>
                            <MdKeyboardArrowDown className={clsx("w-5 h-5 text-zinc-900 transition-transform", !navItemDropdown && "-rotate-90")} />
                        </div>
                        <Transition
                            as="ul"
                            className={"w-full origin-top bg-zinc-100"}
                            show={navItemDropdown}
                            enter="transition-all duration-150"
                            enterFrom="scale-y-0 h-0"
                            enterTo="scale-y-100 h-auto"
                            leave="transition-all duration-150"
                            leaveFrom="scale-y-100 h-auto"
                            leaveTo="scale-y-0 h-0"
                        >
                            <li className="cursor-pointer px-3 py-2 hover:bg-zinc-800 hover:text-white uppercase">History</li>
                            <li className="cursor-pointer px-3 py-2 hover:bg-zinc-800 hover:text-white uppercase">Vision Mission</li>
                        </Transition>
                    </li>
                    <li className="px-3 py-2 w-full hover:bg-zinc-200 transition uppercase cursor-pointer">our work</li>
                    <li className="px-3 py-2 w-full hover:bg-zinc-200 transition uppercase cursor-pointer">our team</li>
                    <li className="px-3 py-2 w-full hover:bg-zinc-200 transition uppercase cursor-pointer">contact</li>
                </Transition>
            </Transition>
        </nav>
    );
};

export default MobileNavbar;
