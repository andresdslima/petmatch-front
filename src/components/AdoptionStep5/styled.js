import styled from 'styled-components';
import { Container, Card, CardImg } from 'react-bootstrap';

export const CardContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin: 100px auto
`;

export const RectangleBackground = styled.div`
  width: 35vw;
  height: 36.72vw;
  background-color: #7355d3;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(10.88deg);
  border-radius: 16px;

  @media only screen and (max-width: 900px) {
    width: 52.5vw;
    height: 55.08vw;
  }

  @media only screen and (max-width: 500px) {
    width: 70vw;
    height: 73.44vw;
  }
`;

export const CardCenter = styled(Card)`
  width: 33.33vw;
  transform: rotate(-10.88deg);
  border: 1px solid #f76f34;
  border-radius: 16px;

  @media only screen and (max-width: 900px) {
    width: 50vw;
  }

  @media only screen and (max-width: 500px) {
    width: 66.66vw;
  }
`;

export const ImageContainer = styled.div`
height: 26vw;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 900px) {
    height: 39vw;
  }

  @media only screen and (max-width: 500px) {
    height: 52vw;
  }
`

export const CardImageDog = styled(CardImg)`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const CardImageWoman = styled(CardImg)`
width: 60%;
`

export const CardTextContainer = styled.div`
  height: 8.75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  @media only screen and (max-width: 900px) {
    height: 13.11vw;
    gap: 12px;
  }
  
  @media only screen and (max-width: 500px) {
    height: 17.48vw;
    gap: 8px;
  }
`;

export const Title = styled.span`
  font-size: max(1.25vw, 14px);
  font-weight: 600;
  color: #f76f34;
`;

export const Text = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #6B4BCC;
  padding: 0 5%;

  @media only screen and (max-width: 900px) {
    font-size: max(0.88vw, 10px)
  }

  @media only screen and (max-width: 500px) {
    font-size: max(0.88vw, 7px);
  }
`;
