import PropTypes from 'prop-types'
import React from 'react'
import { LetraCorreta, Perguntas } from './Estilos'

const Dica = ({ valor, setValor }) => (
  <>
    <LetraCorreta>{valor === 'c' ? 'C' : null}</LetraCorreta>
    <div>
      Estuda na faculdade:
      <Perguntas erro={valor === 'a'}>
        A -
        {' '}
        <input type="radio" name="1" value="a" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Uno
      </Perguntas>
      <Perguntas erro={valor === 'b'}>
        B -
        {' '}
        <input type="radio" name="1" value="b" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Duo
      </Perguntas>
      <Perguntas>
        C -
        {' '}
        <input type="radio" value="c" name="1" onChange={(e) => setValor(e.target.value)} />
        {' '}
        UNA
      </Perguntas>
    </div>
  </>
)

Dica.propTypes = {
  setValor: PropTypes.func,
  valor: PropTypes.string,
}

Dica.defaultProps = {
  setValor: undefined,
  valor: null,
}

export default Dica
