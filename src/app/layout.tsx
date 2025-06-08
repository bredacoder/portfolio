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
	title: "Breda Coder",
	description: "Daniel Breda's portfolio",
	icons: {
		icon: "/favicon.ico",
	},
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
