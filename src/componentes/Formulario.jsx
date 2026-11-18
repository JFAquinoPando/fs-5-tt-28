import { useState } from "react";
import { Entrada } from "@/componentes/Entrada.jsx";

export function Formulario(props) {

    const [respuesta, setRespuesta] = useState("nada de IA")

    function handleSubmit(evento) {
        evento.preventDefault()
        fetch("http://127.0.0.1:3000", {
            method: "POST",
            body: new FormData(evento.target),
            headers: {
                "Accept": "application/json"
            }
        }).then(
            peticion => peticion.json()
        ).then(
            resultado => {
                setRespuesta(resultado.message)
            }
        ).catch(
            function (error) {
                setRespuesta("Por el momento tenemos inconvenientes con el servidor")
            }
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Entrada 
                    nombre={props.clave} 
                    mensaje={`Introduce ${props.clave}`}
                />
                <button>Enviar</button>
            </form>
            <output>
                {respuesta}
            </output>
        </div>
    )
}