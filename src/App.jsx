import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Carousel from "./components/carousel/Carousel";
import OurValues from "./components/outvalues/OurValues";

const App = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <OurValues />
            <Contact />
        </>
    );
};

export default App;
