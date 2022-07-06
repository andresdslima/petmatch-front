import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import AdoptionStep1 from '../AdoptionStep1';
import AdoptionStep2 from '../AdoptionStep2';
import AdoptionStep3 from '../AdoptionStep3';
import AdoptionStep4 from '../AdoptionStep4';
import { useSelector } from 'react-redux';
// Store

const AdoptionForm = () => {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	// useFormikContext()
	// useContext()
	// formik.handleReset();
	const stepp = useSelector(state => state.adoptionSlice.step);
	const [step, setStep] = useState(1);
	const [formValues, setFormValues] = useState({});

	return (
		<Container className="my-5">
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
		</Container>
	);
};

export default AdoptionForm;
