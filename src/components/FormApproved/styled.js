import styled from "styled-components";
import { Card, Col, Container, Row, Button } from 'react-bootstrap'

export const MainCard = styled(Card)`
box-shadow: 0px 0px 13px rgba(79, 79, 79, 0.33);

@media only screen and (max-width: 768px) {
   width: 80%;
   margin: 0 auto;
}
`

export const SecondCard = styled(Card)`
box-shadow: 0px 0px 13px rgba(79, 79, 79, 0.33);

@media only screen and (max-width: 768px) {
   width: 80%;
   margin: 0 auto;
}
`

export const CardImage = styled(Card.Img)`
border-radius: 16px 16px 0px 0px !important;

@media only screen and (max-width: 576px) {
    display: none;
}
`

export const CardBody = styled(Card.Body)`
padding-bottom: 5px;
`

export const CardTitle = styled(Card.Title)`
font-weight: 600;
font-size: 24px;
line-height: 28px;
color: #F76F34;
`

export const CardText = styled(Card.Text)`
display: flex; 
justify-content: space-between;

@media only screen and (max-width: 992px) {
    justify-content: space-evenly;
}

`

export const CardTextApproved = styled(Card.Text)`
font-weight: 600;
font-size: 14px;
line-height: 16px;
color: #7355D3;
width: 70%;
margin: 0 auto;
`
export const List = styled.ul`
list-style: none;
`

export const ListItem = styled.li`
margin-bottom: 30px;
text-align: left;
font-weight: 600;
font-size: 14px;
line-height: 16px;

&:before{
    content: "•";
    color: #8D73E4;
    border: 2px solid #FFFFFF
}

@media only screen and (max-width: 576px) {
    width:70%;
}
`

export const ButtonDownload = styled(Button)`
width:45%;
margin: 0 auto;
background: #8D73E4;
border-radius: 4px;
border: none;
cursor: pointer;

&:hover{
    background-color: #7461B4;
}
`

export const CardTextParagraph = styled(Card.Text)`
width: 65%;
margin: 0 auto;
`
export const Paragraphs = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 14px;
text-align: center;
`

export const ParagraphSpecial = styled.p`
font-weight: 600;
font-size: 14px;
line-height: 14px;
text-align: center;
color: #6B4BCC;
padding-top: 10px;
`
