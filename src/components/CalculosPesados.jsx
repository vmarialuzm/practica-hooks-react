import { useMemo, useState } from "react"

export const CalculosPesados = () => {
    const [listaNumeros, setListaNumeros] = useState([2,3,4,5,6,7,8,9,8,7,6,5,4,3,2])
    const [show, setShow] = useState(true)
    const getCalculo = (listaNumeros) => useMemo(() => {
        console.log('Calculando')
        return listaNumeros.reduce((a,b) => a*b)
    }, [listaNumeros])
    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length-1] + 1])
        console.log(listaNumeros)
    } 
    return (
        <>
            <h2>Calculo: </h2>
            <p>{ getCalculo(listaNumeros)}</p>
            <button className="btn btn-primary" onClick={() => setShow(!show)}>{ show ? 'Show' : 'Hide'}</button>
            <button className="btn btn-primary" onClick={() => agregarNumero()}>Agregar número</button>
        </>
    )
}
