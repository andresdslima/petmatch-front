import React from 'react';
import * as Styled from '../AdoptionForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Col, Row } from 'react-bootstrap';

const validationSchema = Yup.object({
	nome: Yup.string().min(6, 'Nome completo').required('*'),
	email: Yup.string().email('Email inválido').required('*'),
	celular: Yup.string().min(11, '11 dígitos').required('*'),
	cidade: Yup.string().min(3, 'Digite sua cidade').required('*'),
	estado: Yup.string().min(2, 'Escolha seu estado').required('*'),
	cep: Yup.string().min(8, '8 dígitos').required('*'),
	endereco: Yup.string().min(6, 'Endereço completo').required('*'),
	enderecoNumero: Yup.number().required('*'),
	enderecoComplemento: Yup.string(),
});

export default function AdoptionStep1({ setStep, formValues, setFormValues }) {
	const formik = useFormik({
		initialValues: {
			nome: '',
			email: '',
			celular: '',
			cidade: '',
			estado: '',
			cep: '',
			endereco: '',
			enderecoNumero: '',
			enderecoComplemento: '',
		},

		validationSchema,

		onSubmit: values => {
			setFormValues({
				...formValues,
				...values,
			});
			console.log({ ...formValues, ...values });

			localStorage.setItem(
				'form1',
				JSON.stringify({
					...values,
				}),
			);

			setStep(2);
			// console.log(formValues);
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
								id="email"
								placeholder="Seu melhor email"
								value={formik.values.email}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="celular">Celular</Styled.Label>
							{formik.errors.celular && <small>{formik.errors.celular}</small>}
							<Styled.SInput
								type="number"
								name="celular"
								id="celular"
								placeholder="Ex: 11912345678"
								value={formik.values.celular}
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
								id="cidade"
								placeholder="Sua cidade"
								value={formik.values.cidade}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="estado">Estado</Styled.Label>
							{formik.errors.estado && <small>{formik.errors.estado}</small>}
							<Styled.FormItemSelect
								id="estado"
								type="select"
								placeholder="Estado"
								value={formik.values.estado}
								onChange={formik.handleChange}
							>
								<Styled.SelectOption
									value=" "
									data-default
									selected
								></Styled.SelectOption>
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
							<Styled.Label htmlFor="endereco">Endereço</Styled.Label>
							{formik.errors.endereco && (
								<small>{formik.errors.endereco}</small>
							)}
							<Styled.SInput
								type="text"
								name="endereco"
								id="endereco"
								placeholder="Seu endereço completo"
								value={formik.values.endereco}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="enderecoNumero">Número</Styled.Label>
							{formik.errors.enderecoNumero && (
								<small>{formik.errors.enderecoNumero}</small>
							)}
							<Styled.SInput
								type="number"
								name="enderecoNumero"
								id="enderecoNumero"
								placeholder="Número do endereço"
								value={formik.values.enderecoNumero}
								onChange={formik.handleChange}
							/>
						</Styled.InputContainer>
					</Col>

					<Col xs={12} sm={4}>
						<Styled.InputContainer>
							<Styled.Label htmlFor="enderecoComplemento">
								Complemento
							</Styled.Label>
							{formik.errors.enderecoComplemento && (
								<small>{formik.errors.enderecoComplemento}</small>
							)}
							<Styled.SInput
								type="text"
								name="enderecoComplemento"
								id="enderecoComplemento"
								placeholder="Complemento do endereço"
								value={formik.values.enderecoComplemento}
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
