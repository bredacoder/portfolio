import { ImageResponse } from "next/og";

export async function GET() {
	try {
		return new ImageResponse(
			<div
				style={{
					background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					fontFamily: "system-ui, -apple-system, sans-serif",
					color: "white",
					position: "relative",
				}}
			>
				{/* Grid background */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage:
							"radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)",
						backgroundSize: "40px 40px",
					}}
				/>

				{/* Content */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
						zIndex: 1,
					}}
				>
					<h1
						style={{
							fontSize: "72px",
							fontWeight: "bold",
							margin: 0,
							background: "linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
						}}
					>
						Daniel Breda
					</h1>
					<p
						style={{
							fontSize: "32px",
							margin: "20px 0",
							background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							fontWeight: "bold",
						}}
					>
						Software Engineer
					</p>
					<p
						style={{
							fontSize: "24px",
							margin: 0,
							color: "#9ca3af",
							maxWidth: "800px",
							lineHeight: 1.3,
						}}
					>
						Turning ideas into code, and code into value.
					</p>
				</div>

				{/* Bottom branding */}
				<div
					style={{
						position: "absolute",
						bottom: "40px",
						right: "40px",
						display: "flex",
						alignItems: "center",
						color: "#6b7280",
						fontSize: "20px",
					}}
				>
					breda-coder.com
				</div>
			</div>,
			{
				width: 1200,
				height: 630,
			},
		);
	} catch (error) {
		console.log(error instanceof Error ? error.message : "Unknown error");
		return new Response("Failed to generate the image", {
			status: 500,
		});
	}
}
