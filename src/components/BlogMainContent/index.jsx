import { Container } from 'react-bootstrap'

import DogBlogPage from '../../assets/images/dogBlogPage.svg'

import * as S from './styled'

const BlogMainContent = () => {
    return (
        <S.BlogContainer>
            <S.DogBlogImage src={DogBlogPage}></S.DogBlogImage>
            <S.BlogParagraph>Página em construção<br />
                Em breve você verá tudo aqui em primeira mão!</S.BlogParagraph>
        </S.BlogContainer>
    )
}

export default BlogMainContent