import { Button } from "@/components/ui/button";
import Image from "next/image";
import { About_img } from "@/public/images";

const About = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center min-h-screen mt-8" id="about">
			{/* <div className="w-full md:w-1/2 relative">
				<div className="bg-agriccoFoundation h-10 w-[70%]" />
				<div className="bg-agriccoFoundation absolute top-0 left-0 h-full w-8" />
				<div className="bg-agriccoFoundation absolute top-5 right-0  h-1 w-[30%]" />
				<div className="bg-agriccoFoundation absolute bottom-0 right-28 h-full w-1" />
				<div className="bg-agriccoFoundation absolute bottom-5 right-0 h-1 w-[30%]" />
				<Image
					src={About_img}
					width={500}
					height={500}
					alt="Person unpacking groceries in a kitchen"
					className=""
				/>
				<div className="bg-agriccoFoundation h-10 w-[70%]" />				
			</div> */}

			<div className="w-full md:w-1/2 relative flex justify-center items-center">
				<div className="bg-agriccoFoundation p-10">
					<Image
						src={About_img}
						width={500}
						height={500}
						alt="Person unpacking groceries in a kitchen"
						className=""
					/>
				</div>
			</div>

			{/* left */}
			<div className="w-full p-4 md:w-1/2">
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
