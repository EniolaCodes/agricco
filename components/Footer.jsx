import Image from "next/image";
import Link from "next/link";
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
			className="w-full relative h-auto bg-cover bg-center bg-no-repeat mt-16"
			style={{ backgroundImage: "url('/images/pikaso_embed 2.svg')" }}
		>
			{/* Top Section */}
			<div className="pt-4 pl-4 pr-4 md:pt-16 md:pl-16 md:pr-16 md:pb-8 flex flex-col md:flex-row justify-between items-center">
				<Image src={Logo} width={150} height={150} alt="logo" />
				<ul className="flex flex-col gap-4 md:flex-row md:space-x-4  text-agriccoFooter text-[20px]">
					<li className="text-inherit">
						<Link href="/">Home</Link>
					</li>

					<li className="text-inherit">
						<Link href="/#about">About</Link>
					</li>
					<li className="text-inherit">
						<Link href="/#products">Products</Link>
					</li>
					<li className="text-inherit">
						<Link href="/#services">Services</Link>
					</li>
				</ul>
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
			<hr className="bg-agriccoSocial h-0.5 mt-4 md:mt-0" />

			{/* Bottom Section */}
			<div className="pt-4 pl-4 pr-4 pb-8 md:pt-8 md:pl-16 md:pr-16 flex flex-col md:flex-row justify-between items-center md:space-x-8">
				<div className="flex flex-col items-center justify-center">
					<h3 className="text-agriccoContact font-extrabold">Phone</h3>
					<p className="text-sm text-agriccoFooter">+(234) 7066375930</p>
				</div>

				{/* <hr className="md:hiddem bg-agriccoSocial w-full mt-1" /> */}

				<div className="flex flex-col items-center justify-center md:pl-28">
					<h3 className="text-agriccoContact font-extrabold">Email</h3>
					<p className="text-sm text-agriccoFooter">tech.agricco.io</p>
				</div>

				{/* <hr className="md:hiddem bg-agriccoSocial w-full mt-1" /> */}

				<div className="flex flex-col items-center justify-center">
					<h3 className="text-agriccoContact font-extrabold">Address</h3>
					<p className="text-sm text-agriccoFooter">
						Idi obi junction, Ologuneru, Ibadan-Eruwa Expy, Ibadan
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
