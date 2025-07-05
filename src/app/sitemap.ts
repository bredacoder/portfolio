import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://www.breda-coder.com";

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		// Add more pages as you create them
		// {
		//   url: `${baseUrl}/projects`,
		//   lastModified: new Date(),
		//   changeFrequency: 'weekly',
		//   priority: 0.8,
		// },
		// {
		//   url: `${baseUrl}/about`,
		//   lastModified: new Date(),
		//   changeFrequency: 'monthly',
		//   priority: 0.5,
		// },
	];
}
