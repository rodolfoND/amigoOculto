import PropTypes from 'prop-types'
import React from 'react'
import { LetraCorreta, Perguntas } from './Estilos'

const DicaSete = ({ valor, setValor }) => (
  <>
    <LetraCorreta>{valor === 'i' ? 'I' : null}</LetraCorreta>
    <div>
      Hoje está no projeto:
      <Perguntas erro={valor === 'h'}>
        H -
        {' '}
        <input type="radio" name="7" value="h" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Verão
      </Perguntas>
      <Perguntas>
        I -
        {' '}
        <input type="radio" name="7" value="i" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Novo Portal Martins
      </Perguntas>
      <Perguntas erro={valor === 'j'}>
        J -
        {' '}
        <input type="radio" value="j" name="7" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Gemini
      </Perguntas>
    </div>
  </>
)

DicaSete.propTypes = {
  setValor: PropTypes.func,
  valor: PropTypes.string,
}

DicaSete.defaultProps = {
  setValor: undefined,
  valor: null,
}

export default DicaSete
