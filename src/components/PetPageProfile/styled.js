import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsGenderMale } from 'react-icons/bs';


export const ContainerProfile = styled.div`
    display: flex;
    justify-content: center;
    margin: 10vw auto;
    width: 84.37vw;
    height: 30.92vw;
    box-sizing: border-box;

    @media (max-width: 500px) {
        width: 70vw;
        height: 100%;
        flex-wrap: wrap;

    }
`;

export const ContainerCard = styled(Card)`
    width: 24.21vw;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0px .25rem .25rem rgba(159, 159, 159, 0.33);
    box-sizing: border-box;
    border-width: 0;

    @media (max-width: 500px) {
        margin-right: 15vw;
        width: 35vw;  
    }
`;

export const ContainerImgPet = styled.div`
    width: 100%;
    height: 18.13vw;

    @media (max-width: 500px) {
        height: 30vw;  
    }
`;

export const ImgPet = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 1rem 1rem 0 0;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 12.71vw;
    justify-content: center;
    align-items: flex-start;
    padding-left: 3.8vw;

    @media (max-width: 500px) {
        padding-left: 6vw;
        height: 20vw;
    }

`;

export const ContentText = styled.div`
    display: inline-flex;
    align-items: baseline;
    gap: 0.5vw;
    font-size: 1.5vw;
    line-height: 2vw;
    color: #606266;
    font-weight: 600;

    @media (max-width: 500px) {
        font-size: 2.5vw;
        line-height: 3vw;
    }
`;

export const ContentCardText = styled.p`
    display: inline-flex;
    align-items: center;
    font-size: 1.3vw;
    color: #404145;
    font-weight: 400;
    margin-bottom: 0;

    @media (max-width: 500px) {
        font-size: 2vw;
    }
`;

export const NamePet = styled.div`
    position: absolute;
    width: 18.75vw;
    height: 4.2vw;
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    background-image: 
    linear-gradient( 
        to bottom, 
        rgba(195, 195, 195, 0.25), 
        rgba(152, 152, 152, 0.55),
         rgba(0, 0, 0, 0.25));
    box-shadow: 0px 0.25rem .25rem rgba(0, 0, 0, 0.25), 0px .25rem .25rem;
    border-radius: 3.125vw;
    z-index: 999;
    left: 59%;
    bottom: 84%;

    @media (max-width: 500px) {
        left: 65%;
        bottom: 85%;
        width: 25vw;
        height: 6vw;
    }
`;

export const NamePetText = styled.span`
    font-size: 1.4vw;
    line-height: 1.6vw;
    font-weight: 600;
    color: #606266;

    @media (max-width: 500px) {
        font-size: 2vw;
    }
`;

export const IconSex = styled(BsGenderMale)`
    font-size: 1.5vw;
    position: absolute;
    left: 84%;
    color: #404145;
    font-weight: 600;

    @media (max-width: 500px) {
        font-size: 2.3vw;
        left: 85%;
    }
`;

export const ContainerDescription = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 2vw;
    justify-content: end;

    @media (max-width: 500px) {
        order: 1;
        width: 70vw;
        margin: 5vw 0;
        padding: 0;
    }
`;

export const TextDescription = styled.p`
    width: 31.44vw;
    height: 18.55vw;
    font-size: 1.3vw;
    line-height: 1.5vw;
    font-weight: 400;
    color: #404145;
    margin-bottom: 3vw;

    @media (max-width: 500px) {
        width: 100%;
        height: 30vw;
        font-size: 2.5vw;
        line-height: 3vw;
    }
`;

export const ButtonDescription = styled(Link)`
    text-align: center;
    font-size: 1vw;
    text-decoration: none;
    border-radius: 0.25rem;
    width: 15.62vw;
    color: #FFF;
    background-color: #8D73E4;
    padding: 1vw 0;
    transition: all .1s ease-in-out;

    &:hover{
        background-color: #FFF;
        color: #8D73E4;
        border: 0.016rem solid #8D73E4;
    }

    @media (max-width: 500px) {
        width: 60%;
        padding: 2vw 0;
        font-size: 2.5vw;
    }
`;

export const ListCheck = styled.div`
    margin: 0 2vw;
    width: 15vw;
    display: flex;
    align-items: center;

    @media (max-width: 500px) {
        width: 16vw;
    };
`;

export const ContentListCheck = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`; 

export const ItemListCheck = styled.li`
    display: inline-flex;
    align-items: center;
    gap: .5vw;
    margin-bottom: 2vw;

    @media (max-width: 500px) {
        gap: 1vw;
        margin-bottom: 3vw;
          
    }
    
`;

export const IconCheck = styled.img`
    width: 2vw;
    height: 2vw;

    @media (max-width: 500px) {
        width: 4vw;
        height: 4vw;
    }
`;

export const TextCheck = styled.span`
    font-size: 1.2vw;

    @media (max-width: 500px) {
       font-size: 2.5vw;
    }
`;