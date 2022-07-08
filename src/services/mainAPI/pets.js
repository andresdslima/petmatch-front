import { api } from './config';

export const getPets = async () => {
	try {
		const response = await api.get('/pets');
		console.log(response);
		return response.data;
	} catch (error) {
		alert(`Error: ${error.response.data}`);
	}
};

export const getPet = async id => {
	try {
		const response = await api.get(`/pets/${id}`);
		console.log(response);
		return response.data;
	} catch (error) {
		alert(`Error: ${error.response.data}`);
	}
};

export const getPetsBySpecie = async especie => {
	try {
		const response = await api.get(`/pets/especie/${especie}`);
		console.log(response);
		return response.data;
	} catch (error) {
		alert(`Error: ${error.response.data}`);
	}
};

export const postPets = async newPet => {
	try {
		const response = await api.post('/pets', newPet);
		return response.data;
	} catch (error) {
		throw new Error(`Error: ${error.response.data}`);
	}
};
