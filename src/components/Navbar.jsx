import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
    return (
        <>
            {/* desktop navbar */}
            <nav className="bg-white md:flex md:items-center md:justify-between lg:px-40 md:px-20 hidden z-50">
                {/* logo */}
                <h1 className="text-2xl font-bold">Company</h1>
                {/* nav items */}
                <ul className="flex items-center">
                    <li className="relative">
                        <div className="px-4 py-3 text-zinc-900 hover:bg-zinc-200 cursor-pointer transition group">
                            <span className="uppercase">about</span>
                            <ul className="absolute inset-x-0 inset-y-12 origin-top-left bg-white w-44 transition hidden group-hover:block shadow rounded z-50">
                                <div className="px-4 py-3 bg-white hover:text-white hover:bg-zinc-800 cursor-pointer">History</div>
                                <div className="px-4 py-3 bg-white hover:text-white hover:bg-zinc-800 cursor-pointer">Vision Mission</div>
                            </ul>
                        </div>
                    </li>
                    <li className="px-4 py-3 text-zinc-900 hover:bg-zinc-200 uppercase cursor-pointer transition">Our Work</li>
                    <li className="px-4 py-3 text-zinc-900 hover:bg-zinc-200 uppercase cursor-pointer transition">our team</li>
                    <li className="px-4 py-3 text-zinc-900 hover:bg-zinc-200 uppercase cursor-pointer transition">contact</li>
                </ul>
            </nav>
            {/* mobile navbar */}
            <MobileNavbar />
        </>
    );
};

export default Navbar;
