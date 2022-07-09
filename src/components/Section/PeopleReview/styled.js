import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const PeopleReviewDiv = styled.div`
	background-color: #fc895e;
	margin: 5vw auto;
`;

export const PeopleReview = styled(Container)`
	display: flex;
    justify-content: space-between;
    padding: 30px 0;

    @media only screen and (max-width: 768px) {
        display: block;
	}
`;

export const TalkingAbout = styled.div`
 width: 30%;
 text-align: start;

 @media only screen and (max-width: 992px) {
    width: 40%;
	}
 @media only screen and (max-width: 768px) {
    width: 70%;
        margin: 0 auto;
        margin-bottom: 10%;
	}
`

export const TalkingAboutTitle = styled.h6`
font-weight: 600;
    font-size: 21px;
    line-height: 24px;
    color: #000000;
`

export const TalkingAboutText = styled.p`
 font-weight: 400;
    font-size: 14px;
    line-height: 16px;
`

export const PeopleOpinionContainer = styled.div`
 display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;

    @media only screen and (max-width: 992px) {
    width: 60%;
	}

    @media only screen and (max-width: 768px) {
        width: 90%;
	}

    @media only screen and (max-width: 576px) {
        display: block;
        width: 70%;
        margin: 0 auto;
	}
`

export const PeopleOpinion = styled.div`
display: flex;
    margin-right: 10px;
`

export const Picture = styled.img`
    width: 40px;
    height: 40px;
`

export const PersonInfo = styled.div`
    display: flex;
`

export const NameStatement = styled.div`
    padding: 5px 10px;
`

export const PersonName = styled.h6`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
`

export const Statement = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin: 0;
    text-align: justify;
`
