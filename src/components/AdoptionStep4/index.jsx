import React from 'react';
import * as Styled from '../AdoptionForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { countStep } from '../../store/modules/adoption';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
	assinatura: Yup.string().min(6, 'Assinatura').required('*'),
});

export default function AdoptionStep4({ setStep, formValues, setFormValues }) {
	const formObject = JSON.parse(localStorage.getItem('form'));
	const { register } = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			assinatura: `${formObject.assinatura ?? ''}`,
		},

		validationSchema,

		onSubmit: values => {
			setFormValues({
				...formValues,
				...values,
			});

			const currentForm = Object.assign(formObject, { ...values });
			localStorage.setItem('form', JSON.stringify(currentForm));
			navigate('/formularioenviado');
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Styled.ContainerForm>
				<Styled.InputContainer>
					<Styled.Label htmlFor="assinatura">Assinatura</Styled.Label>
					{formik.errors.assinatura && (
						<small>{formik.errors.assinatura}</small>
					)}
					<Styled.SInput
						type="text"
						name="assinatura"
						id="assinatura"
						placeholder="Assinatura"
						{...register('assinatura')}
						value={formik.values.assinatura}
						onChange={formik.handleChange}
					/>
				</Styled.InputContainer>
			</Styled.ContainerForm>

			<Styled.ButtonContainer className="my-5">
				<Styled.SButton
					variant="primary"
					type="button"
					onClick={() => {
						setStep(3);
						dispatch(countStep({ step: 3 }));
					}}
				>
					Voltar
				</Styled.SButton>
				<Styled.SButton variant="primary" type="submit">
					Concluir
				</Styled.SButton>
			</Styled.ButtonContainer>
		</Form>
	);
}
