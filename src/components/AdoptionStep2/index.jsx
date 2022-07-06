import React from 'react';
import * as Styled from '../AdoptionForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Form, Col, Row } from 'react-bootstrap';
import { countStep } from '../../store/modules/adoption';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object({
	cpf: Yup.string().min(11, '11 dígitos').required('*'),
	rg: Yup.string().min(9, '9 dígitos').required('*'),
	estadoCivil: Yup.string().required('*'),
	profissao: Yup.string().required('*'),
});

export default function AdoptionStep2({ setStep, formValues, setFormValues }) {
	const { register } = useForm();
	const dispatch = useDispatch();
	const formObject = JSON.parse(localStorage.getItem('form'));

	const formik = useFormik({
		initialValues: {
			cpf: `${formObject.cpf ?? ''}`,
			rg: `${formObject.rg ?? ''}`,
			estadoCivil: `${formObject.estadoCivil ?? ''}`,
			profissao: `${formObject.profissao ?? ''}`,
		},

		validationSchema,

		onSubmit: values => {
			setFormValues({
				...formValues,
				...values,
			});
			
			setStep(3);
			dispatch(countStep({ step: 3 }));


			const currentForm = Object.assign(formObject, { ...values });
			localStorage.setItem('form', JSON.stringify(currentForm));
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Styled.ContainerForm>
				<Row>
					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="cpf">CPF</Styled.Label>
							{formik.errors.cpf && <small>{formik.errors.cpf}</small>}
							<Styled.SInput
								type="number"
								name="cpf"
								id="cpf"
								placeholder="12345678901"
								{...register('cpf')}
								value={formik.values.cpf}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="rg">RG</Styled.Label>
							{formik.errors.rg && <small>{formik.errors.rg}</small>}
							<Styled.SInput
								type="number"
								name="rg"
								id="rg"
								placeholder="001234567"
								{...register('rg')}
								value={formik.values.rg}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="estadoCivil">Estado Civil</Styled.Label>
							{formik.errors.estadoCivil && (
								<small>{formik.errors.estadoCivil}</small>
							)}
							<Styled.FormItemSelect
								id="estadoCivil"
								type="select"
								placeholder="estadoCivil"
								name="estadoCivil"
								{...register('estadoCivil')}
								value={formik.values.estadoCivil}
								onChange={formik.handleChange}
							>
								<Styled.SelectOption value=""></Styled.SelectOption>
								<Styled.SelectOption value="Solteiro(a)">
									Solteiro(a)
								</Styled.SelectOption>
								<Styled.SelectOption value="Casado(a)">
									Casado(a)
								</Styled.SelectOption>
								<Styled.SelectOption value="Viúvo(a)">
									Viúvo(a)
								</Styled.SelectOption>
							</Styled.FormItemSelect>
						</Styled.InputContainer>
					</Col>
				</Row>

				<Row>
					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="profissao">Profissão</Styled.Label>
							{formik.errors.profissao && (
								<small>{formik.errors.profissao}</small>
							)}
							<Styled.SInput
								type="text"
								name="profissao"
								id="profissao"
								placeholder="Sua profissão"
								{...register('profissao')}
								value={formik.values.profissao}
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
					onClick={() => {setStep(1); dispatch(countStep({ step: 1 }))}}
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
