import React from 'react'
import { useState } from 'react'

function Perfumes() {
    const [valor, setValor] = useState(0)

    const add = () => {
        setValor(valor +1)
    }
    return (
        <div>
            <p>{valor}</p>
            <button onClick={add}>Comprar</button>
        </div>
    )
}

export default Perfumes
