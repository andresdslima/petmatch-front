import React from 'react';
import catProfile from '../../assets/images/catProfile.png';
import iconCheck from '../../assets/iconCheck.svg'
import * as S from './styled'

const PetPageProfile = () => {
	return (
		<S.ContainerProfile>
			<S.ContainerCard>
				<S.ContainerImg src={catProfile} alt="foto do pet" />
				<S.CardBody>
					<S.ContentText>
						Peso: <S.ContentCardText>3,34 kg</S.ContentCardText>
					</S.ContentText>
					<S.ContentText>
						Cor Predominante: <S.ContentCardText> Branco</S.ContentCardText>
					</S.ContentText>
					<S.ContentText>
						Espécie: <S.ContentCardText>Gato Doméstico</S.ContentCardText>
					</S.ContentText>
					<S.ContentText>
						Raça: <S.ContentCardText>SRD</S.ContentCardText>
					</S.ContentText>
				</S.CardBody>
				<S.NamePet>
					<S.NamePetText>Pipoca</S.NamePetText>
					<S.IconSex />
				</S.NamePet>
			</S.ContainerCard>
			<S.ContainerDescription>
				<S.TextDescription>
					Pipoca é o melhor gato do mundo! Se você procura um grande amigo, um
					excelente companheiro, ele é o cara! Ou, ele é o gato. Super
					carinhoso, te segue em todos os lugares e vai te dar muitas alegrias.
					<br />
					<br />
					Vai por mim, adotar o Pipoca é a melhor decisão da sua vida.
					<br />
					<br />
					Ele não tem problema algum, se dá bem com todos os pets se você tiver
					mais, não faz barulho, só ronrona, o que é muito fofo. Adota ele!
					<br />
					<br />
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
						<S.TextCheck>Médio</S.TextCheck>
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
