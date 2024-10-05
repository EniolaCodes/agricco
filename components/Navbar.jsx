"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo, Logo2 } from "@/public/images";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("#454545");

	const handleNav = () => {
		setNav(!nav);
	};

	// useEffect(() => {
	// 	const handleShadow = () => {
	// 		if (window.scrollY >= 90) {
	// 			setShadow(true);
	// 		} else {
	// 			setShadow(false);
	// 		}
	// 	};
	// 	window.addEventListener("scroll", handleShadow);
	// }, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? "fixed rounded-md shadow-xl z-[100]"
					: "fixed rounded-md z-[100] shadow-xl navSize w-full"
			}
		>
			<div className="flex gap-8 justify-between items-center p-4">
				<Image src={Logo} width={150} height={150} alt="logo" className="" />
				<div className="flex justify-between items-center gap-8">
					<ul className="hidden md:flex gap-4 text-agriccoGreen text-base font-normal">
						<li className="text-inherit font-[inherit]">
							<Link href="/" className="font-[inherit]">Home</Link>
						</li>
						<li className="text-inherit font-[inherit]">
							<Link href="/#about">About</Link>
						</li>

						<li className="text-inherit font-[inherit]">
							<Link href="/#products">Products</Link>
						</li>
						<li className="text-inherit font-[inherit]">
							<Link href="/#services">Services</Link>
						</li>
						<li className="text-inherit font-[inherit]">
							<Link href="/#contact" >Contact</Link>
						</li>
					</ul>
					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
					<Button variant="agricco" size="lg" className="hidden md:flex">
						Shop Now
					</Button>
				</div>
			</div>
			<div
				className={
					nav ? `md:hidden fixed left-0 top-0 w-full h-screen bg-black/70` : ""
				}
			>
				<div
					className={
						nav
							? `fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-500`
							: `fixed left-[-100%] top-0 ease-in duration-500`
					}
				>
					<div className="flex w-full items-center justify-between p-4">
						<Link href="/">
							<Image src={Logo2} alt="/" width={120} height={120} />
						</Link>

						<div
							onClick={handleNav}
							className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
						>
							<AiOutlineClose />
						</div>
					</div>
					<div className="p-4 flex flex-col gap-8">
						<ul className="flex flex-col gap-4 text-[39px]">
							<Link href="/">
								<li onClick={() => setNav(false)} className=" text-inherit">
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li onClick={() => setNav(false)} className="text-inherit">
									About
								</li>
							</Link>
							<Link href="/#skills">
								<li onClick={() => setNav(false)} className="text-inherit">
									Services
								</li>
							</Link>
							<Link href="/#projects">
								<li onClick={() => setNav(false)} className="text-inherit">
									Products
								</li>
							</Link>
							<Link href="/#contact">
								<li onClick={() => setNav(false)} className="text-inherit">
									Contact
								</li>
							</Link>
						</ul>
						<Button variant="agricco" className="full-width-on-xs">
							Shop Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
