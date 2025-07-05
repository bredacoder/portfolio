"use client";

import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
	return (
		<div className="bg-zinc-950">
			<Header />

			<Hero />

			<About />
		</div>
	);
}
