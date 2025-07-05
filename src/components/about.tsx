import { BlurIn } from "./ui/blurin";

interface Experience {
	id: string;
	title: string;
	company: string;
	location: string;
	period: string;
	description: string;
	isCurrent: boolean;
	companyUrl?: string;
}

const experiences: Experience[] = [
	{
		id: "flip-pay",
		title: "Software Engineer (Contract)",
		company: "Flip Pay",
		location: "Dublin, Ireland",
		period: "Sep 2023 - Present",
		description:
			"Developing and maintaining digital content monetization products for multiple clients using React.js, Next.js, TypeScript, Angular, C#, and .NET. Collaborating with cross-functional teams and working directly with clients to deliver high-quality solutions using TDD practices.",
		isCurrent: true,
		companyUrl: "https://www.flip-pay.com/",
	},
	{
		id: "northflow",
		title: "Fullstack Developer (Freelance)",
		company: "Northflow",
		location: "Dallas, USA",
		period: "Jul 2024 - Present",
		description:
			"Lead development of multiple platforms including the 1616 RBAC dashboard (10,000+ users) and Northflow's SaaS podcast management platform with AI features. Built with React.js, Next.js, TypeScript, GraphQL, Nest.js, and integrated AWS services. Implemented robust CI/CD pipelines using Docker, GitHub Actions, and comprehensive testing strategies.",
		isCurrent: true,
		companyUrl: "https://northflow.io/",
	},
	{
		id: "go-media-group",
		title: "Front End Developer (Freelance)",
		company: "Go Media Group",
		location: "Florida, USA",
		period: "Aug 2023 - Dec 2023",
		description:
			"Developed and maintained E-Commerce web applications using Angular, PHP, Shopify and WordPress, implementing responsive design and optimizing customized components.",
		isCurrent: false,
	},
	{
		id: "semantix",
		title: "Software Engineer (Full Time)",
		company: "Semantix",
		location: "São Paulo, Brazil",
		period: "Dec 2020 - May 2023",
		description:
			"Created and maintained integrations with Brazil's largest marketplaces (Magazine Luiza and Via Varejo) driving R$50,000 daily revenue. Developed end-to-end solutions including microservices, APIs, webhooks, and React.js applications using Node.js, MongoDB, Redis, RabbitMQ, and Azure. Managed complete project lifecycles from requirements to deployment with monitoring via ElasticSearch and Kibana.",
		isCurrent: false,
		companyUrl: "https://www.semantix.ai/",
	},
];

