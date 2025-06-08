"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface DownloadCVButtonProps {
	text?: string;
	href?: string;
	className?: string;
	delay?: number;
}

export function DownloadCVButton({
	text = "Download CV",
	href = "/static/files/resume.pdf",
	className,
	delay = 1.7,
}: DownloadCVButtonProps) {
	return (
		<motion.a
			href={href}
			download
			initial={{ opacity: 0, y: -32 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.75,
				ease: "easeOut",
				delay: delay,
			}}
			className={cn(
				"group relative inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors duration-300 font-medium",
				className,
			)}
		>
			<span className="relative">
				{text}
				<span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-fuchsia-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
			</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
				className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
			>
				<path
					fillRule="evenodd"
					d="M10 2a.75.75 0 0 1 .75.75v8.69l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V2.75A.75.75 0 0 1 10 2ZM3.5 15.5a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1-.75-.75Z"
					clipRule="evenodd"
				/>
			</svg>
		</motion.a>
	);
}
