import { render, screen } from "@testing-library/react"
import AboutUsPageMainContent from "."

test('deve renderizar o anchor que contém component AboutUsCard e o atributo target deve ser _blank', () => {
    render(<AboutUsPageMainContent />)

    expect(document.querySelector('a')).toBeInTheDocument()
    expect(document.querySelector('a').getAttribute('target')).toBe('_blank')
})