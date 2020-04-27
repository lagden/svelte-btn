// Thanks @matyunya!
// https://github.com/matyunya/smelte/blob/master/src/utils/classes.js#L78

/**
 * Remove as propriedades reservadas do objeto
 * @param {object} props    - Objeto
 * @param {array}  reserved - Chaves
 * @return {object} Retorna um objeto filtrado
 */
export function filterProps(props, reserved = []) {
	return Object.keys(props).reduce((acc, cur) => {
		const isTrue = cur.includes('$$') || cur.includes('Class') || reserved.includes(cur)
		return isTrue ? acc : {...acc, [cur]: props[cur]}
	}, {})
}
