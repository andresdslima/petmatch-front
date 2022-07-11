import AboutUsCards from '../Cards/Card-AboutUsPage';
import Image1 from '../../assets/images/fredericIcon.png';
import Image2 from '../../assets/images/ramonIcon.png';
import Image3 from '../../assets/images/andreIcon.png';
import Image4 from '../../assets/images/marceloIcon.png';
import Image5 from '../../assets/images/guilhermeIcon.png';
import Image6 from '../../assets/images/eduardoIcon.png';
import Image7 from '../../assets/images/felipeIcon.png';
import Image8 from '../../assets/images/giovannaIcon.png';
import Image9 from '../../assets/images/viniciusIcon.png';
import Image10 from '../../assets/images/thaisIcon.png';
import Image11 from '../../assets/images/victorIcon.png';
import Image12 from '../../assets/images/joaoIcon.png';
import { Col, Container } from 'react-bootstrap';
import * as S from './styled';

const AboutUsPageMainContent = () => {
	return (
		<Container className="mt-5">
			<S.ContainerText>
				<S.Text>
					Nós somos a PetMatch, esse time aí junto com você, para transformar o
					processo de adoção e doação muito mais responsável, prático, seguro e
					assertivo! Venha transformar o mundo pet conosco, estamos de braços e
					patas abertas para você!
				</S.Text>
			</S.ContainerText>
			<S.RowGrid xs={1} sm={2} md={3} lg={4} id="grid" className="container">
				<Col>
					<a
						href="https://www.linkedin.com/in/fredericlsr"
						target="_blank"
						rel="noreferrer"
					>
						<AboutUsCards imageName={Image1} />
					</a>
				</Col>
				<Col>
					<a
						href="https://www.linkedin.com/in/ramon-qs"
						target="_blank"
						rel="noreferrer"
					>
						<AboutUsCards imageName={Image2} />
					</a>
				</Col>
				<Col>
					<a
						href="https://www.linkedin.com/in/andrelimadev"
						target="_blank"
						rel="noreferrer"
					>
						<AboutUsCards imageName={Image3} />
					</a>
				</Col>
				<Col>
					<a
						href="https://www.linkedin.com/in/marcelo-tesla"
						target="_blank"
						rel="noreferrer"
					>
						<AboutUsCards imageName={Image4} />
					</a>
				</Col>
				<Col>
					<a
						href="https://www.linkedin.com/in/guilhermef-melo"
						target="_blank"
						rel="noreferrer"
					>
						<AboutUsCards imageName={Image5} />
					</a>
				</Col>
				<Col>
					<a
						href="https://www.linkedin.com/in/carreiroe"
						target="_blank"
						rel="noreferrer"
					>
						<AboutUsCards imageName={Image6} />
					</a>
				</Col>
				<Col>
					<a
						href="https://www.linkedin.com/in/felipe-matheus-26b147163"
						target="_blank"
						rel="noreferrer"
					>
						<AboutUsCards imageName={Image7} />
					</a>
				</Col>
				<Col>
					<a
						href="https://www.linkedin.com/in/gioschneider"
						target="_blank"
						rel="noreferrer"
					>
						<AboutUsCards imageName={Image8} />
					</a>
				</Col>
				<Col>
					<a
						href="https://www.linkedin.com/in/viniciusantonello"
						target="_blank"
						rel="noreferrer"
					>
						<AboutUsCards imageName={Image9} />
					</a>
				</Col>
				<Col>
					<a
						href="https://www.linkedin.com/in/thaispcavalcante"
						target="_blank"
						rel="noreferrer"
					>
						<AboutUsCards imageName={Image10} />
					</a>
				</Col>
				<Col>
					<a
						href="https://www.linkedin.com/in/victor-landim-37b102169"
						target="_blank"
						rel="noreferrer"
					>
						<AboutUsCards imageName={Image11} />
					</a>
				</Col>
				<Col>
					<a
						href="https://www.linkedin.com/in/oliveirajg"
						target="_blank"
						rel="noreferrer"
					>
						<AboutUsCards imageName={Image12} />
					</a>
				</Col>
			</S.RowGrid>
		</Container>
	);
};

export default AboutUsPageMainContent;
