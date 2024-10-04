"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Background_img } from "@/public/images";

const Hero = () => {
	return (
		<div className="p-16">
			<Navbar />
			<div className="mt-32 flex flex-col gap-4 justify-start">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-[900px]">
					Welcome to Agricco - Your One-Stop Supermarket and Agricultural
					Platform.
				</h1>
				<p className="mb-8 text-lg md:text-xl max-w-[850px]">
					Discover the freshest groceries, premium proteins, and farm-fresh
					produce all in one place. Shop with ease and explore even more!
				</p>
			</div>
			<Button variant="agricco" size="lg">
				Shop Now
			</Button>
			<Image
				src={Background_img}
				alt="Woman"
				width={400}
				height={400}
				className="absolute inset-0 w-full h-full object-cover opacity-20"
			/>
		</div>
	);
};

export default Hero;
