export const sum = (...values: number[]) => values.reduce((prev, current) => prev + current, 0);

export function avg(...values: number[]): number
{
	if (!values.length)
		throw `values must be an array with at least one element`;
	
	return sum(...values) / values.length;
}

export function median(...values: number[]): number
{
	if (!values.length)
		throw `values must be an array with at least one element`;
	
	return values[Math.floor((values.length / 2))];
}

export function stddev(...values: number[]): number
{
	if (!values.length)
		throw `values must be an array with at least one element`;
	
	const mean = avg(...values);
	return Math.sqrt((1/values.length) * sum(...values.map(v => (v - mean)**2)));
}
