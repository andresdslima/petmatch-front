import styled from "styled-components";

export const Title = styled.div`
font-size: 1.56vw;
font-weight: 600;

@media only screen and (max-width: 500px) {
  font-size: 12px;
  }
`

export const PartnerContainerLeft = styled.div`
display: flex;
justify-content: flex-start;
gap: 4.55vw;
align-items: center;
padding: 50px 0;
text-align: start;
position: relative;

&::before {
    width: 24.6vw;
    border-bottom: 1px solid #9FA1A6;
    content: '';
    position: absolute;
    left:37.5%;
    bottom:0;
  }

@media only screen and (max-width: 500px) {
  flex-direction: column;
  text-align: center;
  padding: 25px 0;
  }
`

export const PartnerContainerRight = styled(PartnerContainerLeft)`
justify-content: flex-end;
text-align: end;

@media only screen and (max-width: 500px) {
  flex-direction: column-reverse;
  text-align: center;
  }
`

export const ImageDiv = styled.div`
display: flex;
justify-content: center;
width: 12.8vw;

@media only screen and (max-width: 900px) {
  width: 19.2vw;
  }

@media only screen and (max-width: 500px) {
  width: 25.6vw;
  }
`

export const CaoSemDonoImage = styled.img`
width: 12.8vw;

@media only screen and (max-width: 900px) {
  width: 19.2vw;
  }

@media only screen and (max-width: 500px) {
  width: 25.6vw;
  }
`

export const SuipaImage = styled.img`
width: 12.65vw;

@media only screen and (max-width: 900px) {
  width: 19.98vw;
  }

@media only screen and (max-width: 500px) {
  width: 25.3vw;
  }
`

export const AmparaAnimalImage = styled.img`
width: 12.5vw;

@media only screen and (max-width: 900px) {
  width: 18.75vw;
  }

@media only screen and (max-width: 500px) {
  width: 25vw;
  }
`

export const InstitutoLuisaMelImage = styled.img`
width: 6.88vw;

@media only screen and (max-width: 900px) {
  width: 10.32vw;
  }

@media only screen and (max-width: 500px) {
  width: 13.76vw;
  }
`

export const PartnerDescription = styled.p`
font-size: 1.1vw;
margin: 0;

@media only screen and (max-width: 900px) {
    font-size: 10px;
  }

@media only screen and (max-width: 500px) {
    font-size: 7px;
  }
`

export const PuppiesImage = styled.img`
width: 26.25vw;

@media only screen and (max-width: 900px) {
  width: 39.37vw;
  }

@media only screen and (max-width: 500px) {
  width: 52.5vw;
  }
`