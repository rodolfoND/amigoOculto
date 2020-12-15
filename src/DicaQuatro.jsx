import PropTypes from 'prop-types'
import React from 'react'
import { LetraCorreta, Perguntas } from './Estilos'

const DicaQuatro = ({ valor, setValor }) => (
  <>
    <LetraCorreta>{valor === 'i' ? 'I' : null}</LetraCorreta>
    <div>
      Ingressou na DTI em:
      <Perguntas>
        I -
        {' '}
        <input type="radio" name="4" value="i" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Agosto de 2020
      </Perguntas>
      <Perguntas erro={valor === 'j'}>
        J -
        {' '}
        <input type="radio" name="4" value="j" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Agosto de 2021
      </Perguntas>
      <Perguntas erro={valor === 'k'}>
        K -
        {' '}
        <input type="radio" value="k" name="4" onChange={(e) => setValor(e.target.value)} />
        {' '}
        Agosto de Deus
      </Perguntas>
    </div>
  </>
)

DicaQuatro.propTypes = {
  setValor: PropTypes.func,
  valor: PropTypes.string,
}

DicaQuatro.defaultProps = {
  setValor: undefined,
  valor: null,
}

export default DicaQuatro
