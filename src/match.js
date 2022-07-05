// filtros da busca do usuario logado
const a = {
	especie: 'cachorro',
	idade_max: 3,
	sexo: 'M',
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

const calculateMatch = (obj1, obj2) => {
	const obj1Length = Object.keys(obj1).length;
	const obj2Length = Object.keys(obj2).length;
	const smaller = obj1Length < obj2Length ? obj1 : obj2;
	const greater = smaller === obj1 ? obj2 : obj1;
	const smallObjKeys = Object.keys(smaller);

	let count = smallObjKeys.reduce((counter, key) => {
		if (greater[key] === smaller[key]) return ++counter;

		// if (
		// 	smaller[key] <= greater[`${key}_max`] &&
		// 	smaller[key] >= greater[`${key}_min`]
		// )
		// 	return ++counter;

		if (smaller[key] <= greater[`${key}_max`]) return ++counter;

		return counter;
	}, 0);

	return (count / Math.min(obj1Length, obj2Length)) * 100;
};

console.log(calculateMatch(a, b));
