// Thanks @matyunya!
// https://github.com/matyunya/smelte/blob/master/src/utils/classes.js#L78

/**
 * Remove as propriedades reservadas do objeto
 * @param {object} props   - Objeto
 * @param {array} reserved - Chaves
 * @return {object} Retorna um objeto filtrado
 */
export function filterProps(props, reserved = []) {
	let result = {}
	for (const prop of Object.keys(props)) {
		const validate = prop.includes('$$') || prop.includes('Class') || reserved.includes(prop)
		if (validate === false) {
			result = {...result, [prop]: props[prop]}
		}
	}
	return result
}
