import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';


const CardPosts = ({ imageName }) => {
	const navigate = useNavigate();

	return (
		<S.CardPost className="cardPost">
			<S.CardImage variant="top" src={imageName} />
			<Card.Body>
				<S.PostTitle className="postTitle">SOBRE PETS</S.PostTitle>
				<Card.Text className="cardText">
					O abandono dos pets está cada vez mais sendo visto de forma comum e
					isso está se tornando um problema cada vez mais [...]
				</Card.Text>
			</Card.Body>
			<S.ButtonPost className="buttonPost" onClick={() => navigate('/blog')}>
				<span>Leia mais</span>
				<span>+</span>
			</S.ButtonPost>
		</S.CardPost>
	);
};

export default CardPosts;
