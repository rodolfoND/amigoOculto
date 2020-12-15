import styled from 'styled-components'

const DivTitulo = styled.div`
 @keyframes fa-blink {
     0% { opacity: 1; }
     50% { opacity: 0.5; }
     100% { opacity: 0; }
 }
    -webkit-animation: fa-blink .75s linear infinite;
    -moz-animation: fa-blink .75s linear infinite;
    -ms-animation: fa-blink .75s linear infinite;
    -o-animation: fa-blink .75s linear infinite;
    animation: fa-blink .75s linear infinite;
    color: yellow;
    font-weight: bold;
    font-size: 42px;
`

export const FooterEstilizado = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  width: 100vw;
  background-color: silver;
  border-radius: 8px;
`

export const Botao = styled.button`
  background-color: green;
  border-radius: 8px;
  width: 98px;
  height: 20px;
  color: white;
  margin-left: 8px;
`

export const CaixaTexto = styled.input`
  border-radius: 8px;
  background-color: yellow;
`

export const GridContainer = styled.div`
  margin-top: 32px;
  overflow-y: scroll;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 0px 4fr;
  grid-template-columns: 1fr 4fr;
  -ms-grid-rows: 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr 0px 1fr;
  grid-template-rows: repeat(9, 1fr);
  gap: 0px 0px;
  grid-template-areas:
    ". ."
    ". ."
    ". ."
    ". ."
    ". ."
    ". ."
    ". ."
    ". ."
    ". .";
  padding-bottom: 64px;
`

export const LetraCorreta = styled.div`
 @keyframes fa-blink {
     0% { opacity: 1; }
     50% { opacity: 0.5; }
     100% { opacity: 0; }
 }
    -webkit-animation: fa-blink 1s linear infinite;
    -moz-animation: fa-blink 1s linear infinite;
    -ms-animation: fa-blink 1s linear infinite;
    -o-animation: fa-blink 1s linear infinite;
    animation: fa-blink 1s linear infinite;
    color: red;
    font-weight: bold;
`

export const Perguntas = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: normal;
  color: ${(props) => (props.erro ? 'red' : 'yellow')};
`

export const Continuar = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
  color: red;
`

export const MSG = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 36px;
  font-weight: bold;
  background: -webkit-linear-gradient(silver, gold);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
`

export const DivImg = styled.div`
  margin: 32px 0;
`
export default DivTitulo
