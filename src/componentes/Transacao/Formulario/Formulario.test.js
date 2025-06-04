import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Formulario from './index'

describe('Deve rendererizar um campo de input', () => {
    test('Com o type number e que pode ser preenchido', () => {
        render(<Formulario />)
        const campoTexto = screen.getByPlaceholderText('Digite um valor')

        expect(campoTexto).toBeInTheDocument()
        expect(campoTexto).toHaveAttribute('type', 'number')

        userEvent.type(campoTexto, '50')

        expect(campoTexto).toHaveValue(50)
    })

    test('Deve chamar um evento de onSubmit ao clicar em realizar transação', () => {

        const realizarTransacao = jest.fn()

        render(<Formulario 
            realizarTransacao={realizarTransacao}
        />)
        const botao = screen.getByRole('button')

        userEvent.click(botao)

        expect(realizarTransacao).toHaveBeenCalledTimes(1)
    })

})

