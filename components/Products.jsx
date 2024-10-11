import Image from "next/image";
import { Button } from "@/components/ui/button";

const Products = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between p-8">
			<div className="md:w-1/2">
				<span className="bg-agriccoSubtle text-agriccoLabel text-xl py-2 px-4 rounded-full mb-8">
					Shop with us @Agricco NG
				</span>
				<h1 className="text-5xl font-bold mb-4">
					Your One-Stop Shop for Freshness and Convenience
				</h1>
				<p className="text-agriccoDark text-base mb-6">
					At Agricco Supermarket, find a wide range of household essentials,
					including confectionery, groceries, and cosmetics—all in one
					convenient location. Plus, explore our selection of fresh, locally
					sourced farm produce and high-quality meats. We’re committed to
					providing affordable products that meet our community’s needs.
				</p>
				<Button variant="agricco" size="lg" className="full-width-on-xs">
					Explore
				</Button>
			</div>
			<div className="md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0"></div>
		</div>
	);
};

export default Products;
