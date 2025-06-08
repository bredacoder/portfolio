import { Github, Linkedin } from "lucide-react";

export const SocialList = [
	{
		name: "Github",
		link: "https://github.com/bredacoder",
		icon: Github,
	},
	{
		name: "Linkedin",
		link: "https://linkedin.com/in/bredacoder",
		icon: Linkedin,
	},
];

function Social() {
	return (
		<div
			className='fixed bottom-0 right-8 z-20 hidden w-10 items-center text-zinc-400 after:mx-auto after:block
      after:h-50 after:w-[1px] after:bg-zinc-400 after:content-[""] md:block
      '
		>
			<ul className="mb-10 flex flex-col items-center justify-center gap-6 text-center">
				{SocialList.map((item) => {
					const { icon: Icon } = item;

					return (
						<li key={item.name}>
							<a
								target="_blank"
								href={item.link}
								aria-label={item.name}
								rel="noreferrer"
							>
								<Icon
									className="transition-all hover:translate-y-[-2px] hover:text-zinc-100"
									size={22}
								/>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export { Social };
