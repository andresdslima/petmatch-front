import { render, screen } from "@testing-library/react"
import BlogMainContent from "."




test('deve renderizar a imagem do card', () => {
    render(<BlogMainContent />)

    expect(document.querySelector('div')).toBeInTheDocument()
})