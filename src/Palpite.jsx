import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Botao, CaixaTexto } from './Estilos'

const Palpite = ({ setAcertou, setErro }) => {
  const [nome, setNome] = useState('')

  function validar(e) {
    e.preventDefault()
    if (nome.toLowerCase().includes('christian') || nome.toLowerCase().includes('alexsander')) {
      setAcertou(true)
    } else {
      setErro(true)
    }
  }

  function alterarCampo(valor) {
    setErro(false)
    setNome(valor)
  }

  return (
    <form onSubmit={(e) => validar(e)}>
      <CaixaTexto type="text" value={nome} onChange={(e) => alterarCampo(e.target.value)} placeholder="Digite o nome" />
      <Botao type="button" onClick={(e) => validar(e)}>Advinhar</Botao>
    </form>
  )
}

Palpite.propTypes = {
  setAcertou: PropTypes.func,
  setErro: PropTypes.func,
}

Palpite.defaultProps = {
  setAcertou: null,
  setErro: null,
}

export default Palpite
