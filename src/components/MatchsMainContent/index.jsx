import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPetList } from '../../store/modules/pets';
import { getPets } from '../../services/mainAPI/pets';
import { Link } from 'react-router-dom';
import * as S from './styled';

const MatchMainContent = () => {
	const petList = useSelector(state => state.petsSlice.pets);
	const dispatch = useDispatch();

	const randomList = [...petList];
	randomList.sort(() => Math.random() - 0.5);

	const fivePetsRandomList = randomList.slice(0, 5);

	// const getPetLocation = async petUserId => {
	// 	const user = await getUserById(petUserId);
	// 	const location = `${user.cidade} - ${user.uf}`;

	// 	console.log(location);
	// 	return location;
	// };

	// const userIdList = fivePetsRandomList.map(pet => {
	// 	return pet.userID;
	// });

	// const locationList = userIdList.map(async user => {
	// 	const result = await getPetLocation(user);
	// 	const final = result.then(location => location.result);
	// 	return result;
	// });

	// console.log(locationList);

	useEffect(() => {
		getPets().then(pets => dispatch(setPetList(pets)));
	}, [dispatch]);

	return (
		<Container>
			<S.Titulo>Confira essas fofuras</S.Titulo>
			<S.RowContainer xs={2} sm={2} md={3} lg={4} xl={5}>
				{fivePetsRandomList.map(pet => (
					<S.Column key={pet.id}>
						<Link exact to={`/petprofile/?${pet.id}`}>
							<S.CardContainer>
								<S.CardImage variant="top" src={pet.petImage} />
								<S.CardBody>
									<S.CardTitle>{pet.nome}</S.CardTitle>
									<S.CardText className="cardText">
										{/* {`${getPetLocation(pet.userID).result}`} */}
										{/* {getPetLocation(pet.userID)} */}
										{/* {pet.userID} - {teste2[index].userID} */}
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
			<small>*SRD: Sem Raça Definida</small>
		</Container>
	);
};

export default MatchMainContent;
