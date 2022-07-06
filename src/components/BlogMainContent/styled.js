import { Container } from "react-bootstrap"
import styled from "styled-components"

export const BlogContainer = styled(Container)`
    margin-bottom: 100px;
`

export const DogBlogImage = styled.img`
width: 70%;
margin-top: 50px;

`

export const BlogParagraph = styled.p`
font-weight: 600;
font-size: 1.5rem;
line-height: 28px;
color: #6B4BCC;

@media (max-width: 500px) {
		font-size: 0.9rem;
        margin-top: 30px;
	}


`