"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/public/images";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("#454545");

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? "fixed rounded-md h-20 w-full shadow-xl z-[100]"
					: "fixed rounded-md w-full h-20 z-[100]"
			}
		>
			<div className="flex justify-between items-center p-4">
				<Image src={Logo} width={100} height={100} alt="logo" className="" />
				<div className="flex justify-between items-center gap-8">
					<ul className="hidden md:flex space-x-4 text-agriccoGreen">
						<Link href="/">
							<li>Home</li>
						</Link>
						<Link href="/#about">
							<li>About</li>
						</Link>
						<Link href="#/products">
							<li>Products</li>
						</Link>
						<Link href="#/services">
							<li>Services</li>
						</Link>
						<Link href="#/contact">
							<li>Contact</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
					<Button variant="agricco" size="lg" className="hidden md:flex">
						Shop Now
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
