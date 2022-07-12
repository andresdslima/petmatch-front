import styled from "styled-components";
import { Container } from 'react-bootstrap';

export const PostsContainer = styled(Container)`
display: flex;
justify-content: center;
gap: 10%;
margin-bottom: 5vw;


@media only screen and (max-width: 500px) {
    flex-direction: column;
    gap: 25px;	
}
`