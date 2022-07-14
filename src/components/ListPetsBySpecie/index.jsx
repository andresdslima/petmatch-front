import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPetList } from '../../store/modules/pets';
import { getPetsBySpecie } from '../../services/mainAPI/pets';
import { Link, useParams } from 'react-router-dom';
import * as S from './styled';

const ListPetsBySpecie = () => {
	const petList = useSelector(state => state.petsSlice.pets);
	const dispatch = useDispatch();
	const { param } = useParams();

	useEffect(() => {
		getPetsBySpecie(param).then(pets => dispatch(setPetList(pets)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	return (
		<>
			<S.TitleBackground className="mt-5">
				{param === 'Réptil' ? (
					<S.Title>Répteis</S.Title>
				) : (
					<S.Title>{param}s</S.Title>
				)}
			</S.TitleBackground>
			<S.PetsContainer>
				<S.RowContainer xs={2} sm={2} md={3} lg={4} xl={5}>
					{petList.map(pet => (
						<S.Column key={pet.id}>
							<Link exact to={`/petprofile/?${pet.id}`}>
								<S.CardContainer>
									<S.GenderIconContainer>
										{pet.sexo === 'Fêmea' ? (
											<S.GenderIconDiv color="#F2323F">
												<S.FemaleGenderIcon />
											</S.GenderIconDiv>
										) : (
											<S.GenderIconDiv color="#8D73E4">
												<S.MaleGenderIcon />
											</S.GenderIconDiv>
										)}
									</S.GenderIconContainer>

									<S.CardImage variant="top" src={pet.petImage} />
									<S.CardBody>
										<S.CardTitle>{pet.nome}</S.CardTitle>
										<S.CardText className="cardText">
											{pet.raca}
											<br />
											{pet.idade} ano(s)
											<br />
											{pet.user.cidade ? pet.user.cidade : ''} -{' '}
											{pet.user.uf ? pet.user.uf : ''}
										</S.CardText>
									</S.CardBody>
								</S.CardContainer>
							</Link>
						</S.Column>
					))}
				</S.RowContainer>
				<small>
					<em>*SRD: Sem Raça Definida</em>
				</small>
				<br />
				<small>
					<em>**Faça seu login e busque pelo seu Pet ideal!</em>
				</small>
			</S.PetsContainer>
		</>
	);
};

export default ListPetsBySpecie;
