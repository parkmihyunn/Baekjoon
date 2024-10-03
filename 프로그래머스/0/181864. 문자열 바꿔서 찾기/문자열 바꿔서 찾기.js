const solution = (str, part) => {
	return [...str].map(str => str === 'A' ? 'B' : 'A').join('').indexOf(part) === -1 ? 0 : 1;
};