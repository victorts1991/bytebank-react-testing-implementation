import { render, screen } from '@testing-library/react'
import Extrato from './index'

test('Deve renderizar uma lista de transaçoes', () => {
    const transacoes = [{
        transacao: 'Depósito',
        valor: 100
    }]
    render(<Extrato 
        transacoes={transacoes}
    />)
    const lista = screen.getByRole('listitem')
    expect(lista).toBeInTheDocument()
})