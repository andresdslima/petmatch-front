import React from 'react';
import { Carousel } from 'react-bootstrap';
import * as S from './styled'
import catMatch from '../../assets/banner/catMatch.png'
import dogAbout from '../../assets/banner/dogAbout.png'
import dogFormFinish from '../../assets/banner/dogFormFinish.png';
import dogSent from '../../assets/banner/dogSent.png';
import dogsFormContact from '../../assets/banner/dogsFormContact.png';
import dogsONG from '../../assets/banner/dogsONG.png';

import { useLocation } from 'react-router-dom';

const Banner = () => {
    const location = useLocation();
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
     if (location?.pathname === '/formularioenviadofinish') {
				imgBanner = dogFormFinish;
				textBanner = (
					<S.TextBanner>
						SEJA FELIZ COM SEU<br /> NOVO MEMBRO DA FAMILIA!
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
