import * as S from './styled'

const MorePetsButton = () => {
    return (
        <S.ButtonContainer>
        {/* <S.MorePetsButton to="/allpets"> */}
        <S.MorePetsButton to="/">
            Todos os pets
        </S.MorePetsButton>
    </S.ButtonContainer>
    )
}

export default MorePetsButton;