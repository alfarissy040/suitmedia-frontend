import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carousel from "./components/carousel/Carousel";
import OurValues from "./components/outvalues/OurValues";
import "./app.css";

const App = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <OurValues />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
