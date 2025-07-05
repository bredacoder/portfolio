import { BlurIn } from "./ui/blurin";
import { DownloadCVButton } from "./ui/download-cv-button";
import { Spotlight } from "./ui/spotlight";
import { SpotlightButton } from "./ui/spotlight-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function Hero() {
	return (
		<div className="h-screen w-full rounded-md flex items-center justify-center bg-background/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
			<Spotlight />

			<div className="container px-4 md:px-6 flex flex-col items-center justify-center relative z-10 w-full">
				<BlurIn
					className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-400 bg-opacity-50"
					text="Daniel Breda"
				/>

				<BlurIn
					className="text-xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-600 bg-opacity-50"
					text="Software Engineer"
				/>

				<TextGenerateEffect
					words={["Turning ideas into code, and code into value."]}
					className="mt-4 max-w-lg md:max-w-2xl"
				/>

				<div className="flex items-center gap-4 mt-8">
					<SpotlightButton text="See projects" />
					<DownloadCVButton />
				</div>
			</div>
		</div>
	);
}

export { Hero };
