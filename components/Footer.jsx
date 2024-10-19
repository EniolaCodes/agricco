import Image from "next/image";
import { Logo } from "@/public/images";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer
			className="w-full relative h-[215px] bg-cover bg-center bg-no-repeat mt-16"
			style={{ backgroundImage: "url('/images/pikaso_embed 2.svg')" }}
		>
			<div className="pt-4 pl-4 pr-4 md:pt-16 md:pl-16 md:pr-16 md:pb-8 flex flex-col md:flex-row justify-between items-center">
				<Image src={Logo} width={150} height={150} alt="logo" className="" />
				<nav className=" flex-col md:flex-row space-x-4">
					<a href="/" className="text-agriccoFooter">
						Home
					</a>
					<a href="/about" className="text-agriccoFooter">
						About
					</a>
					<a href="/products" className="text-agriccoFooter">
						Products
					</a>
					<a href="/services" className="text-agriccoFooter">
						Services
					</a>
				</nav>
				<div className="flex space-x-4 mt-4 md:mt-0">
					<a href="#" className="text-agriccoSocial">
						<FaTwitter size={20} />
					</a>
					<a href="#" className="text-agriccoSocial">
						<FaInstagram size={20} />
					</a>
					<a href="#" className="text-agriccoSocial">
						<FaWhatsapp size={20} />
					</a>
					<a href="#" className="text-agriccoSocial">
						<FaFacebookF size={20} />
					</a>
				</div>
            </div>
            <hr className="bg-agriccoSocial"/>
            <div className="pt-4 pl-4 pr-4 md:pt-16 md:pl-16 md:pr-16 md:pb-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex">
                        <div className="flex flex-col">
						    <h3 className="font-bold text-gray-300">Phone</h3>
						    <p className="text-sm">+(234) 7066375930</p>
					    </div>
                        <div className="flex flex-col">
						    <h3 className="font-bold text-gray-300">Email</h3>
						    <p className="text-sm">tech.agricco.io</p>
					    </div>
                        <div className="flex flex-col">
						    <h3 className="font-bold text-gray-300">Address</h3>
						    <p className="text-sm">
							Idi obi junction, Ologuneru, Ibadan-Eruwa Expy, Ibadan
						    </p>
					    </div>
                    </div>
            </div>	
		</footer>
	);
};
export default Footer;
