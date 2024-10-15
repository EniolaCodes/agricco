import Image from "next/image";
import {
	Service_img,
	ServiceImg1,
	ServiceImg2,
	ServiceImg3,
} from "@/public/images";

//reusable component to display the image, title, description and read more link
const Card = ({ imageSrc, title, description }) => {
	return (
		<div className="bg-white shadow-md rounded-lg overflow-hidden">
			<Image src={imageSrc} alt={title} className="w-full h-103 object-cover" />
			<div className="p-4">
				<h3 className="text-xl text-agriccoTitle font-bold mb-2">{title}</h3>
				<p className="text-sm text-agriccoBody mb-4">{description}</p>
				<a
					href="#"
					className="text-agriccoLabel text-sm font-bold flex items-center"
				>
					Read More
					<span className="ml-2">&rarr;</span>
				</a>
			</div>
		</div>
	);
};

const serviceCards = [
	{
		imageSrc: ServiceImg1,
		title: "Precision Farming",
		description:
			"Precision farming uses data analytics, soil testing, and irrigation optimization to boost crop productivity, reduce waste, and promote sustainability.",
	},
	{
		imageSrc: ServiceImg2,
		title: "Marketplace for Agricultural Inputs",
		description:
			"The marketplace offers farmers a convenient platform to access high-quality seeds, fertilizers, and pesticides, ensuring efficient crop production.",
	},
	{
		imageSrc: ServiceImg3,
		title: "Storage for Farm Produce",
		description:
			"Storage services, like cold storage and warehousing, preserve perishable goods and protect non-perishables, ensuring quality before market distribution.",
	},
];

const Services = () => {
	return (
		<div className="mt-16">
			<div className="text-center py-10">
				<span className="bg-agriccoSubtle text-agriccoLabel px-3 py-1 mb-4 rounded-full text-xl">
					Our Services
				</span>
				<h1 className="text-3xl font-bold text-agriccoTitle mt-4">
					Your trusted partner in fresh, bulk agricultural products
				</h1>
				<p className="mt-4 text-agriccoBody">
					Experience quality and reliability with our fresh, bulk agricultural
					products. Your trusted partner for all your farming and food needs
				</p>
			</div>
			<div className="flex flex-col md:flex-row">
				<div className="w-full p-4 md:w-1/2 md:p-16 h-full">
					<div
						className="rounded-lg"
						style={{ backgroundImage: "url('/images/serviceBg.svg')" }}
					>
						<Image
							src={Service_img}
							width={400}
							height={300}
							alt="service image"
						/>
					</div>
				</div>
				<div className="w-full p-4 md:w-1/2 md:p-16">
					<div
						className=" text-white p-6 rounded-lg shadow-lg"
						style={{ backgroundImage: "url('/images/servicebg2.svg')" }}
					>
						<h2 className="text-2xl font-bold mb-4">Effortless Bulk Buying</h2>
						<p className="mb-4">
							Bulk purchasing of farm produce and proteins for events offers
							significant convenience by allowing you to buy large quantities at
							once, saving time and simplifying logistics. It&#339;s also
							cost-effective, as bulk orders typically come with discounted
							pricing, all while maintaining the freshness and high quality of
							the products.
						</p>
						<h3 className="font-bold mb-2">Benefits</h3>
						<ul className="list-style-circle list-inside mb-4">
							<li>Affordable pricing</li>
							<li>Wide variety of options</li>
							<li>Convenient delivery</li>
							<li>Customization options</li>
						</ul>
						<div className="flex justify-end">
							<button className=" text-white px-4 py-2  border-2 border-white rounded-md font-bold">
								Book
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center py-10">
				<div className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm mb-2">
					Our Services
				</div>
				<h2 className="text-3xl font-bold mt-2">
					Innovative Solutions for Your Agricultural Needs
				</h2>
				<p className="mt-4 text-gray-600 text-center">
					Experience quality and reliability with our fresh, bulk agricultural
					products. Your trusted partner for all your farming and food needs
				</p>
			</div>
			{/* service images */}
			<div className="p-4 md:p-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{serviceCards.map((serviceCard, index) => (
						<Card
							key={index}
							imageSrc={serviceCard.imageSrc}
							title={serviceCard.title}
							description={serviceCard.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
