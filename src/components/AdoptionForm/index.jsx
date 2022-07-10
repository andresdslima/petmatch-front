import { Container } from 'react-bootstrap';
import { useState } from 'react';
import * as Styled from './styled';
import AdoptionStep1 from '../AdoptionStep1';
import AdoptionStep2 from '../AdoptionStep2';
import AdoptionStep3 from '../AdoptionStep3';
import AdoptionStep4 from '../AdoptionStep4';
import AdoptionStep5 from '../AdoptionStep5';
import MatchsMainContent from '../../components/MatchsMainContent';

const AdoptionForm = () => {
	const [step, setStep] = useState(1);
	const [formValues, setFormValues] = useState({});

	return (
		<>
			<Container className="my-5">
				<Styled.NumberOfSteps className="mt-3 mb-5">
					<Styled.StepNumberTwo
						active={'1'}
						steps={step}
						text={'Informações de contato'}
					>
						1
					</Styled.StepNumberTwo>
					<Styled.StepNumberTwo
						active={'2'}
						steps={step}
						text={'Dados pessoais'}
					>
						2
					</Styled.StepNumberTwo>
					<Styled.StepNumberTwo active={'3'} steps={step} text={'Dados do pet'}>
						3
					</Styled.StepNumberTwo>
					<Styled.StepNumberThree active={'4'} steps={step} text={'Contrato'}>
						4
					</Styled.StepNumberThree>
				</Styled.NumberOfSteps>

				{step === 1 && (
					<AdoptionStep1
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}

				{step === 2 && (
					<AdoptionStep2
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}

				{step === 3 && (
					<AdoptionStep3
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}

				{step === 4 && (
					<AdoptionStep4
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}

				{step === 5 && (
					<AdoptionStep5
						setStep={setStep}
						formValues={formValues}
						setFormValues={setFormValues}
					/>
				)}
			</Container>

			{step === 5 && <MatchsMainContent />}
		</>
	);
};

export default AdoptionForm;
