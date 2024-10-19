import { Button } from "@/components/ui/button";

const Contact = () => {
	return (
		<div className="relative p-4 md:p-16 overflow-hidden rounded-lg">
			{/* Background Image Section */}
			<div
				className="absolute w-full h-screen bg-cover bg-center bg-no-repeat rounded-lg"
				style={{
					backgroundImage: "url('/images/contact.svg')",
				}}
			>
				{/* Overlay */}
				<div className="absolute inset-0 bg-agriccoBg opacity-70 rounded-lg" />
			</div>

			{/* Form Section */}
			<div className="relative z-40 flex justify-start items-center h-full">
				<div className="w-full p-12">
					<h2 className="text-[31px] md:text-[61px] font-extrabold mb-6 text-agriccoGreen">
						Get in Touch with us
					</h2>
					 <form className="space-y-4 bg-white rounded-lg shadow-lg p-8 w-[320px] md:w-[653px]">
						<div className="flex space-x-4">
              				<input
                				type="text"
                				placeholder="First Name"
                				className=" w-1/2 p-2 border border-gray-300 rounded-lg text-sm"
              				/>
              				<input
                				type="text"
                				placeholder="Last Name"
                				className=" w-1/2 p-2 border border-gray-300 rounded-lg text-sm"
              				/>
            			</div>
						<div className="flex space-x-4">
              				<input
                				type="email"
                				placeholder="Your Email"
                				className="w-1/2 p-2 border border-gray-300 rounded-lg text-sm "
              				/>
              				<input
                				type="text"
                				placeholder="Phone Number"
                				className="w-1/2 p-2 border border-gray-300 rounded-lg text-sm "
              				/>
            			</div>
						<textarea
              				placeholder="Message"
              				className="w-full p-2 border border-gray-300 rounded-lg text-sm"
           	   				rows="4"
          				></textarea>
            			<Button variant="agricco" size="lg" className="full-width-on-xs">
            				Submit
            			</Button>
					 </form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
