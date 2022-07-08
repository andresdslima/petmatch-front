import React from 'react';
import catProfile from '../../assets/images/catProfile.png';
import iconCheck from '../../assets/iconCheck.svg'
import * as S from './styled'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPetList } from '../../store/modules/pets';
import { getPet } from '../../services/mainAPI/pets';


const PetPageProfile = () => {

	const pet = useSelector(state => state.petsSlice.pets);
	const dispatch = useDispatch();

	useEffect(() => {
		getPet(parseInt(window.location.search.split('?')[1])).then(pets => dispatch(setPetList(pets)));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<S.ContainerProfile>
			<S.ContainerCard>
				<S.ContainerImg src={pet.petImage} alt="foto do pet" />
				<S.CardBody>
					<S.ContentText>
						Peso: <S.ContentCardText>{pet.peso} kg</S.ContentCardText>
					</S.ContentText>
					<S.ContentText>
						Cor Predominante: <S.ContentCardText>{pet.cor}</S.ContentCardText>
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
					<S.IconSex />
				</S.NamePet>
			</S.ContainerCard>
			<S.ContainerDescription>
				<S.TextDescription>
				{pet.sobre}
					<strong>Testado negativo para FIV-FELV</strong>
				</S.TextDescription>
				<S.ButtonDescription to={'/adoption'}>
					Confirmar interesse!
				</S.ButtonDescription>
			</S.ContainerDescription>
			<S.ListCheck>
				<S.ContentListCheck>
					<S.ItemListCheck>
						<S.IconCheck src={iconCheck} alt="Icone de check" />
						<S.TextCheck>Vacinado</S.TextCheck>
					</S.ItemListCheck>
					<S.ItemListCheck>
						<S.IconCheck src={iconCheck} alt="Icone de check" />
						<S.TextCheck>Castrado</S.TextCheck>
					</S.ItemListCheck>
					<S.ItemListCheck>
						<S.IconCheck src={iconCheck} alt="Icone de check" />
						<S.TextCheck>{pet.porte}</S.TextCheck>
					</S.ItemListCheck>
					<S.ItemListCheck>
						<S.IconCheck src={iconCheck} alt="Icone de check" />
						<S.TextCheck>Jovem 1 - 3 anos</S.TextCheck>
					</S.ItemListCheck>
				</S.ContentListCheck>
			</S.ListCheck>
		</S.ContainerProfile>
	);
};

export default PetPageProfile;
