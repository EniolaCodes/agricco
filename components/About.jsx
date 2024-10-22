import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AbtImg } from "@/public/images";

const About = () => {
	return (
		<div
			className="h-screen mt-16 flex flex-col md:flex-row items-center"
			id="about"
		>
			{/* right */}
		<div className="mr-12">
			<Image src={AbtImg} width={600} height={600} alt="logo" className="object-cover" />
		</div>
			

			{/* left */}
			<div className="w-full p-4 md:w-1/2 h-full md:h-[600px]">
				<div className="mb-4 mt-4">
					<span className="bg-agriccoSubtle text-agriccoLabel px-3 py-1 rounded-full text-xl">
						About us
					</span>
				</div>
				<div className="">
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
