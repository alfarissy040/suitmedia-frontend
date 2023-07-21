/* eslint-disable react/prop-types */
const OurValueItem = ({ Icon, title, border, bg, last }) => {
    return (
        <div className="flex items-center md:flex-row flex-col">
            <div className={`lg:p-8 md:p-4 px-3 py-2 border-2 flex flex-col flex-1 items-center h-auto ${border} ${bg}`}>
                {/* icon */}
                <Icon className="w-6 h-6 text-white mb-2" />
                {/* title */}
                <h3 className="font-bold text-lg uppercase text-white">{title}</h3>
                {/* content */}
                <p className="text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, blanditiis. Velit sed voluptates maxime nesciunt.</p>
            </div>
            {/* triangle */}
            {!last && <div className={`hidden md:block border-t-[12px] border-b-[12px] border-l-[12px] border-t-transparent border-b-transparent ${border}`} />}
            {!last && <div className={`md:hidden border-t-[12px] border-r-[12px] border-l-[12px] border-r-transparent border-l-transparent ${border}`} />}
        </div>
    );
};

export default OurValueItem;
