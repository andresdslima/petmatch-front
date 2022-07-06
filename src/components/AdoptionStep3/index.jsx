import React from 'react';
import * as Styled from '../AdoptionForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { countStep } from '../../store/modules/adoption';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object({
	enderecoAnimal: Yup.string().min(6, 'Endereço completo').required('*'),
});

export default function AdoptionStep3({ setStep, formValues, setFormValues }) {
	const formObject = JSON.parse(localStorage.getItem('form'));
	const { register } = useForm();
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			enderecoAnimal: `${formObject.enderecoAnimal ?? ''}`,
		},

		validationSchema,

		onSubmit: values => {
			setFormValues({
				...formValues,
				...values,
			});

			setStep(4);
			dispatch(countStep({ step: 4 }));

			const currentForm = Object.assign(formObject, { ...values });
			localStorage.setItem('form', JSON.stringify(currentForm));
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Styled.ContainerForm>
				<Styled.InputContainer>
					<Styled.Label htmlFor="enderecoAnimal">
						Endereço completo de onde o animal ficará
					</Styled.Label>
					{formik.errors.enderecoAnimal && (
						<small>{formik.errors.enderecoAnimal}</small>
					)}
					<Styled.SInput
						type="text"
						name="enderecoAnimal"
						id="enderecoAnimal"
						placeholder="Endereço completo"
						{...register('enderecoAnimal')}
						value={formik.values.enderecoAnimal}
						onChange={formik.handleChange}
					/>
				</Styled.InputContainer>
			</Styled.ContainerForm>

			<Styled.ButtonContainer className="my-5">
				<Styled.SButton
					variant="primary"
					type="button"
					onClick={() => {setStep(2); dispatch(countStep({ step: 2 }))}}
				>
					Voltar
				</Styled.SButton>
				<Styled.SButton variant="primary" type="submit">
					Continuar
				</Styled.SButton>
			</Styled.ButtonContainer>
		</Form>
	);
}
