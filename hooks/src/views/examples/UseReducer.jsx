import React from 'react'
import { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer} from '../../store/config'
import {add_2, login} from '../../store/action'



const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span>
                : <span className="text"> Sem Usuario </span>
                
                }
                
                <spsn className="text">{state.number}</spsn>
                <div>

                    <button className="btn" onClick={() => login(dispatch,'Maria')}>
                        Login
                    </button>
                    <button className="btn" onClick={()=> add_2(dispatch)}>
                        +2
                    </button>
                    <button className="btn" onClick={() => dispatch({ type: 'multi_7' })}>
                        *7
                    </button>
                    <button className="btn" onClick={() => dispatch({ type: 'divid_25' })}>
                        /25
                    </button>
                    <button className="btn" onClick={() => dispatch({ type: 'Int' })}>
                        Interiro
                    </button>
                    <button className="btn" onClick={() => dispatch({ type: 'add_n', payload: -1})}>
                        -1
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
