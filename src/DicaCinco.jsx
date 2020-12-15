import PropTypes from 'prop-types'
import React from 'react'
import { LetraCorreta, Perguntas } from './Estilos'

const DicaCinco = ({ valor, setValor }) => (
  <>
    <LetraCorreta>{valor === 's' ? 'S' : null}</LetraCorreta>
    <div>
      Mora no:
      <Perguntas>
        S -
        {' '}
        <input type="radio" name="5" value="s" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Barreiro
      </Perguntas>
      <Perguntas erro={valor === 't'}>
        T -
        {' '}
        <input type="radio" name="5" value="t" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Lamaceiro
      </Perguntas>
      <Perguntas erro={valor === 'u'}>
        U -
        {' '}
        <input type="radio" value="u" name="5" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Barbeiro
      </Perguntas>
    </div>
  </>
)

DicaCinco.propTypes = {
  setValor: PropTypes.func,
  valor: PropTypes.string,
}

DicaCinco.defaultProps = {
  setValor: undefined,
  valor: null,
}

export default DicaCinco
