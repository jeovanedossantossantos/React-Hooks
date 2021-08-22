import { useState } from 'react'

export const useCounter = (initilValue = 100)=>{
    const [count, setCount] = useState(initilValue)

    function inc() {
        setCount(count + 1)
        
    }
    function dec() {

        setCount(count - 1)

        
    }
    return [count, inc, dec]
}