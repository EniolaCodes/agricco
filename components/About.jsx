import { Button } from "@/components/ui/button";
import Image from "next/image";
import { About_img } from "@/public/images";

const About = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			{/* right */}
			<div className="w-1/2 ">
				<Image
					src={About_img}
					width={900}
					height={600}
					alt="Person unpacking groceries in a kitchen"
					className=""
				/>
			</div>
			{/* left */}
			<div className="w-1/2">
				<div className="mb-4">
					<span className="bg-agriccoSubtle text-agriccoLabel px-3 py-1 rounded-full text-xl">
						About me
					</span>
				</div>
				<div className="max-w-[700px]">
					<h1 className="text-4xl font-bold text-agriccoTitle mb-4">
						Your Source for essentials, Fresh produce, and Agriculture solutions
					</h1>
					<p className="text-agriccoBody text-base">
						<strong>At Agricco</strong>, we are proud to be your trusted
						provider of fresh farm produce, proteins, and a wide range of
						household essentials. Our supermarket offers a variety of products,
						including fresh and processed foods, confectioneries, groceries,
						cosmetics, and more—all at competitive prices.
					</p>
					<p className="text-agriccoBody text-base mb-4">
						We also offer convenient bulk purchasing options for businesses,
						event planners, and individuals, providing customized solutions and
						fast delivery. Additionally, Agricco supports the agricultural
						community with precision farming services, storage solutions, and a
						marketplace for essential inputs.
					</p>
					<p className="text-agriccoBody text-base mb-4">
						Shop confidently with Agricco, where quality, convenience, and
						customer satisfaction are our top priorities.
					</p>
					<Button variant="agricco" size="lg" className="full-width-on-xs">
						About us
					</Button>
				</div>
			</div>
		</div>
	);
};

export default About;
