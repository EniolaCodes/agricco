import Image from "next/image";

const Card = ({ image }) => {
	return (
		<div className="bg-gray-100 h-full p-4 rounded-lg shadow-md">
			<Image
				src={image}
				alt="Card Image"
				className="object-cover rounded-lg"
                width={160}
                height={180}
			/>
		</div>
	);
};

export default Card;
