export function Entrada(props) {
    return (
        <input 
            type="text" 
            name={props.nombre} 
            placeholder={props.mensaje}
            className=""
        />
    )
}