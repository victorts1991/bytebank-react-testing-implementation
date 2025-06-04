import { render, screen } from '@testing-library/react'
import Menu from './index'

test('Deve renderizar um link para a página inicial', () => {
    render(<Menu />)
    const linkPaginaInicial = screen.getByText('Inicial')

    expect(linkPaginaInicial).toBeInTheDocument()
})

test('Deve renderizar uma lista de links', () => {
    render(<Menu />)
    const listaDeLinks = screen.getAllByRole('link')

    expect(listaDeLinks).toHaveLength(4)
})

test('Deve renderizar uma lista de links com a classe link', () => {
    render(<Menu />)
    const listaDeLinks = screen.getAllByRole('link')

    listaDeLinks.forEach((link) => expect(link).toHaveClass('link'))
})
