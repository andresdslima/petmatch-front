import React from 'react';
// import catProfile from '../../assets/images/catProfile.png';
import iconCheck from '../../assets/iconCheck.svg';
import * as S from './styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPetList } from '../../store/modules/pets';
import { getPet } from '../../services/mainAPI/pets';

const PetPageProfile = () => {
	const pet = useSelector(state => state.petsSlice.pets);
	const dispatch = useDispatch();
	const petId = parseInt(window.location.search.split('?')[1]);

	useEffect(() => {
		getPet(petId).then(pets => dispatch(setPetList(pets)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<S.ContainerProfile>
			<S.ContainerCard>
				<S.ContainerImgPet>
					<S.ImgPet src={pet.petImage} alt="foto do pet" />
				</S.ContainerImgPet>
				<S.CardBody>
					<S.ContentText>
						Peso: <S.ContentCardText>{pet.peso} kg</S.ContentCardText>
					</S.ContentText>
					<S.ContentText>
						Cor: <S.ContentCardText>{pet.cor}</S.ContentCardText>
					</S.ContentText>
					<S.ContentText>
						Espécie: <S.ContentCardText>{pet.especie}</S.ContentCardText>
					</S.ContentText>
					<S.ContentText>
						Raça: <S.ContentCardText>{pet.raca}</S.ContentCardText>
					</S.ContentText>
				</S.CardBody>
				<S.NamePet>
					<S.NamePetText>{pet.nome}</S.NamePetText>
					{pet.sexo == "Fêmea" ? (<S.FemaleGenderIcon />) : (<S.IconSex />)}
				</S.NamePet>
			</S.ContainerCard>
			<S.ContainerDescription>
				<S.TextDescription>{pet.sobre}</S.TextDescription>
				<S.ButtonDescription to={`/adoption/?${petId}`}>
					Confirmar interesse!
				</S.ButtonDescription>
			</S.ContainerDescription>
			<S.ListCheck>
				<S.ContentListCheck>
					{pet.vacinado && (
						<S.ItemListCheck>
						<S.IconCheck src={iconCheck} alt="Icone de check" />
						<S.TextCheck>Vacinado</S.TextCheck>
					</S.ItemListCheck>)
					}
					{pet.castrado && (
						<S.ItemListCheck>
						<S.IconCheck src={iconCheck} alt="Icone de check" />
						<S.TextCheck>Castrado</S.TextCheck>
					</S.ItemListCheck>
					)
					}
					<S.ItemListCheck>
						<S.IconCheck src={iconCheck} alt="Icone de check" />
						<S.TextCheck>{pet.porte}</S.TextCheck>
					</S.ItemListCheck>
					<S.ItemListCheck>
						<S.IconCheck src={iconCheck} alt="Icone de check" />
						<S.TextCheck>{pet.idade} ano(s)</S.TextCheck>
					</S.ItemListCheck>
				</S.ContentListCheck>
			</S.ListCheck>
		</S.ContainerProfile>
	);
};

export default PetPageProfile;
