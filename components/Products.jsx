"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const imagesColumn1 = [
	"/images/ofada 1.svg",
	"/images/semo 1.svg",
	"/images/image-removebg-preview (1) 1.svg",
];
const imagesColumn2 = [
	"/images/image-removebg-preview 1.svg",
	"/images/./20230208_171951 1.svg",
	"/images/ofada 1.svg",
];

const Products = () => {
	const [isMobile, setIsMobile] = useState(false);

	// Check if the screen width is mobile size
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768); 
		};

		handleResize(); // Check on component mount
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Combine images from both columns for mobile view
	const combinedImages = [...imagesColumn1, ...imagesColumn2];

	return (
		<div
			className="relative flex flex-col md:h-[683px] md:flex-row items-center justify-between"
			style={{ backgroundImage: "url('/images/Shop with us.svg')" }}
		>
			<div className="absolute inset-0 bg-agriccoBg opacity-90" />

			<div className="w-full p-4 md:p-16 md:w-1/2 z-40 relative ">
				<span className="bg-agriccoSubtle text-agriccoLabel text-xl py-2 px-4 rounded-full mb-8">
					Shop with us @Agricco NG
				</span>
				<h1 className="text-agriccoWhite text-5xl font-bold mb-12 mt-8">
					Your One-Stop Shop for Freshness and Convenience
				</h1>
				<p className="text-agriccoDark text-base mb-12 text-justify">
					At Agricco Supermarket, find a wide range of household essentials,
					including confectionery, groceries, and cosmetics—all in one
					convenient location. Plus, explore our selection of fresh, locally
					sourced farm produce and high-quality meats. We&#39;re committed to
					providing affordable products that meet our community&#39;s needs.
				</p>
				<Button variant="agricco" size="lg" className="full-width-on-xs">
					Explore
				</Button>
			</div>
			<div className="flex h-full overflow-hidden">
				{/* Mobile View (Single Column with Combined Images) */}
				{isMobile ? (
					<motion.div
						className="flex flex-col space-y-6"
						initial={{ y: 0 }}
						animate={{ y: [-600, 0] }}
						transition={{
							repeat: Infinity,
							duration: 10,
							ease: "linear",
						}}
					>
						{combinedImages.map((image, index) => (
							<Card key={index} image={image} />
						))}
						{/* Repeat the same set of images to create the infinite effect */}
						{combinedImages.map((image, index) => (
							<Card key={`repeat-${index}`} image={image} />
						))}
					</motion.div>
				) : (
					/* Desktop View (Two Columns) */
					<div className="flex p-16 gap-8">
						{/* First Column */}
						<motion.div
							className="flex flex-col space-y-6"
							initial={{ y: 0 }}
							animate={{ y: [-600, 0] }}
							transition={{
								repeat: Infinity,
								duration: 10,
								ease: "linear",
							}}
						>
							{imagesColumn1.map((image, index) => (
								<Card key={index} image={image} />
							))}
							{/* Repeat the same set of images to create the infinite effect */}
							{imagesColumn1.map((image, index) => (
								<Card key={`repeat-${index}`} image={image} />
							))}
						</motion.div>

						{/* Second Column */}
						<motion.div
							className="flex flex-col space-y-6"
							initial={{ y: 0 }}
							animate={{ y: [600, 0] }}
							transition={{
								repeat: Infinity,
								duration: 10,
								ease: "linear",
							}}
						>
							{imagesColumn2.map((image, index) => (
								<Card key={index} image={image} />
							))}
							{/* Repeat the same set of images to create the infinite effect */}
							{imagesColumn2.map((image, index) => (
								<Card key={`repeat-${index}`} image={image} />
							))}
						</motion.div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Products;
