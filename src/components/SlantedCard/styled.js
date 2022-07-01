import styled from 'styled-components';
import { Container, Card, CardImg } from 'react-bootstrap';

export const CardContainer = styled(Container)`
  display: flex;
  justify-content: center;
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

  @media only screen and (max-width: 500px) {
    width: 66.66vw;
  }
`;

export const CardImage = styled(CardImg)`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const CardTextContainer = styled.div`
  height: 8.74vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;

  
  @media only screen and (max-width: 500px) {
    height: 17.48vw;
  }
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #f76f34;

  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

export const Text = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: #613387;

  @media only screen and (max-width: 900px) {
    font-size: 12px;
  }
`;
