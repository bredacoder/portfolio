"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
	return (
		<div className="bg-zinc-950 flex flex-col items-center justify-center">
			<Header />
			<Hero />

			<div className="container px-4 md:px-6 h-[1170px]">
				<h1 className="text-4xl font-bold">About me</h1>
			</div>
		</div>
	);
}
