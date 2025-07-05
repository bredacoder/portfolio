import { Social } from "@/components/social";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Local custom fonts
const biotif = localFont({
	src: [
		{
			path: "../../public/static/font/Biotif-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/static/font/Biotif-RegularItalic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/static/font/Biotif-Book.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/static/font/Biotif-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/static/font/Biotif-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-biotif",
});

const neuzeitGrotesk = localFont({
	src: [
		{
			path: "../../public/static/font/NeuzeitGrotesk-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-neuzeit-grotesk",
});

export const metadata: Metadata = {
	title: {
		default: "Daniel Breda - Software Engineer | Full Stack Developer",
		template: "%s | Daniel Breda",
	},
	description:
		"Experienced Software Engineer specializing in full-stack development, modern web technologies, and scalable solutions. Turning ideas into code, and code into value.",
	keywords: [
		"Daniel Breda",
		"Software Engineer",
		"Full Stack Developer",
		"Web Developer",
		"React",
		"Next.js",
		"TypeScript",
		"JavaScript",
		"Node.js",
		"Portfolio",
		"Frontend Developer",
		"Backend Developer",
	],
	authors: [
		{
			name: "Daniel Breda",
			url: "https://www.breda-coder.com/",
		},
	],
	creator: "Daniel Breda",
	publisher: "Daniel Breda",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://www.breda-coder.com/"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.breda-coder.com/",
		title: "Daniel Breda - Software Engineer | Full Stack Developer",
		description:
			"Experienced Software Engineer specializing in full-stack development, modern web technologies, and scalable solutions. Turning ideas into code, and code into value.",
		siteName: "Daniel Breda Portfolio",
		images: [
			{
				url: "/og-image",
				width: 1200,
				height: 630,
				alt: "Daniel Breda - Software Engineer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Daniel Breda - Software Engineer | Full Stack Developer",
		description:
			"Experienced Software Engineer specializing in full-stack development, modern web technologies, and scalable solutions.",
		images: ["/og-image"],
		creator: "@bredacoder_",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
	},
	manifest: "/site.webmanifest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${biotif.variable} ${neuzeitGrotesk.variable} antialiased relative dark`}
			>
				<Social />
				{children}
			</body>
		</html>
	);
}
