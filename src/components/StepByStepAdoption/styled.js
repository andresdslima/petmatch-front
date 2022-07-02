import styled from 'styled-components';

export const IntroductionText = styled.span`
  color: #141518;
  font-size: 17px;
  font-weight: 600;
`;

export const NumberOfSteps = styled.div`
  display: flex;
  justify-content: center;
  gap: 300px;

  @media only screen and (max-width: 900px) {
    gap: 150px;
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const StepNumberOne = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background-color: #fc895e;
  border-radius: 100%;
`;

export const StepNumberTwo = styled(StepNumberOne)`
  &::before,
  &::after {
    width: 300px;
    border-bottom: 1px solid #d5d7db;
    content: '';
    position: absolute;
  }

  &::before {
    transform: translateX(-164px);
  }

  &::after {
    transform: translateX(164px);
  }

  @media only screen and (max-width: 900px) {
    &::before,
    &::after {
      width: 150px;
    }

    &::before {
      transform: translateX(-89px);
    }

    &::after {
      transform: translateX(89px);
    }
  }
`;

export const StepCheck = styled(StepNumberOne)`
  background-color: #f76f34;
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10.5vw;
  align-items: flex-end;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    margin-top: 10vw;
  }
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FirstImage = styled.img`
  width: 121px;
  height: 136px;

  @media only screen and (max-width: 900px) {
    width: 80.66px;
    height: 90.66px;
  }

  @media only screen and (max-width: 500px) {
    width: 121px;
    height: 136px;
  }
`;

export const SecondImage = styled.img`
  width: 180px;
  height: 160px;

  @media only screen and (max-width: 900px) {
    width: 120px;
    height: 106.66px;
  }

  @media only screen and (max-width: 500px) {
    width: 180px;
    height: 160px;
  }
`;

export const ThirdImage = styled.img`
  width: 126px;
  height: 147px;

  @media only screen and (max-width: 900px) {
    width: 84px;
    height: 98px;
  }

  @media only screen and (max-width: 500px) {
    width: 126px;
    height: 147px;
  }
`;

export const ItemText = styled.span`
  width: 224px;
  color: #9fa1a6;
  font-size: 21px;
  font-weight: 600;
  margin: 0;

  @media only screen and (max-width: 900px) {
    width: 150px;
    font-size: 15px;
  }

  @media only screen and (max-width: 500px) {
    width: 224px;
    font-size: 21px;
  }
`;
