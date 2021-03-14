import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

import Header from './header'

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('contêm os links para todas as páginas', () => {
    const { getByText } = render(<Header />)

    expect(getByText('Início')).toHaveProperty('href', 'http://localhost/')
    expect(getByText('Sobre')).toHaveProperty('href', 'http://localhost/sobre/')
    expect(getByText('Atividades')).toHaveProperty('href', 'http://localhost/atividades/')
    expect(getByText('Empréstimos')).toHaveProperty('href', 'http://localhost/emprestimos/')
    expect(getByText('Contato')).toHaveProperty('href', 'http://localhost/contato/')
  })
})
