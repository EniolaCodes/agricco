import Image from "next/image";

const testimonials = [
	{
		name: "Sarah Kayode",
		title: "Event Planner",
		feedback:
			'"Agricco made sourcing fresh produce for our large-scale event incredibly easy. The bulk options saved us both time and money, and the produce was fresh and beautifully packaged!"',
		rating: 5,
		image: "/images/image1.svg",
	},
	{
		name: "Muhammed A",
		title: "Restaurant Owner",
		feedback:
			'"We&#39;ve been using Agricco for months, and the quality of their products and vegetables is always outstanding. The delivery is quick, and the pricing is unbeatable for our restaurant&#39;s needs."',
		rating: 4,
		image: "/images/image2.svg",
	},
	{
		name: "Ghalibah O.",
		title: "Farm Manager",
		feedback:
			'"Thanks to Agricco&apos;s precision farming services, we&apos;ve seen a 20% increase in our yields. Their insights and support have transformed our farm&apos;s productivity!"',
		rating: 5,
		image: "/images/image3.svg",
	},
	{
		name: "Tolu Olabayo",
		title: "Caterer",
		feedback:
			'"Agricco;s bulk purchasing options allowed us to cater a huge wedding effortlessly. Everything from the fruits to the proteins arrived fresh and on time—couldn&apos;t ask for more!"',
		rating: 4,
		image: "/images/image4.svg",
	},
	{
		name: "Sarah Kayode",
		title: "Event Planner",
		feedback:
			'"Agricco made sourcing fresh produce for our large-scale event incredibly easy. The bulk options saved us both time and money, and the produce was fresh and beautifully packaged!"',
		rating: 5,
		image: "/images/image1.svg",
	},
	{
		name: "Muhammed A",
		title: "Restaurant Owner",
		feedback:
			'"We&apos;ve been using Agricco for months, and the quality of their products and vegetables is always outstanding. The delivery is quick, and the pricing is unbeatable for our restaurant&apos;s needs."',
		rating: 4,
		image: "/images/image2.svg",
	},
	{
		name: "Ghalibah O.",
		title: "Farm Manager",
		feedback:
			'"Thanks to Agricco&apos;s precision farming services, we&apos;ve seen a 20% increase in our yields. Their insights and support have transformed our farm&apos;s productivity!"',
		rating: 5,
		image: "/images/image3.svg",
	},
	{
		name: "Tolu Olabayo",
		title: "Caterer",
		feedback:
			'"Agricco&apos;s bulk purchasing options allowed us to cater a huge wedding effortlessly. Everything from the fruits to the proteins arrived fresh and on time—couldn&apos;t ask for more!"',
		rating: 4,
		image: "/images/image4.svg",
	},
];

const Testimonials = () => {
	return (
		<section className="bg-green-50 py-12 px-4 md:px-8">
			<div className="text-center mb-12">
				<div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-lg mb-2">
					Testimonials
				</div>
				<h2 className="text-3xl font-bold text-gray-800 mb-4">
					What Our Clients Are Saying
				</h2>
				<p className="text-gray-600">
					At Agricco, we pride ourselves on delivering fresh, high-quality
					produce and exceptional service. Don&apos;t just take our word for
					it—see what our satisfied clients have to say.
				</p>
			</div>

			{/* Responsive grid with horizontal scrolling and hidden scrollbar */}
			<div className="overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
				<div className="flex space-x-6">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="relative min-w-[90%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] bg-white rounded-lg h-auto shadow-md p-6 flex flex-col border-l border-r border-b border-green-500"
						>
							<div className="absolute top-0 left-0 w-full h-2 bg-green-500 rounded-t-2xl" />
							<div className="flex items-center mb-4">
								<Image
									className="rounded-full"
									src={testimonial.image}
									alt={`${testimonial.name}'s picture`}
									width={50}
									height={50}
								/>
								<div className="ml-4">
									<h3 className="font-semibold text-xl text-gray-800">
										{testimonial.name}
									</h3>
									<p className="text-gray-500 text-sm">{testimonial.title}</p>
								</div>
							</div>
							<div className="mt-4 text-center">
								<p className="text-gray-600">{testimonial.feedback}</p>
								<div className="mt-4">
									{Array.from({ length: testimonial.rating }).map(
										(_, starIndex) => (
											<span key={starIndex} className="text-yellow-400">
												★
											</span>
										)
									)}
									{Array.from({ length: 5 - testimonial.rating }).map(
										(_, starIndex) => (
											<span key={starIndex} className="text-gray-300">
												★
											</span>
										)
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
