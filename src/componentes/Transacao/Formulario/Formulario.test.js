import { render, screen } from '@testing-library/react'
import useEvent from '@testing-library/user-event'
import Formulario from './index'
import userEvent from '@testing-library/user-event'

describe('Deve rendererizar um campo de input', () => {
    test('Com o type number e que pode ser preenchido', () => {
        render(<Formulario />)
        const campoTexto = screen.getByPlaceholderText('Digite um valor')

        expect(campoTexto).toBeInTheDocument()
        expect(campoTexto).toHaveAttribute('type', 'number')

        userEvent.type(campoTexto, '50')

        expect(campoTexto).toHaveValue(50)
    })
})

