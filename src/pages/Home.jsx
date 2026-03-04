import Layout from "../layout/Layout";
import Navbar from "../ui/navbar/Navbar";
import Hero from "./components/Hero";
import Footer from "../ui/footer/Footer";
import Servicios from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import CTA from "./components/Contact";
import Benefits from "./components/Benefits";
import ContactWsp from "../components/ButtonWsp";

const Home = () => {
    return(
        <Layout>
            <Navbar/>
            <Hero/>
            <Servicios/>
            <About/>
            <Benefits/>
            <Projects/>
            <CTA />
            
            <ContactWsp/>
            <Footer/>
        </Layout>
    )
}

export default Home;
