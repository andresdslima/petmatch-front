import { render, screen } from "@testing-library/react"
import AboutBanner from "."


test('Tag CardBanner deve receber a classe container', () => {
    render(<AboutBanner />)

    const AboutBannerTest = AboutBanner().type.styledComponentId
    const MyCardComponent = document.getElementsByClassName(AboutBannerTest)
    const MyCardComponentTest = MyCardComponent[0]

    expect(MyCardComponentTest).toHaveClass('container')
})

test('deve renderizar a imagem do card', () => {
    render(<AboutBanner />)

    const CardImage = screen.getByRole('img')


    expect(CardImage).toBeInTheDocument()
})