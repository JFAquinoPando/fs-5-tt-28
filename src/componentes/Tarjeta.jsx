import { useContext } from "react"
import { ContextoDeApp } from "../ContextoDeApp"
import { useStore } from "./../almacenamiento/useContexto";

export function Tarjeta(
    {imagen, producto, descuento, precio, moneda, promo}
) {

    const contexto = useContext(ContextoDeApp)
    if (contexto === null) {
        throw new Error('Tarjeta debe usarse dentro de ContextoDeApp')
    }

    const { carrito, agregarAlCarrito } = contexto
    const seleccionado = carrito.some(function (item) {
        return item.producto === producto
    })

    function handleClick() {
        agregarAlCarrito({ imagen, producto, descuento, precio, moneda, promo })
    }

    return (
        <article className="tarjeta-producto">
            <span>{productos}</span>
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