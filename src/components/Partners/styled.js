import styled from "styled-components";

export const Title = styled.div`
font-size: 1.56vw;
font-weight: 600;

@media only screen and (max-width: 500px) {
  font-size: 12px;
  }
`

export const ContainerAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Paragrafhs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`;

export const PartnerContainerLeft = styled.div`
display: flex;
justify-content: flex-start;
gap: 4.55vw;
align-items: center;
padding: 3.2vw 0;
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
  padding: 1.6vw 0;
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
max-width: 60%;

@media only screen and (max-width: 900px) {
    font-size: 1.5vw;
  }

@media only screen and (max-width: 500px) {
    font-size: 2.5vw;
    text-align: left;
    max-width: 100%;
  }
`

export const PuppiesImage = styled.img`
width: 26.25vw;
/* margin: 0 auto; */

@media only screen and (max-width: 900px) {
  width: 39.37vw;
  }

@media only screen and (max-width: 500px) {
  width: 52.5vw;
  }
`