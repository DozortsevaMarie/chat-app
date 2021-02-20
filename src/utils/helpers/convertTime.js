export const convertTime = (s) => {
	return (
		(s - (s %= 60)) / 60 + (10 < s ? ":" : ":0") + ~~(s)
	);
}