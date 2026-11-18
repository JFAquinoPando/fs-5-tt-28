import { useState } from 'react'
import heroImg from './assets/hero.png'
import "./index.css"
import { Formulario } from '@/componentes/Formulario'

export function Aplicacion() {
  return (
    <div>
      <Formulario clave={"consulta"} />
      {/* <Saludo primerNombre="José" segundoNombre="Fabricio" />
      <Saludo primerNombre="Edith" segundoNombre="Johana" />
      <Saludo primerNombre="Jorge" segundoNombre="Osmar" />
      <Saludo primerNombre="Ricardo" segundoNombre="Ryota" /> */}
    </div>
  )
}

export function Saludo(props) {

  const [clickClase, setClickClase] = useState("")

  function handleClick(){
    setClickClase(clickClase === "" ? "listo" : "")
  }

  return (
    <h3 className={clickClase} onClick={handleClick} >
      Hola, {props.primerNombre} {props.segundoNombre} ⚡
    </h3>
  )
}