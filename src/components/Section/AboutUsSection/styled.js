import styled from 'styled-components'

import { Container } from 'react-bootstrap'


export const MainContainer = styled(Container)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 3.9em;

    @media only screen and (max-width: 576px) {
        display: block;
    }
`

export const HowItWorks = styled.div`
   width: 40% ;
 
   @media only screen and (max-width: 576px){
    width: 70%;
    margin: 10px auto;
}
    
`

export const Titles = styled.p`
    font-weight: 600;
    font-size: 21px;
    line-height: 24px;
    color: #000000;
    text-align: left;
`

export const Paragraphs = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #141518;
    text-align: justify;
`