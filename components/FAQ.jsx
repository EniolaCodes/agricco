import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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

	return (
		<div className="text-center py-8">
			<div className="text-center">
				<div className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm mb-2">
					FAQs
				</div>
				<h2 className="text-3xl font-bold text-center mb-8">
					Frequently Asked Questions
				</h2>
			</div>
			{/* <Accordion>
				{faqs.map((faq, index) => (
					<AccordionItem key={index}>
						<AccordionTrigger className="flex items-center justify-between">
							<p>{faq.question}</p>
							
						</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion> */}

			{/* <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion> */}


	<Accordion type="single" collapsible className="w-full">
  	{faqs.map((faq, index) => (
					<AccordionItem key={index}>
						<AccordionTrigger className="flex items-center justify-between">
							<p>{faq.question}</p>
							
						</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
</Accordion>

			
		</div>
	);
};

export default FAQ;
