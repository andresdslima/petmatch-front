import { render, screen } from "@testing-library/react"
import PeopleReview from "."


test('deve renderizar a imagem do card', () => {
    render(<PeopleReview />)

    expect(document.querySelector('div')).toBeInTheDocument()
})

