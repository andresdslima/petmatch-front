import styled from 'styled-components';

import { Card, Button } from 'react-bootstrap';

export const CardPost = styled(Card)`
	box-shadow: 6px 11px 39px rgba(151, 151, 151, 0.25);
	border-radius: 0px 0px 16px 16px !important;
	width: 80%;
	margin: 10px auto;
	padding-bottom: 30px;

	@media only screen and (max-width: 768px) {
		width: 70%;
	}

	@media only screen and (max-width: 576px) {
		width: 60%;
	}
`;

export const PostTitle = styled(Card.Title)`
	font-weight: 400 !important;
	font-size: 12px !important;
	line-height: 14px !important;
	color: #f76f34 !important;
`;

export const ButtonPost = styled(Button)`
	width: 40%;
	margin: 10px auto !important;
	background: #8d73e4 !important;
	border: none !important;
	border-radius: 4px !important;
	font-weight: 600 !important;
	font-size: 14px !important;
	line-height: 16px !important;
	margin-bottom: 60px;
	display: flex !important;
	justify-content: space-around;
	align-items: center;
	opacity: 1;

	&:hover {
		opacity: 0.8;
	}

	@media only screen and (max-width: 768px) {
		.cardPost {
			width: 70%;
		}
	}

	@media only screen and (max-width: 576px) {
		.cardPost {
			width: 60%;
		}
	}
`;
