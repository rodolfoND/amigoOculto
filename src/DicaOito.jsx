import PropTypes from 'prop-types'
import React from 'react'
import { LetraCorreta, Perguntas } from './Estilos'

const DicaOito = ({ valor, setValor }) => (
  <>
    <LetraCorreta>{valor === 'a' ? 'A' : null}</LetraCorreta>
    <div>
      Se considera um:
      <Perguntas>
        A -
        {' '}
        <input type="radio" name="8" value="a" onChange={(e) => setValor(e.target.value)} />
        {' '}
        NERD
      </Perguntas>
      <Perguntas erro={valor === 'b'}>
        B -
        {' '}
        <input type="radio" name="8" value="b" onChange={(e) => setValor(e.target.value)} />
        {' '}
        LED
      </Perguntas>
      <Perguntas erro={valor === 'c'}>
        C -
        {' '}
        <input type="radio" value="c" name="8" onChange={(e) => setValor(e.target.value)} />
        {' '}
        TED
      </Perguntas>
    </div>
  </>
)

DicaOito.propTypes = {
  setValor: PropTypes.func,
  valor: PropTypes.string,
}

DicaOito.defaultProps = {
  setValor: undefined,
  valor: null,
}

export default DicaOito
