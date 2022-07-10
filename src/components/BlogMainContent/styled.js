import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const BlogContainer = styled(Container)`
	margin-bottom: 15vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const DogBlogImage = styled.img`
	width: 53vw;
	margin-top: 50px;

	@media (max-width: 500px) {
		width: 80%;
	}
`;

export const BlogParagraph = styled.p`
	font-weight: 600;
	font-size: 1.5rem;
	line-height: 28px;
	color: #6b4bcc;
	margin-top: 3vw;

	@media (max-width: 500px) {
		font-size: 0.9rem;
		margin-top: 30px;
	}
`;
