async function getRepoStars(repo: string): Promise<number> {
	const res = await fetch(`https://api.github.com/repos/${repo}`);
	const data = await res.json();
	return data.stargazers_count;
}

export { getRepoStars };
