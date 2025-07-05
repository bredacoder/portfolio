"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

export const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.5,
}: {
	words: string | string[];
	className?: string;
	filter?: boolean;
	duration?: number;
}) => {
	const [scope, animate] = useAnimate();

	// Handle both string and array inputs
	const phrasesArray = Array.isArray(words) ? words : [words];

	useEffect(() => {
		// Calculate stagger delay based on total words across all phrases
		const totalWords = phrasesArray.reduce(
			(total, phrase) => total + phrase.split(" ").length,
			0,
		);

		animate(
			"span",
			{
				opacity: 1,
				filter: filter ? "blur(0px)" : "none",
			},
			{
				duration: duration ? duration : 1,
				delay: stagger(0.2),
			},
		);
	}, [animate, filter, duration, phrasesArray]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{phrasesArray.map((phrase, phraseIndex) => {
					const wordsArray = phrase.split(" ");
					return (
						<div
							key={`phrase-${phraseIndex}-${phrase.slice(0, 10)}`}
							className="block"
						>
							{wordsArray.map((word, wordIndex) => {
								return (
									<motion.span
										key={`word-${phraseIndex}-${wordIndex}-${word}`}
										className="dark:text-white text-black opacity-0"
										style={{
											filter: filter ? "blur(10px)" : "none",
										}}
									>
										{word}{" "}
									</motion.span>
								);
							})}
						</div>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-bold", className)}>
			<div>
				<div className=" dark:text-white text-black text-lg md:text-2xl text-center leading-snug tracking-wide">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
