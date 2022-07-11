import { api } from './config';

export const getPets = async () => {
	try {
		const response = await api.get('/pets');
		return response.data;
	} catch (error) {
		alert(`Error: ${error.response.data}`);
	}
};

export const getPet = async id => {
	try {
		const response = await api.get(`/pets/${id}`);
		return response.data;
	} catch (error) {
		alert(`Error: ${error.response.data}`);
	}
};

export const getPetsBySpecie = async especie => {
	try {
		const response = await api.get(`/pets/especie/${especie}`);
		return response.data;
	} catch (error) {
		alert(`Error: ${error.response.data}`);
	}
};

export const postPets = async newPet => {
	try {
		const response = await api.post('/pets', newPet);
		alert('Seu Pet foi cadastrado com sucesso!');
		return response.data;
	} catch (error) {
		alert(`Error: ${error.response.data}`);
		throw new Error(`Error: ${error.response.data}`);
	}
};
