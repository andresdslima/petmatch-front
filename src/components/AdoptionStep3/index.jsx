import React, { useEffect } from 'react';
import * as Styled from '../AdoptionForm/styled';
import * as S from '../PetPageProfile/styled';
import * as St from './styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { countStep } from '../../store/modules/adoption';
import { useDispatch, useSelector } from 'react-redux';
import { getPet } from '../../services/mainAPI/pets';
import iconCheck from '../../assets/iconCheck.svg';
import { setPetItem } from '../../store/modules/pets';

const validationSchema = Yup.object({
	enderecoAnimal: Yup.string().min(6, 'Endereço completo').required('*'),
});

export default function AdoptionStep3({ setStep, formValues, setFormValues }) {
	const formObject = JSON.parse(localStorage.getItem('form'));
	const { register } = useForm();
	const dispatch = useDispatch();
	const pet = useSelector(state => state.petsSlice.petItem);
	const petId = parseInt(window.location.search.split('?')[1]);

	useEffect(() => {
		getPet(petId).then(pets => dispatch(setPetItem(pets)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
		<>
			<St.Container>
				<S.ContainerCard>
					<S.ContainerImgPet>
						<S.ImgPet src={pet.petImage} alt="foto do pet" />
					</S.ContainerImgPet>
					<S.CardBody>
						<S.ContentText>
							Peso: <S.ContentCardText>{pet.peso} kg</S.ContentCardText>
						</S.ContentText>
						<S.ContentText>
							Cor: <S.ContentCardText>{pet.cor}</S.ContentCardText>
						</S.ContentText>
						<S.ContentText>
							Espécie: <S.ContentCardText>{pet.especie}</S.ContentCardText>
						</S.ContentText>
						<S.ContentText>
							Raça: <S.ContentCardText>{pet.raca}</S.ContentCardText>
						</S.ContentText>
					</S.CardBody>
					<S.NamePet>
						<S.NamePetText>{pet.nome}</S.NamePetText>
						<S.IconSex />
					</S.NamePet>
				</S.ContainerCard>
				<S.ContainerDescription>
					<S.TextDescription>{pet.sobre}</S.TextDescription>
				</S.ContainerDescription>
				<S.ListCheck>
					<S.ContentListCheck>
						<S.ItemListCheck>
							<S.IconCheck src={iconCheck} alt="Icone de check" />
							<S.TextCheck>Vacinado</S.TextCheck>
						</S.ItemListCheck>
						<S.ItemListCheck>
							<S.IconCheck src={iconCheck} alt="Icone de check" />
							<S.TextCheck>Castrado</S.TextCheck>
						</S.ItemListCheck>
						<S.ItemListCheck>
							<S.IconCheck src={iconCheck} alt="Icone de check" />
							<S.TextCheck>{pet.porte}</S.TextCheck>
						</S.ItemListCheck>
						<S.ItemListCheck>
							<S.IconCheck src={iconCheck} alt="Icone de check" />
							<S.TextCheck>{pet.idade} ano(s)</S.TextCheck>
						</S.ItemListCheck>
					</S.ContentListCheck>
				</S.ListCheck>
			</St.Container>

			<Form onSubmit={formik.handleSubmit}>
				<Styled.ContainerForm>
					<Styled.InputContainer>
						<Styled.Label htmlFor="enderecoAnimal">
							Endereço completo de onde o animal ficará
						</Styled.Label>
						{formik.errors.enderecoAnimal && (
							<small>
								<em>{formik.errors.enderecoAnimal}</em>
							</small>
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
						onClick={() => {
							setStep(2);
							dispatch(countStep({ step: 2 }));
						}}
					>
						Voltar
					</Styled.SButton>
					<Styled.SButton variant="primary" type="submit">
						Continuar
					</Styled.SButton>
				</Styled.ButtonContainer>
			</Form>
		</>
	);
}
