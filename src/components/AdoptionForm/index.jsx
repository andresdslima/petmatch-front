import { Container, Form, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Styled from './styled';
import AdoptionStep1 from '../AdoptionStep1';
import AdoptionStep2 from '../AdoptionStep2';
import AdoptionStep3 from '../AdoptionStep3';
import AdoptionStep4 from '../AdoptionStep4';
// Store

const AdoptionForm = () => {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	const [step, setStep] = useState(1);
	const [formValues, setFormValues] = useState({});

	const formik = useFormik({
		// Inserir valores iniciais a partir do localStorage ou Redux se tiver
		initialValues: {},

		onSubmit: values => {
			console.log(values);
			// localStorage.setItem('form', JSON.stringify(values));
			// formik.handleReset();
			// navigate('/');
		},
	});

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
