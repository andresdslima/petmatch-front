import { render, screen } from "@testing-library/react"
import CardPosts from "."
import { BrowserRouter as Router } from 'react-router-dom'



test('deve renderizar a imagem card', () => {
    render(
        <Router>
            <CardPosts />
        </Router>)

    const ImageName = screen.getByRole('img')

    expect(ImageName).toBeInTheDocument()
})

test('deve renderizar o botão do card', () => {
    render(
        <Router>
            <CardPosts />
        </Router>)

    const ButtonName = screen.getByRole('button')

    expect(ButtonName).toBeInTheDocument()
})