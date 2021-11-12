import React, {useState, useRef} from 'react'

/**
 * Atteindre une référence depuis le composant parenthese
 * Atteindre une référence depuis le composant parent, et utiliser cette même référence dans le composant où elle se trouve
 */


// Atteindre une référence depuis le composant 

// Mauvaise Méthode
// const FancyInput = () => {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <h1>{count}</h1>
//             <input type="text"/>
//         </div>
//     )
// }


// Bonne Méthode
// const FancyInput = React.forwardRef((props, ref) => {

//     return (
//         <div>
//             <h1>{count}</h1>
//             <input ref={ref} type="text"/>
           
//         </div>
//     )
// })

//////////////////////////////////////////////////////////////////////////////////////////////

// Atteindre une référence depuis le composant parent, et utiliser cette même référence dans le composant où elle se trouve

const FancyInput = React.forwardRef((props, ref) => {
    const [count, setCount] = useState(0)

    const inputRef = useRef()

    React.useImperativeHandle(ref,() => (
            {
                focus: (val) => {
                    if(count === 4){
                       const colors =  ["red", "blue", "orange", "pink", "purple", "green", "yellow"]

                       const style = `4px solid ${colors[val]}`
                       inputRef.current.style.border = style
                    }
                },

                countMax: () => {
                    if(count < 5){
                        setCount(count + 1)
                    }
                }
            }
        ))
    return (
        <div>
            <h1>{count}</h1>
            <input ref={inputRef} type="text"/>
        </div>
    )
})
 
export default FancyInput
