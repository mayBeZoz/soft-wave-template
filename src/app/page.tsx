
import Cards from "./_components/Cards/Cards";
import Clients from "./_components/Clients";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Plans from "./_components/Plans";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";

export default function Home() {
    return (
        <>
            <Hero/>
            <Clients/>
            <Cards/>
            <Services/>
            <Testimonials/>
            <Plans/>
            <Contact/>
        </>
    );
}
