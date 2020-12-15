import React, { useEffect, useState } from 'react'
import Dica from './Dica'
import DicaCinco from './DicaCinco'
import DicaDois from './DicaDois'
import DicaQuatro from './DicaQuatro'
import DicaSeis from './DicaSeis'
import DicaSete from './DicaSete'
import DicaTres from './DicaTres'
import DicaOito from './DicaOito'
import DicaNove from './DicaNove'
import DivTitulo, { FooterEstilizado, GridContainer, Continuar } from './Estilos'
import Palpite from './Palpite'
import Parabens from './Parabens'

function App() {
  const [acertou, setAcertou] = useState(false)
  const [erro, setErro] = useState(false)
  const [um, setUm] = useState('x')
  const [dois, setDois] = useState('x')
  const [tres, setTres] = useState('x')
  const [quatro, setQuatro] = useState('x')
  const [cinco, setCinco] = useState('x')
  const [seis, setSeis] = useState('x')
  const [sete, setSete] = useState('x')
  const [oito, setOito] = useState('x')
  const [nove, setNove] = useState('x')

  const setEstado = {
    setUm,
    setDois,
    setTres,
    setQuatro,
    setCinco,
    setSeis,
    setSete,
    setOito,
    setNove,
  }

  useEffect(() => {
    setErro(false)
  }, [um, dois, tres, quatro, cinco, seis, sete, oito, nove])

  if (acertou) {
    return (
      <Parabens setAcertou={setAcertou} setErro={setErro} setEstado={setEstado} />
    )
  }

  return (
    <>
      <DivTitulo>
        O meu amigo oculto...
      </DivTitulo>
      <GridContainer>
        <Dica setValor={setUm} valor={um} />
        {um === 'c' ? <DicaDois setValor={setDois} valor={dois} /> : null }
        {dois === 'h' ? <DicaTres setValor={setTres} valor={tres} /> : null }
        {tres === 'r' ? <DicaQuatro setValor={setQuatro} valor={quatro} /> : null }
        {quatro === 'i' ? <DicaCinco setValor={setCinco} valor={cinco} /> : null }
        {cinco === 's' ? <DicaSeis setValor={setSeis} valor={seis} /> : null }
        {seis === 't' ? <DicaSete setValor={setSete} valor={sete} /> : null }
        {sete === 'i' ? <DicaOito setValor={setOito} valor={oito} /> : null }
        {oito === 'a' ? <DicaNove setValor={setNove} valor={nove} /> : null }
      </GridContainer>
      <FooterEstilizado>
        <div>
          <Palpite setAcertou={setAcertou} setErro={setErro} />
        </div>
        <div>
          {erro ? <img src="http://dbriefing.com.br/blog/wp-content/uploads/2018/10/errou-faustao-gif.gif" alt="erou" /> : null}
          {erro ? <Continuar onClick={() => setErro(false)}><u>Continuar</u></Continuar> : null}
        </div>
      </FooterEstilizado>
    </>
  )
}

export default App
