import Image from "next/image";
import { Image1, Image2, Image3, Image4 } from "@/public/images";

const testimonials = [
	{
		name: "Sarah Kayode",
		title: "Event Planner",
		feedback:
			"Agricco made sourcing fresh produce for our large-scale event incredibly easy. The bulk options saved us both time and money, and the produce was fresh and beautifully packaged!",
		rating: 5,
		image: "/images/image1",
	},
	{
		name: "Muhammed A",
		title: "Restaurant Owner",
		feedback:
			"We've been using Agricco for months, and the quality of their products and vegetables is always outstanding. The delivery is quick, and the pricing is unbeatable for our restaurant's needs.",
		rating: 4,
		image: "/images/image2",
	},
	{
		name: "Ghalibah O.",
		title: "Farm Manager",
		feedback:
			"Thanks to Agricco's precision farming services, we've seen a 20% increase in our yields. Their insights and support have transformed our farm's productivity!",
		rating: 5,
		image: "/images/image3",
	},
	{
		name: "Tolu Olabayo",
		title: "Caterer",
		feedback:
			"Agricco's bulk purchasing options allowed us to cater a huge wedding effortlessly. Everything from the fruits to the proteins arrived fresh and on time—couldn't ask for more!",
		rating: 4,
		image: "/images/image4",
	},
	{
		name: "Muhammed A",
		title: "Restaurant Owner",
		feedback:
			"We've been using Agricco for months, and the quality of their products and vegetables is always outstanding. The delivery is quick, and the pricing is unbeatable for our restaurant's needs.",
		rating: 4,
		image: "/images/image2",
	},
	{
		name: "Ghalibah O.",
		title: "Farm Manager",
		feedback:
			"Thanks to Agricco's precision farming services, we've seen a 20% increase in our yields. Their insights and support have transformed our farm's productivity!",
		rating: 5,
		image: "/images/image3",
	},
	{
		name: "Tolu Olabayo",
		title: "Caterer",
		feedback:
			"Agricco's bulk purchasing options allowed us to cater a huge wedding effortlessly. Everything from the fruits to the proteins arrived fresh and on time—couldn&#39;t ask for more!",
		rating: 4,
		image: "/images/image4",
	},
];

const Testimonials = () => {
	return (
		<section className="bg-green-50 py-12 px-4 md:px-8">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-gray-800 mb-4">
					What Our Clients Are Saying
				</h2>
				<p className="text-gray-600">
					At Agricco, we pride ourselves on delivering fresh, high-quality
					produce and exceptional service. Don&#39;t just take our word for
					it—see what our satisfied clients have to say.
				</p>
			</div>

			{/* Scrollable container */}
			<div className="flex space-x-4 overflow-x-auto bg-green-100">
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
					>
						<Image
							className="rounded-full mb-4"
							src={testimonial.image}
							alt={`${testimonial.name}'s picture`}
							width={20}
							height={20}
						/>
						<h3 className="font-semibold text-xl text-gray-800">
							{testimonial.name}
						</h3>
						<p className="text-gray-500 text-sm">{testimonial.title}</p>
						<p className="text-gray-600 mt-4">{testimonial.feedback}</p>
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
				))}
			</div>
		</section>
	);
};

export default Testimonials;
