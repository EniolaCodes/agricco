import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



export default function Home() {
	return (
		<div className="">
			
			<Hero/>
			<About/>
			<Products/>
			<Services/>
			<Testimonials/>
			<FAQ/>
			<Contact/>
			<Footer/>
		</div>
	);
}
