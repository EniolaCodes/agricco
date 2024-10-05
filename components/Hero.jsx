"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<div
			className="w-full relative h-screen bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: "url('/images/image 3.svg')" }}
		>
			<div className="absolute inset-0 bg-agriccoBg opacity-70" />
			<Navbar />
			<div className="z-40 relative p-4 md:p-16">
				<div className="flex flex-col gap-4 justify-start mt-28">
					<h1 className="text-[#EDF9F2] text-4xl md:text-5xl lg:text-6xl font-extrabold md:max-w-[900px]">
						Welcome to Agricco - Your One-Stop Supermarket and Agricultural
						Platform.
					</h1>
					<p className="text-agriccoDark mb-8 text-lg md:text-xl max-w-[850px]">
						Discover the freshest groceries, premium proteins, and farm-fresh
						produce all in one place. Shop with ease and explore even more!
					</p>
				</div>
				<Button variant="agricco" size="lg" className="full-width-on-xs">
					Shop Now
				</Button>
			</div>
		</div>
	);
};

export default Hero;
