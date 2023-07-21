import { MdLightbulbOutline, MdAccountBalance, MdBalance } from "react-icons/md";
import OurValueItem from "./OurValueItem";
const OurValues = () => {
    return (
        <div className="lg:px-40 lg:py-20 md:px-14 md:py-10 px-4 py-4 flex flex-col items-center justify-center">
            <h2 className="text-xl uppercase font-semibold my-5">our values</h2>
            <div className="flex md:flex-row flex-col items-center gap-3">
                <OurValueItem Icon={MdLightbulbOutline} title={"innovative"} border="border-[#df5342]" bg="bg-[#ea7c6f]" />
                <OurValueItem Icon={MdAccountBalance} title={"loyalty"} border="border-[#577956]" bg="bg-[#6a996f]" />
                <OurValueItem Icon={MdBalance} title={"respect"} border="border-[#5182a3]" bg="bg-[#5696c2]" last />
            </div>
        </div>
    );
};

export default OurValues;
