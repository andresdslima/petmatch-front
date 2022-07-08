import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import * as S from './styled'

import CatImage from '../../assets/images/catAdoptionImage.svg'

const FormApproved = () => {
    return (
        <>
            <Container>
                <Row xs={1} sm={1} md={1} lg={2} xlg={2}>
                    <Col>
                        <S.MainCard>
                            <S.CardImage variant="top" src={CatImage} />
                            <Card.Body>
                                <S.CardTitle className='my-3'>Você foi aprovado</S.CardTitle>
                                <S.CardTextApproved className='mb-5'>
                                    Agora é a hora de você entrar em contato com o doador e combinar o restante dos detalhes!
                                </S.CardTextApproved>
                            </Card.Body>
                        </S.MainCard>
                    </Col>
                    <Col>
                        <S.SecondCard>
                            <S.CardBody>
                                <S.CardText>
                                    <S.List>
                                        <S.ListItem>Doador: Maria da Silva</S.ListItem>
                                        <S.ListItem>RG: 12345678</S.ListItem>
                                        <S.ListItem>CPF: 1234567899</S.ListItem>
                                    </S.List>
                                    <S.List>
                                        <S.ListItem>Celular: (11)9123566506</S.ListItem>
                                        <S.ListItem>Telefone fixo: ***</S.ListItem>
                                        <S.ListItem>E-mail: mariadasilva@gmail.com</S.ListItem>
                                    </S.List>
                                </S.CardText>
                            </S.CardBody>
                            <S.ButtonDownload>Download do termo </S.ButtonDownload>
                            <Card.Body className='pt-4'>
                                <S.CardTextParagraph>
                                    <S.Paragraphs> A PetMatch fica imensamente feliz de poder participar desse momento! Desejamos que agora, com seu pet, você tenha uma rotina ainda melhor, um dia-a-dia mais saudável e que juntos, sejam muito, mas muito felizes.
                                    </S.Paragraphs>

                                    <S.Paragraphs>
                                        Não esqueça de comentar conosco sobre foi o processo, nos conte como o pet está reagindo... Queremos saber de tudo!
                                    </S.Paragraphs>


                                    <S.ParagraphSpecial> Obrigado por nos escolher, e esperamos que esse seja o início de uma belíssima história.
                                    </S.ParagraphSpecial>
                                </S.CardTextParagraph>
                            </Card.Body>
                        </S.SecondCard>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FormApproved