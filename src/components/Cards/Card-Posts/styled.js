import styled from 'styled-components';

import { Card, Button } from 'react-bootstrap';

export const CardPost = styled(Card)`
	box-shadow: 6px 11px 39px rgba(151, 151, 151, 0.25);
	border-radius: 16px 16px 16px 16px !important;
	width: 33vw;
	padding-bottom: 30px;
	border-width: 0;

	@media only screen and (max-width: 900px) {
		width: 50vw;
	}

	@media only screen and (max-width: 500px) {
		width: 100%;
	}
`;

export const CardImage = styled(Card.Img)`
border-radius: 16px 16px 0 0 !important;
`

export const PostTitle = styled(Card.Title)`
	font-weight: 400 !important;
	font-size: 12px !important;
	line-height: 14px !important;
	color: #f76f34 !important;
`;

export const ButtonPost = styled(Button)`
	width: 30%;
	margin: 10px auto !important;
	background: #8d73e4 !important;
	border: none !important;
	border-radius: 4px !important;
	font-weight: 600 !important;
	font-size: 14px !important;
	height: max(2.3vw, 35px);
	margin-bottom: 45px;
	display: flex !important;
	justify-content: space-around;
	align-items: center;
	opacity: 1;

	&:hover {
		opacity: 0.8;
	}

	@media only screen and (max-width: 900px) {
		width: 50%;
	}

	@media only screen and (max-width: 900px) {
		width: 40%;
	}
`;
