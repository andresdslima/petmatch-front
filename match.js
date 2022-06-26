// filtros da busca do usuario logado
const a = {
	especie: 'cachorro',
	idade_min: 1,
	idade_max: 3,
	sexo: 'M',
	peso_min: 5,
	peso_max: 10,
	tamanho_max: 50,
	porte: 100,
	cor: 'preta',
	raça: 'pitbull',
	castrado: true,
	vacinado: true,
};

// pet do BD
const b = {
	especie: 'cachorro',
	idade: 2,
	sexo: 'M',
	peso: 10,
	tamanho: 25,
	porte: 100,
	cor: 'branca',
	raça: 'pitbull',
	castrado: false,
	vacinado: false,
};

const findMatch = (first, second) => {
	const firstLength = Object.keys(first).length;
	const secondLength = Object.keys(second).length;
	const smaller = firstLength < secondLength ? first : second;
	const greater = smaller === first ? second : first;
	const smallObjKeys = Object.keys(smaller);

	let count = smallObjKeys.reduce((counter, key) => {
		if (greater[key] === smaller[key]) return ++counter;

		if (
			smaller[key] <= greater[`${key}_max`] &&
			smaller[key] >= greater[`${key}_min`]
		)
			return ++counter;

		if (smaller[key] <= greater[`${key}_max`]) return ++counter;

		return counter;
	}, 0);

	return (count / Math.min(firstLength, secondLength)) * 100;
};

console.log(findMatch(a, b));
