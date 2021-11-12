import React, {useReducer} from 'react'

// initialState with a object
const initialState = {
    countOne : 0,
    countTwo : 0
}

const reducer = (state, action) => {
    switch(action.type){
        case "increment":
            return {...state, countOne: state.countOne + action.value}
        case "decrement":
            return {...state, countOne: state.countOne - action.value}
        case "incrementTwo":
            return {...state, countTwo: state.countTwo + action.value}
        case "decrementTwo":
            return {...state, countTwo: state.countTwo - action.value}
        default:
            return initialState
    }
}
const Count = () => {

    const[count, dispatch] = useReducer(reducer, initialState)
    
    return (
        <div style={{display:"flex", justifyContent: "space-between"}}>
            <div>
                <h1>{count.countOne}</h1>
                <button onClick={() => dispatch({type:'increment', value: 1})}>+</button>
                <button  onClick={() => dispatch({type:'decrement', value: 1})}>-</button>
            </div>

            <div>
                <h1>{count.countTwo}</h1>
                <button onClick={() => dispatch({type:'incrementTwo', value: 10})}>+</button>
                <button  onClick={() => dispatch({type:'decrementTwo', value: 10})}>-</button>
            </div>
                <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
    
    )
}

export default Count




// initialState as a value

// const initialState = 0

// const reducer = (state, action) => {
//     switch(action){
//         case "increment":
//             return state + 1
//         case "decrement":
//             return state - 1
//         default:
//             return state
//     }
// }

// const Count = () => {
//      const[count, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => dispatch('increment')}>+</button>
//             <button  onClick={() => dispatch('decrement')}>-</button>
//         </div>
//     )
// }

// export default Count
