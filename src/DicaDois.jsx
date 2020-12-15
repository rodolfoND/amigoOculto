import PropTypes from 'prop-types'
import React from 'react'
import { LetraCorreta, Perguntas } from './Estilos'

const DicaDois = ({ valor, setValor }) => (
  <>
    <LetraCorreta>{valor === 'h' ? 'H' : null}</LetraCorreta>
    <div>
      Seu maior inimigo é:
      <Perguntas erro={valor === 'f'}>
        F -
        {' '}
        <input type="radio" name="2" value="f" onChange={(e) => setValor(e.target.value)} />
        {' '}
        HP
      </Perguntas>
      <Perguntas erro={valor === 'g'}>
        G -
        {' '}
        <input type="radio" name="2" value="g" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Oculto
      </Perguntas>
      <Perguntas>
        H -
        {' '}
        <input type="radio" value="h" name="2" onChange={(e) => setValor(e.target.value)} />
        {' '}
        BUG
      </Perguntas>
    </div>
  </>
)

DicaDois.propTypes = {
  setValor: PropTypes.func,
  valor: PropTypes.string,
}

DicaDois.defaultProps = {
  setValor: undefined,
  valor: null,
}

export default DicaDois