function About() {
	return (
		<section
			id="about"
			className="bg-zinc-950 relative h-full flex items-center justify-center py-16"
		>
			<div className="container px-4 md:px-6 mx-auto">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-12 md:mb-16">
						<BlurIn
							className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-400 mb-4"
							text="About Me"
						/>
						<div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
					</div>

					{/* Main Content */}
					<div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
						{/* Mobile Layout - Column */}
						<div className="flex flex-col gap-6 lg:hidden">
							{/* Profile Picture */}
							<div className="w-48 h-48 sm:w-56 sm:h-56 bg-zinc-900/70 rounded-2xl border border-zinc-700/50 overflow-hidden mx-auto">
								<img
									src="/static/images/me-b&w.JPEG"
									alt="Daniel Breda"
									className="w-full h-full object-cover"
								/>
							</div>

							{/* All Content */}
							<div className="space-y-4">
								<h3 className="text-lg font-bold text-zinc-50">
									Hey there! I'm Daniel Breda
								</h3>
								<p className="text-zinc-400 text-sm leading-relaxed text-justify">
									A <span className="text-white">software engineer</span>{" "}
									specialized in{" "}
									<span className="text-white">
										React, Next.js, Node.js, Go, and TypeScript
									</span>
									.
								</p>
								<p className="text-zinc-400 text-sm leading-relaxed text-justify">
									I love working on projects that are{" "}
									<span className="text-white">
										authentic, modern, and creative
									</span>{" "}
									— easy to use and that truly bring value to people.
								</p>
								<p className="text-zinc-400 text-sm leading-relaxed text-justify">
									My work style always aims to write{" "}
									<span className="text-white">
										clean, scalable, and maintainable code
									</span>
									, while my daily drive is to continuously evolve, learn, and
									build amazing things.
								</p>
								<p className="text-zinc-400 text-sm leading-relaxed text-justify">
									In my free time, I enjoy music production, playing guitar and
									keyboard, skating, going to the beach, and having a good
									coffee.
								</p>

								{/* Location */}
								<div className="flex items-center gap-3">
									<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
									<span className="text-zinc-400 text-sm">
										Working remotely from{" "}
										<span className="text-white">Florianópolis, Brazil</span>
									</span>
								</div>
							</div>
						</div>

						{/* Desktop Layout - Left Column */}
						<div className="hidden lg:block lg:col-span-1">
							{/* Profile Picture */}
							<div className="w-80 h-80 bg-zinc-900/70 rounded-2xl border border-zinc-700/50 overflow-hidden">
								<img
									src="/static/images/me-b&w.JPEG"
									alt="Daniel Breda"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						{/* Desktop Layout - Right Column */}
						<div className="hidden lg:block lg:col-span-2 space-y-6">
							{/* Main Description */}
							<div className="space-y-4">
								<h3 className="text-2xl font-bold text-zinc-50">
									Hey there! I'm Daniel Breda
								</h3>
								<p className="text-zinc-400 text-base leading-relaxed">
									A <span className="text-white">software engineer</span>{" "}
									specialized in{" "}
									<span className="text-white">
										React, Next.js, Node.js, Go, and TypeScript
									</span>
									.
								</p>
								<p className="text-zinc-400 text-base leading-relaxed">
									I love working on projects that are{" "}
									<span className="text-white">
										authentic, modern, and creative
									</span>{" "}
									— easy to use and that truly bring value to people.
								</p>
								<p className="text-zinc-400 text-base leading-relaxed">
									My work style always aims to write{" "}
									<span className="text-white">
										clean, scalable, and maintainable code
									</span>
									, while my daily drive is to continuously evolve, learn, and
									build amazing things.
								</p>
								<p className="text-zinc-400 text-base leading-relaxed">
									In my free time, I enjoy music production, playing guitar and
									keyboard, skating, going to the beach, and having a good
									coffee.
								</p>
							</div>

							{/* Location */}
							<div className="flex items-center gap-3">
								<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
								<span className="text-zinc-400 text-base">
									Working remotely from{" "}
									<span className="text-white">Florianópolis, Brazil</span>
								</span>
							</div>
						</div>
					</div>

					{/* Career Section */}
					<div className="mt-16 lg:mt-20">
						<div className="mb-8">
							<h2 className="text-2xl md:text-3xl font-bold text-zinc-50 mb-2">
								Career
							</h2>
							<div className="w-12 h-0.5 bg-blue-500 rounded-full" />
						</div>

						<div className="space-y-6">
							{experiences.map((experience) => (
								<div
									key={experience.id}
									className={`border-l-2 ${
										experience.isCurrent ? "border-blue-500" : "border-zinc-700"
									} pl-6`}
								>
									<div className="flex items-start justify-between">
										<div>
											<h3 className="text-lg font-semibold text-zinc-50">
												{experience.title}
											</h3>
											<p className="text-zinc-400 text-sm">
												{experience.companyUrl ? (
													<a
														href={experience.companyUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="text-white hover:text-zinc-300 transition-colors underline underline-offset-2"
													>
														{experience.company}
													</a>
												) : (
													experience.company
												)}{" "}
												— {experience.location}
											</p>
										</div>
										<div className="flex items-center gap-2">
											<span className="text-zinc-500 text-sm">
												{experience.period}
											</span>
											{experience.isCurrent && (
												<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
											)}
										</div>
									</div>
									<p className="text-zinc-400 text-sm mt-3 leading-relaxed">
										{experience.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export { About };
