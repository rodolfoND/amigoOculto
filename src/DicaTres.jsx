import PropTypes from 'prop-types'
import React from 'react'
import { LetraCorreta, Perguntas } from './Estilos'

const DicaTres = ({ valor, setValor }) => (
  <>
    <LetraCorreta>{valor === 'r' ? 'R' : null}</LetraCorreta>
    <div>
      É um grande fã do:
      <Perguntas erro={valor === 'p'}>
        P -
        {' '}
        <input type="radio" name="3" value="p" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Mussolini
      </Perguntas>
      <Perguntas erro={valor === 'q'}>
        Q -
        {' '}
        <input type="radio" name="3" value="q" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Hitler
      </Perguntas>
      <Perguntas>
        R -
        {' '}
        <input type="radio" value="r" name="3" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Homem Aranha
      </Perguntas>
    </div>
  </>
)

DicaTres.propTypes = {
  setValor: PropTypes.func,
  valor: PropTypes.string,
}

DicaTres.defaultProps = {
  setValor: undefined,
  valor: null,
}

export default DicaTres
