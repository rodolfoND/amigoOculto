import PropTypes from 'prop-types'
import React from 'react'
import { LetraCorreta, Perguntas } from './Estilos'

const DicaSeis = ({ valor, setValor }) => (
  <>
    <LetraCorreta>{valor === 't' ? 'T' : null}</LetraCorreta>
    <div>
      Seu primeiro projeto na Triforce foi:
      <Perguntas erro={valor === 's'}>
        S -
        {' '}
        <input type="radio" name="6" value="s" onChange={(e) => setValor(e.target.value)} />
        {' '}
        QIX
      </Perguntas>
      <Perguntas>
        T -
        {' '}
        <input type="radio" name="6" value="t" onChange={(e) => setValor(e.target.value)} />
        {' '}
        PIX
      </Perguntas>
      <Perguntas erro={valor === 'u'}>
        U -
        {' '}
        <input type="radio" value="u" name="6" onChange={(e) => setValor(e.target.value)} />
        {' '}
        FIX
      </Perguntas>
    </div>
  </>
)

DicaSeis.propTypes = {
  setValor: PropTypes.func,
  valor: PropTypes.string,
}

DicaSeis.defaultProps = {
  setValor: undefined,
  valor: null,
}

export default DicaSeis
