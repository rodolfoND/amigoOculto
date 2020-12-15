import PropTypes from 'prop-types'
import React from 'react'
import { LetraCorreta, Perguntas } from './Estilos'

const DicaNove = ({ valor, setValor }) => (
  <>
    <LetraCorreta>{valor === 'n' ? 'N' : null}</LetraCorreta>
    <div>
      Já conquistou o prêmio:
      <Perguntas erro={valor === 'm'}>
        M -
        {' '}
        <input type="radio" name="9" value="m" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Nobel da Paz
      </Perguntas>
      <Perguntas>
        N -
        {' '}
        <input type="radio" name="9" value="n" onChange={(e) => setValor(e.target.value)} />
        {' '}
        12ª ExpoUna-SI com o projeto Hope
      </Perguntas>
      <Perguntas erro={valor === 'o'}>
        O -
        {' '}
        <input type="radio" value="o" name="9" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Troféu Imprensa
      </Perguntas>
    </div>
  </>
)

DicaNove.propTypes = {
  setValor: PropTypes.func,
  valor: PropTypes.string,
}

DicaNove.defaultProps = {
  setValor: undefined,
  valor: null,
}

export default DicaNove
