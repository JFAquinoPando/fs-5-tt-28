import { useState } from "react"

export function Tarjeta(
    {imagen, producto, descuento, precio, moneda, promo, agregarAlCarrito, carritoActual}
) {

    const [ seleccionado, setSeleccionado ] = useState(false)

    function handleClick(){
        setSeleccionado(true)
        agregarAlCarrito([...carritoActual, {
            imagen, producto, descuento, precio, moneda, promo
        }])
    }

    return (
        <article className="tarjeta-producto">
            <figure className={seleccionado ? "agregado" : ""}>
                <img src={imagen} alt={producto} />
            </figure>
            <h3>{producto}</h3>
            <div className="promocion">
                <span className="descuento">-{descuento}%</span>
                <span className="nombre-promo">{promo}</span>
            </div>
            <div className="moneda-precio">
                <strong>{moneda}</strong>
                <strong>{precio * (1 - (descuento/100))}</strong>
            </div>
            <div className="moneda-precio">
                <strong>{moneda}</strong>
                <strong className="precio-anterior">{precio}</strong>
            </div>
            <footer>
                <button onClick={handleClick} disabled={seleccionado}>comprar</button>
            </footer>
        </article>
    )
}