import Image from "next/image";

const Services = () => {
	return (
		<div className="">
			<div className="text-center py-10">
				<span className="bg-agriccoSubtle text-agriccoLabel px-3 py-1 mb-4 rounded-full text-xl">
					Our Services
				</span>
				<h1 className="text-3xl font-bold text-agriccoTitle">
					Your trusted partner in fresh, bulk agricultural products
				</h1>
				<p className="mt-4 text-agriccoBody">
					Experience quality and reliability with our fresh, bulk agricultural
					products. Your trusted partner for all your farming and food needs
				</p>
			</div>
			<div className="flex justify-center items-center py-10">
				<div className="w-1/2 p-4"></div>
				<div className="w-1/2 p-4">
					<div className="bg-green-900 text-white p-6 rounded-lg shadow-lg">
						<h2 className="text-2xl font-bold mb-4">Effortless Bulk Buying</h2>
						<p className="mb-4">
							Bulk purchasing of farm produce and proteins for events offers
							significant convenience by allowing you to buy large quantities at
							once, saving time and simplifying logistics. It&339;s also
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
						<div className="flex">
<button className=" text-white px-4 py-2  border-2 border-white rounded-md font-bold">
							Book Now
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
				<p className="mt-4 text-gray-600">
					Experience quality and reliability with our fresh, bulk agricultural
					products. Your trusted partner for all your farming and food needs
				</p>
			</div>
		</div>
	);
};

export default Services;
