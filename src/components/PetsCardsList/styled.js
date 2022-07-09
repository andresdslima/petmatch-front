import styled from "styled-components";

import { Card } from 'react-bootstrap'

export const Container = styled.div`
text-align: center !important;`

export const CardContainer = styled(Card)`
/* text-align: center;
    position: relative;
    width: 11.8em;
    border-radius: 16px !important;
    box-shadow: 0px 4px 4px rgba(159, 159, 159, 0.33) !important;
    
    @media only screen and (max-width: 576px){
        width: 8.1em
    } */
    `

export const MatchIconContainer = styled.div`
width: 80%;
    position: absolute;
    left: 45%;
    top: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

@media only screen and (max-width: 576px){
    top: 40%;
}

    `
export const CardImage = styled(Card.Img)`
    /* width: 100%;
    height: 7.75em !important;
    object-fit: cover; */
    `
export const MatchIcon = styled.img`
 width: 30%;
 `

export const MatchPercent = styled.span`
  /* font-size: 12px;
    line-height: 14px;
    color: #F76F34;

    @media only screen and (max-width: 992px) {
    
        font-size: 12px;
    
}

@media only screen and (max-width: 768px) {

    font-size: 12px;

}

@media only screen and (max-width: 576px) {
    font-size: 12px;

} */
    `
export const CardTitle = styled(Card.Title)`
    font-size: 14px !important;
    font-weight: 600;
    line-height: 16px;
    color: #404145 !important;
    `
export const CardText = styled(Card.Text)`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #404145 !important;`