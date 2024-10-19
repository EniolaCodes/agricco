"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
	{
		question: "What types of products does Agricco offer?",
		answer:
			"Agricco offers a wide range of fresh, high-quality agricultural products, including...",
	},
	{
		question: "Can I place bulk orders for events or large gatherings?",
		answer:
			"Agricco offers a wide range of fresh, high-quality agricultural products, including...",
	},
	{
		question: "How do you ensure the quality and freshness of your products?",
		answer:
			"Agricco offers a wide range of fresh, high-quality agricultural products, including...",
	},
	{
		question: "What delivery options are available?",
		answer:
			"Agricco offers a wide range of fresh, high-quality agricultural products, including...",
	},
	{
		question: "Can I customize my order based on my specific needs?",
		answer:
			"Agricco offers a wide range of fresh, high-quality agricultural products, including...",
	},
];

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		if (openIndex === index) {
			setOpenIndex(null); // Close the currently open FAQ
		} else {
			setOpenIndex(index); // Open the clicked FAQ
		}
	};

	return (
		<div className="text-center py-16">
			<div className="text-center">
				<div className="inline-block bg-green-100 text-agriccoLabel px-3 py-1 rounded-full text-[20px] mb-2">
					FAQs
				</div>
				<h2 className="text-[31px] md:text-[39px] text-agriccoTitle font-bold text-center mb-8">
					Frequently Asked Questions
				</h2>
			</div>
			<div className="space-y-4 px-6 md:px-28">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className={`border rounded-lg ${
							openIndex === index ? "bg-green-100" : "bg-green-50"
						} transition-all duration-300`}
					>
						<button
							className="w-full flex justify-between items-center p-4 text-left font-semibold focus:outline-none"
							onClick={() => toggleFAQ(index)}
						>
							<span className="text-agriccoTitle text-[20px]">{faq.question}</span>
							<span >
								{openIndex === index ? <FaMinus /> : <FaPlus />}
							</span>
						</button>
						{openIndex === index && (
							<div className="p-4 text-[20px] text-agriccoTitle flex flex-start">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
