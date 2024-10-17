import Image from "next/image";
import { ContactImg } from "@/public/images";

const Contact = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
			{/* Left: Image Section */}
			<div className="w-full md:w-1/2 flex justify-center p-4">
				<Image
					src={contactImg}
					alt="Contact Image"
					className="rounded-lg"
					width={500}
					height={500}
					objectFit="cover"
				/>
			</div>

			{/* Right: Form Section */}
			<div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold mb-6 text-gray-800">
					Get in Touch with us
				</h2>
				<form className="space-y-4">
					<div className="flex space-x-4">
						<input
							type="text"
							placeholder="First name"
							className="w-1/2 p-2 border border-gray-300 rounded-lg"
						/>
						<input
							type="text"
							placeholder="Last name"
							className="w-1/2 p-2 border border-gray-300 rounded-lg"
						/>
					</div>
					<div className="flex space-x-4">
						<input
							type="email"
							placeholder="Email"
							className="w-1/2 p-2 border border-gray-300 rounded-lg"
						/>
						<input
							type="text"
							placeholder="Phone no"
							className="w-1/2 p-2 border border-gray-300 rounded-lg"
						/>
					</div>
					<textarea
						placeholder="Message"
						className="w-full p-2 border border-gray-300 rounded-lg"
						rows="4"
					></textarea>
					<button
						type="submit"
						className="w-full bg-green-500 text-white p-2 rounded-lg font-semibold hover:bg-green-600"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
