import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPetList } from '../../store/modules/pets';
import { getPets } from '../../services/mainAPI/pets';
import { Link } from 'react-router-dom';
import * as S from './styled';

const ListAllPets = () => {
	const petList = useSelector(state => state.petsSlice.pets);
	const dispatch = useDispatch();

	useEffect(() => {
		getPets().then(pets => dispatch(setPetList(pets)));
	}, [dispatch]);

	return (
		<>
			<S.TitleBackground className="mt-5">
				<S.Title>Nossos Pets em busca de um lar</S.Title>
			</S.TitleBackground>
			<S.PetsContainer>
				<S.RowContainer xs={2} sm={2} md={3} lg={4} xl={5}>
					{petList.map(pet => (
						<S.Column key={pet.id}>
							<Link exact to={`/petprofile/?${pet.id}`}>
								<S.CardContainer>
									<S.GenderIconContainer>
										<S.GenderIconDiv>
											{pet.sexo === 'Fêmea' ? (
												<S.FemaleGenderIcon />
											) : (
												<S.MaleGenderIcon />
											)}
										</S.GenderIconDiv>
									</S.GenderIconContainer>

									<S.CardImage variant="top" src={pet.petImage} />
									<S.CardBody>
										<S.CardTitle>{pet.nome}</S.CardTitle>
										<S.CardText className="cardText">
											{/* pet.cidade */}
											{pet.raca}
											<br />
											{pet.idade} ano(s)
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
					<em>**Faça seu login e busque aqui pelo seu Pet ideal!</em>
				</small>
			</S.PetsContainer>
		</>
	);
};

export default ListAllPets;
