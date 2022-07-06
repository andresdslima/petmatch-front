import React from "react";
import dogWork from '../../assets/underConstruction/dogWork.png'
import * as S from './styled'


const PageUnderConstruction = () => {
    return (
			<S.ContainerConstruction>
				<S.ImageConstruction src={dogWork} alt="Cachorro trabalhando" />
				<S.TextConstruction>
					Página em construção
					<br />
				</S.TextConstruction>
				<S.SubTextConstruction>
					Em breve você verá tudo aqui em primeira mão!
				</S.SubTextConstruction>
			</S.ContainerConstruction>
		);
}

export default PageUnderConstruction;