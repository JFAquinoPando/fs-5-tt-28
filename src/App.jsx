import { useState, useEffect } from 'react'
import carrito from "./assets/market.svg";
import "./index.css"
import { Tarjeta } from './componentes/Tarjeta'
import { ContextoDeApp } from './ContextoDeApp'


export function Aplicacion() {

  const [listado, setListado] = useState([])
  const [comprar, setComprar] = useState([])

  function agregarAlCarrito(producto) {
    setComprar(function (carritoActual) {
      if (carritoActual.some(function (item) {
        return item.producto === producto.producto
      })) {
        return carritoActual
      }

      return [...carritoActual, producto]
    })
  }

  const valorContexto = { carrito: comprar, agregarAlCarrito }

  useEffect(function () {

    fetch("http://127.0.0.1:3000")
      .then(function (peticion) {
        return peticion.json()
      })
      .then(
        function (resultado) {
          setTimeout(() => {
            document.querySelector("title").textContent = "Traigo productos"
            setListado(resultado)
          }, 2000);
        }
      )
  }, [])


  return (
    <ContextoDeApp value={valorContexto}>
      <header>
        <h1>Mi Tienda de productos</h1>
        <hr />
        <div className='center'>
          <div>
            <span>{comprar.length}</span>
            <img className='icono' src={carrito} alt="carrito" />
            <strong>{comprar.reduce(
              function (acumulador, valorActual) {
                return acumulador +
                  (valorActual.precio *
                    (1 - (valorActual.descuento) / 100))
              }, 0)}</strong>
          </div>
        </div>
      </header>
      <div className='padding contenedor'>
        {
          listado.map(
            function (item, indice) {
              return <Tarjeta
                key={`${item.producto}-${indice}`}
                imagen={item.imagen}
                producto={item.producto}
                precio={item.precio} descuento={item.descuento}
                moneda={item.moneda} promo={item.promo}
              />
            }
          )
        }

        {/* <Formulario clave={"consulta"} />
      <section>
        <Saludo primerNombre="José" segundoNombre="Fabricio" />
        <Saludo primerNombre="Edith" segundoNombre="Johana" />
        <Saludo primerNombre="Jorge" segundoNombre="Osmar" />
        <Saludo primerNombre="Ricardo" segundoNombre="Ryota" />
      </section> */}
      </div>
    </ContextoDeApp>
  )
}

export function Saludo(props) {

  const [clickClase, setClickClase] = useState("")

  function handleClick() {
    setClickClase(clickClase === "" ? "listo" : "")
  }

  return (
    <h3 className={clickClase} onClick={handleClick} >
      Hola, {props.primerNombre} {props.segundoNombre} ⚡
    </h3>
  )
}