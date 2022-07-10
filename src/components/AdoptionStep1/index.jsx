import React from 'react';
import * as Styled from '../AdoptionForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { countStep } from '../../store/modules/adoption';

const validationSchema = Yup.object({
	nome: Yup.string().min(6, 'Nome completo').required('*'),
	email: Yup.string().email('Email inválido').required('*'),
	contato: Yup.string().min(11, '11 dígitos').required('*'),
	cidade: Yup.string().min(3, 'Digite sua cidade').required('*'),
	uf: Yup.string().min(2, 'Escolha seu estado').required('*'),
	cep: Yup.string().min(8, '8 dígitos').required('*'),
	logradouro: Yup.string().min(6, 'Endereço completo').required('*'),
	numero_logradouro: Yup.number().required('*'),
	complemento: Yup.string(),
});

export default function AdoptionStep1({ setStep, formValues, setFormValues }) {
	const { register } = useForm();
	const dispatch = useDispatch();
	const formObject = JSON.parse(localStorage.getItem('form'));

	const formik = useFormik({
		initialValues: {
			nome: `${formObject ? formObject.nome : ''}`,
			email: `${formObject ? formObject.email : ''}`,
			contato: `${formObject ? formObject.contato : ''}`,
			cidade: `${formObject ? formObject.cidade : ''}`,
			uf: `${formObject ? formObject.uf : ''}`,
			cep: `${formObject ? formObject.cep : ''}`,
			logradouro: `${formObject ? formObject.logradouro : ''}`,
			numero_logradouro: `${formObject ? formObject.numero_logradouro : ''}`,
			complemento: `${formObject ? formObject.complemento : ''}`,
		},

		validationSchema,

		onSubmit: values => {
			setFormValues({
				...formValues,
				...values,
			});

			setStep(2);
			dispatch(countStep({ step: 2 }));

			localStorage.setItem(
				'form',
				JSON.stringify({ ...formValues, ...values }),
			);

			localStorage.setItem(
				'user',
				JSON.stringify({
					nome: values.nome,
					email: values.email,
					contato: parseInt(values.contato),
					cidade: values.cidade,
					uf: values.uf,
					cep: `${values.cep}`,
					logradouro: values.logradouro,
					numero_logradouro: `${values.numero_logradouro}`,
					complemento: values.complemento,
				}),
			);
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Styled.ContainerForm>
				<Row>
					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="nome">Nome completo</Styled.Label>
							{formik.errors.nome && <small>{formik.errors.nome}</small>}
							<Styled.SInput
								type="text"
								name="nome"
								{...register('nome')}
								id="nome"
								placeholder="Nome completo"
								value={formik.values.nome}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="email">Email</Styled.Label>
							{formik.errors.email && <small>{formik.errors.email}</small>}
							<Styled.SInput
								type="email"
								name="email"
								{...register('email')}
								id="email"
								placeholder="Seu melhor email"
								value={formik.values.email}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="contato">Celular</Styled.Label>
							{formik.errors.contato && <small>{formik.errors.contato}</small>}
							<Styled.SInput
								type="number"
								name="contato"
								{...register('contato')}
								id="contato"
								placeholder="Ex: 11912345678"
								value={formik.values.contato}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>
				</Row>

				<Row>
					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="cidade">Cidade</Styled.Label>
							{formik.errors.cidade && <small>{formik.errors.cidade}</small>}
							<Styled.SInput
								type="text"
								name="cidade"
								{...register('cidade')}
								id="cidade"
								placeholder="Sua cidade"
								value={formik.values.cidade}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="uf">Estado</Styled.Label>
							{formik.errors.uf && <small>{formik.errors.uf}</small>}
							<Styled.FormItemSelect
								id="uf"
								type="select"
								name="uf"
								{...register('uf')}
								placeholder="uf"
								value={formik.values.uf}
								onChange={formik.handleChange}
							>
								<Styled.SelectOption value=""></Styled.SelectOption>
								<Styled.SelectOption value="AC">AC</Styled.SelectOption>
								<Styled.SelectOption value="AL">AL</Styled.SelectOption>
								<Styled.SelectOption value="AM">AM</Styled.SelectOption>
								<Styled.SelectOption value="AP">AP</Styled.SelectOption>
								<Styled.SelectOption value="BA">BA</Styled.SelectOption>
								<Styled.SelectOption value="CE">CE</Styled.SelectOption>
								<Styled.SelectOption value="DF">DF</Styled.SelectOption>
								<Styled.SelectOption value="ES">ES</Styled.SelectOption>
								<Styled.SelectOption value="GO">GO</Styled.SelectOption>
								<Styled.SelectOption value="MA">MA</Styled.SelectOption>
								<Styled.SelectOption value="MT">MT</Styled.SelectOption>
								<Styled.SelectOption value="MS">MS</Styled.SelectOption>
								<Styled.SelectOption value="MG">MG</Styled.SelectOption>
								<Styled.SelectOption value="PA">PA</Styled.SelectOption>
								<Styled.SelectOption value="PB">PB</Styled.SelectOption>
								<Styled.SelectOption value="PE">PE</Styled.SelectOption>
								<Styled.SelectOption value="PI">PI</Styled.SelectOption>
								<Styled.SelectOption value="PR">PR</Styled.SelectOption>
								<Styled.SelectOption value="RJ">RJ</Styled.SelectOption>
								<Styled.SelectOption value="RN">RN</Styled.SelectOption>
								<Styled.SelectOption value="RO">RO</Styled.SelectOption>
								<Styled.SelectOption value="RR">RR</Styled.SelectOption>
								<Styled.SelectOption value="RS">RS</Styled.SelectOption>
								<Styled.SelectOption value="SC">SC</Styled.SelectOption>
								<Styled.SelectOption value="SE">SE</Styled.SelectOption>
								<Styled.SelectOption value="SP">SP</Styled.SelectOption>
								<Styled.SelectOption value="TO">TO</Styled.SelectOption>
							</Styled.FormItemSelect>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="cep">CEP</Styled.Label>
							{formik.errors.cep && <small>{formik.errors.cep}</small>}
							<Styled.SInput
								type="number"
								name="cep"
								{...register('cep')}
								id="cep"
								placeholder="Ex: 12345678"
								value={formik.values.cep}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>
				</Row>

				<Row>
					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="logradouro">Endereço</Styled.Label>
							{formik.errors.logradouro && (
								<small>{formik.errors.logradouro}</small>
							)}
							<Styled.SInput
								type="text"
								name="logradouro"
								{...register('logradouro')}
								id="logradouro"
								placeholder="Seu endereço completo"
								value={formik.values.logradouro}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="numero_logradouro">Número</Styled.Label>
							{formik.errors.numero_logradouro && (
								<small>{formik.errors.numero_logradouro}</small>
							)}
							<Styled.SInput
								type="number"
								name="numero_logradouro"
								{...register('numero_logradouro')}
								id="numero_logradouro"
								placeholder="Número do endereço"
								value={formik.values.numero_logradouro}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="complemento">Complemento</Styled.Label>
							{formik.errors.complemento && (
								<small>{formik.errors.complemento}</small>
							)}
							<Styled.SInput
								type="text"
								name="complemento"
								{...register('complemento')}
								id="complemento"
								placeholder="Complemento do endereço"
								value={formik.values.complemento}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>
				</Row>
			</Styled.ContainerForm>

			<Styled.ButtonContainer className="my-5">
				<Styled.SButton variant="primary" type="submit">
					Continuar
				</Styled.SButton>
			</Styled.ButtonContainer>
		</Form>
	);
}
