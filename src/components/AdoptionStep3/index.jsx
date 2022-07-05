import React from 'react';
import * as Styled from '../AdoptionForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Col, Row } from 'react-bootstrap';

const validationSchema = Yup.object({
	enderecoAnimal: Yup.string().min(6, 'Nome completo').required('*'),
});

export default function AdoptionStep3({ setStep, formValues, setFormValues }) {
	const oldForm = JSON.parse(localStorage.getItem('form1'));

	const formik = useFormik({
		initialValues: {
			enderecoAnimal: '',
		},

		validationSchema,

		onSubmit: values => {},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Styled.ContainerForm>
				<Row>
					<Col xs={12} sm={4}>
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
								value={formik.values.enderecoAnimal}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>
				</Row>
			</Styled.ContainerForm>

			<Styled.ButtonContainer className="my-5">
				<Styled.SButton
					variant="primary"
					type="button"
					onClick={() => setStep(2)}
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
