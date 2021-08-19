import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectioTitle from "../../components/layout/SectionTitle"


function calcFatorial(num) {
    
    try {
        const n = parseInt(num)
        if (n < 0) return -1
        if (n === 0) return 1

        return calcFatorial(n - 1) * n
    } catch (error) {
        return -2
    }
   
    
}

const UseEffect = (props) => {
    const [number, setNamber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function () {
        setFatorial(calcFatorial(number))
        
    }, [number])


const [status, setStatus] = useState("Impar")
useEffect(function () {
    setStatus(number % 2===0 ? "Par" : "Impar" )
    
})
   


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectioTitle title="Exercicio #01"></SectioTitle >
            <div className="center">
                <span className="text">Fatorial</span>
                <span className="text red">{fatorial === -1? "Não existe": fatorial}</span>
                <input type="number" className="input" 
                    value={number} onChange={e => setNamber(e.target.value)}/>
            </div>

            <SectioTitle title="Exercicio #02"></SectioTitle >
            <div className="center">
                <span className="text"> Status: </span>
                <span className="text red">{status}</span>
               

            </div>

        </div>
    )
}

export default UseEffect
