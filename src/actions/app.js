export function increment(count_) {
	return {
		type: 'INCREMENT',
		count: count_
	}
}

export function decrement(count_) {
	return {
		type: 'DECREMENT',
		count: count_
	}
}