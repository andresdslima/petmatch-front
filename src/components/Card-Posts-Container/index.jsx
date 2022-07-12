import CardPosts from "../../components/Cards/Card-Posts"
import DogPostImage from '../../assets/images/dogPostCard.svg'
import PeacockPostImage from '../../assets/images/peacockPostCard.svg'
import * as S from './styled'

const CardPostsContainer = () => {
    return (
        <S.PostsContainer>
        <CardPosts imageName={PeacockPostImage}></CardPosts>
        <CardPosts imageName={DogPostImage}></CardPosts>
        </S.PostsContainer>
    )
}

export default CardPostsContainer