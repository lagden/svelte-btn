// Thanks @matyunya!
// https://github.com/matyunya/smelte/blob/master/src/utils/classes.js#L78

export function filterProps(reserved, props) {
	return Object.keys(props).reduce((acc, cur) => {
		const isTrue = cur.includes('$$') || cur.includes('Class') || reserved.includes(cur)
		return isTrue ? acc : {...acc, [cur]: props[cur]}
	}, {})
}
