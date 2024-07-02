
import Cards from "./_components/Cards/Cards";
import Clients from "./_components/Clients";
import Hero from "./_components/Hero";
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
        </>
    );
}
