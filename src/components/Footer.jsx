import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="w-full p-5 flex flex-col items-center justify-center bg-zinc-800">
            <p className="text-white text-sm">Copyright @ 2016 PT Company</p>
            <div className="flex items-center gap-x-3 text-white mt-2">
                {/* fb */}
                <FaFacebookSquare className="w-5 h-5" />
                {/* twitter */}
                <FaTwitter className="w-5 h-5" />
            </div>
        </footer>
    );
};

export default Footer;
