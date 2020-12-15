import React from 'react'
import PropTypes from 'prop-types'
import {
  DivTituloParabens, Botao, MSG, DivImg,
} from './Estilos'
import foto from './foto.png'

const Parabens = ({ setAcertou, setErro, setEstado }) => {
  function voltar() {
    setAcertou(false)
    setErro(false)
    setEstado.setUm('x')
    setEstado.setDois('x')
    setEstado.setTres('x')
    setEstado.setQuatro('x')
    setEstado.setCinco('x')
    setEstado.setSeis('x')
    setEstado.setSete('x')
    setEstado.setOito('x')
    setEstado.setNove('x')
  }
  return (
    <div>
      <DivTituloParabens>
        O meu amigo oculto é o Christian!!!
      </DivTituloParabens>
      <DivImg>
        <img src="https://pa1.narvii.com/6692/8bec131a87a9e2f52da26d4140201b0fdf17ce63_hq.gif" alt="fogos" />
      </DivImg>
      <img src={foto} alt="foto" />
      <div>
        <MSG>
          Christian apesar do pouco contato, sei que é um cara gente fina,
          dedicado e inteligente.

        </MSG>
        <MSG>
          Te desejo um Feliz Natal e um Ano Novo cheio de prosperidade, muita alegria e sucesso
          todos os dias!

        </MSG>
      </div>
      <Botao type="button" onClick={() => voltar()}>Voltar</Botao>
    </div>
  )
}
Parabens.propTypes = {
  setAcertou: PropTypes.func,
  setErro: PropTypes.func,
  setEstado: PropTypes.objectOf(PropTypes.func),
}

Parabens.defaultProps = {
  setAcertou: null,
  setErro: null,
  setEstado: null,
}

export default Parabens
