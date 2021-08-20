import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButton from './UseCallbackButton.'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

   const inc =  useCallback(function (delta) {
        setCount(curr => curr + delta)

   }, [setCount])

   
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButton inc={inc}></UseCallbackButton>
               
            </div>
        </div>
    )
}

export default UseCallback
