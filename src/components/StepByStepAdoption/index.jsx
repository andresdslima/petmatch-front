import { Container } from 'react-bootstrap';
import Woman1 from '../../assets/images/Woman1.svg'
import Woman2 from '../../assets/images/Woman2.svg'
import Woman3 from '../../assets/images/Woman3.svg'
import * as S from './styled';

const StepByStepAdoption = () => {
  return (
    <S.ContainerStepByStep className='text-center'>
        <S.IntroductionText>Confira o passo a passo para a adoção no PetMatch!</S.IntroductionText>
        <S.NumberOfSteps className='mt-3 mb-5'>
            <S.StepNumberOne>1</S.StepNumberOne>
            <S.StepNumberTwo>2</S.StepNumberTwo>
            <S.StepCheck>&#x2713;</S.StepCheck>
        </S.NumberOfSteps>
        <S.ImagesContainer>
          <S.StepItem>
            <S.FirstImage src={Woman1} alt="Woman using a computer" />
            <S.ItemText>Complete seus dados</S.ItemText>
          </S.StepItem>
          <S.StepItem>
            <S.SecondImage src={Woman2} alt="Woman having online interview" />
            <S.ItemText>Dê um PetMatch!</S.ItemText>
          </S.StepItem>
          <S.StepItem>
            <S.ThirdImage src={Woman3} alt="Woman taking a funny photo with dog" />
            <S.ItemText>Assine o contrato e tenha seu novo Pet!</S.ItemText>
          </S.StepItem>
        </S.ImagesContainer>
    </S.ContainerStepByStep>
  );
};

export default StepByStepAdoption;