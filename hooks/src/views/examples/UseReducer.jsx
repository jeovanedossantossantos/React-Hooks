import React from 'react'
import { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle'

const initialState ={
    cart: [],
    products: [],
    user: null,
    //foco....
    number:0,

}

function reducer(state, action){
    switch (action.type) {
        case 'add2':
            return {...state, number: state.number + 2};
        
        case 'login':
            return { ...state, user: { name: action.payload}}
        default:
            return state;
    }


}

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

                    <button className="btn" onClick={() => dispatch({type:'login', payload:'Maria'})}>
                        Login
                    </button>
                    <button className="btn" onClick={()=>dispatch({type: 'add2'})}>
                        +2
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
