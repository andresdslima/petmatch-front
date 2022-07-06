import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import * as S from './styled'
import catMatch from '../../assets/banner/catMatch.png'
import dogAbout from '../../assets/banner/dogAbout.png'
import dogFormFinish from '../../assets/banner/dogFormFinish.png';
import dogSent from '../../assets/banner/dogSent.png';
import dogsFormContact from '../../assets/banner/dogsFormContact.png';
import dogsONG from '../../assets/banner/dogsONG.png';
import catStep1 from '../../assets/banner/catStep1.png';
import dogStep2 from '../../assets/banner/dogStep2.png';
import mouseStep3 from '../../assets/banner/mouseStep3.png';
import catStep4 from '../../assets/banner/catStep4.png';
import AdoptionStep1 from '../AdoptionStep1';
import AdoptionStep2 from '../AdoptionStep2';
import AdoptionStep3 from '../AdoptionStep3';
import AdoptionStep4 from '../AdoptionStep4';
import dogBlog from '../../assets/banner/dogBlog.png'


import { useLocation } from 'react-router-dom';

const Banner = () => {
	const location = useLocation();
	const [step, setStep] = useState(1)
	let imgBanner;
	let textBanner;
	let altBanner;
	if (location?.pathname === '/matches') {
		imgBanner = catMatch;
		textBanner = (
			<S.TextBanner>
				COM CERTEZA SEU PRÓXIMO
				<br />FAMILIAR ESTÁ AQUI!
			</S.TextBanner>
		);
		altBanner = "carinho gato";
	}
	if (location?.pathname === '/formularioenviado') {
		imgBanner = dogSent;
		textBanner = (
			<S.TextBanner>
				PERFEITO, ESTAMOS TÃO<br />ANSIOSOS QUANTO VOCÊ!
			</S.TextBanner>
		);
		altBanner = 'cachorro sendo abraçado';
	}
	if (location?.pathname === '/formularioaprovadofinalcontato') {
		imgBanner = dogsFormContact;
		textBanner = (
			<S.TextBanner>
				FALTA BEM POUCO AGORA<br /> AGUENTA CORAÇÃO!
			</S.TextBanner>
		);
		altBanner = 'dois cachorros pequenos';
	}
	if (location?.pathname === '/formularioaprovadofinal') {
		imgBanner = dogFormFinish;
		textBanner = (
			<S.TextBanner>
				SEJA FELIZ COM SEU
				<br /> NOVO MEMBRO DA FAMILIA!
			</S.TextBanner>
		);
		altBanner = 'dois garotos e um cachorro';
	}
	if (location?.pathname === '/ongs') {
		imgBanner = dogsONG;
		textBanner = (
			<S.TextBanner>
				NOSSA FAMÍLIA É GRANDE E<br /> QUEREMOS QUE FIQUE AINDA MAIOR!
			</S.TextBanner>
		);
		altBanner = 'filhotes de cachorro';
	}
	if (location?.pathname === '/sobre') {
		imgBanner = dogAbout;
		textBanner = (
			<S.TextBanner>
				VOCÊ TAMBÉM FAZ PARTE DA PET MATCH<br />VEJA NOSSOS COLABORADORES
			</S.TextBanner>
		);
		altBanner = 'olhos de um cachorro';
	}
	if (location?.pathname === '/adoption' && step === 1 && <AdoptionStep1 setStep={setStep} />) {
		imgBanner = catStep1;
		textBanner = (
			<S.TextBanner>
				VOCÊ ESTÁ NO CAMINHO CERTO<br /> EM BUSCA DA FELICIDADE!
			</S.TextBanner>
		);
		altBanner = 'gato brincando com a mão';
	}
	if (location?.pathname === '/adoption' && step === 2 && <AdoptionStep2 setStep={setStep} />) {
		imgBanner = dogStep2;
		textBanner = <S.TextBanner>FALTA SÓ UM POUCO<br /> VAMOS LÁ!</S.TextBanner>;
		altBanner = 'gato brincando com a mão';
	}
	if (location?.pathname === '/adoption' && step === 3 && <AdoptionStep3 setStep={setStep} />) {
		imgBanner = mouseStep3;
		textBanner = (
			<S.TextBanner>
				ESTAMOS QUASE ACABANDO<br /> PREENCHA COM ATENÇÃO!
			</S.TextBanner>
		);
		altBanner = 'gato brincando com a mão';
	}
	if (location?.pathname === '/adoption' && step === 4 && <AdoptionStep4 setStep={setStep} />) {
		imgBanner = catStep4;
		textBanner = (
			<S.TextBanner>
				ESSA ETAPA É SUPER IMPORTANTE<br /> FAÇA COM ATENÇÃO PELO SEU PET!
			</S.TextBanner>
		);
		altBanner = 'gato brincando com a mão';
	}

	if (location?.pathname === '/blogs') {
		imgBanner = dogBlog;
		textBanner = (
			<S.TextBanner>
				AS INFORMAÇÕES MAIS IMPORTANTES <br />VOCÊ ENCONTRA POR AQUI!
			</S.TextBanner>
		);
		altBanner = 'cachorro olhando com alegria';
	}

	return (
		<S.ContainerBanner>
			<Carousel.Item>
				<S.ImageBanner className="d-block w-100" src={imgBanner} alt={altBanner} />
				<Carousel.Caption>
					{textBanner}
				</Carousel.Caption>
			</Carousel.Item>
		</S.ContainerBanner>
	);
};

export default Banner;
