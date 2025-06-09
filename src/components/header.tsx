"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { GitStarButton } from "./ui/git-star-button";

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 w-full z-50 transition-all duration-200 dark flex items-center justify-center",
				isScrolled
					? "bg-background/50 backdrop-blur-md border-b border-white/10"
					: "bg-transparent",
			)}
		>
			<div className="container h-16 px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 items-center">
				{/* Logo - Left side */}
				<div className="flex justify-start">
					<Link href="/" className="text-lg font-bold tracking-tighter">
						Breda Coder
					</Link>
				</div>

				{/* Navigation - Center */}
				<nav className="hidden md:flex items-center justify-center gap-6">
					<Link
						href="#about"
						className="text-md font-medium text-zinc-400 hover:text-white transition-colors"
					>
						About
					</Link>
					<Link
						href="#projects"
						className="text-md font-medium text-zinc-400 hover:text-white transition-colors"
					>
						Projects
					</Link>
					<Link
						href="#skills"
						className="text-md font-medium text-zinc-400 hover:text-white transition-colors"
					>
						Skills
					</Link>
					<Link
						href="#contact"
						className="text-md font-medium text-zinc-400 hover:text-white transition-colors"
					>
						Contact
					</Link>
				</nav>

				{/* Actions - Right side */}
				<div className="flex items-center justify-end gap-4">
					<GitStarButton className="hidden md:flex" />
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden text-zinc-200"
							>
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="bg-zinc-950 border-zinc-800">
							<nav className="flex flex-col gap-4 mt-8 p-4">
								<Link
									href="#about"
									className="text-lg font-medium text-zinc-200 hover:text-white transition-colors"
								>
									About
								</Link>
								<Link
									href="#projects"
									className="text-lg font-medium text-zinc-200 hover:text-white transition-colors"
								>
									Projects
								</Link>
								<Link
									href="#skills"
									className="text-lg font-medium text-zinc-200 hover:text-white transition-colors"
								>
									Skills
								</Link>
								<Link
									href="#contact"
									className="text-lg font-medium text-zinc-200 hover:text-white transition-colors"
								>
									Contact
								</Link>
								{/* <GitStarButton className="w-full" /> */}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}

export { Header };
