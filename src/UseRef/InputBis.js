import React, {useState, useEffect, useRef} from 'react'

// Accéder à une variable dans un useEffect ou une scope inaccessible


// // Mauvaise méthode
// function InputBis() {

//     const [count, setCount] = useState(0)


//     useEffect(() => {
//     // 1. la variable "increment" n'est pas accessible en dehors de useEffect
//         const increment = setInterval(() => {
//             setCount((prevCount) => {
//                 return prevCount + 1
//             })
//         }, 1000)
      
//     }, [])

//     // 2. la fonction stopInterval n'a pas accés à la variable "incrément"
//     const stopInterval = () => { increment}

//     return (
//         <div>
//             {count}
//             <button onclick={()=> stopInterval()}></button>
//         </div>
//     )
// }


// Bonne méthode
function InputBis() {

    // Accéder à une variable dans un useEffect ou une scope inaccessible

    const [count, setCount] = useState(0)
    // 1. Il faut créer une référence
    const setIntervalRef = useRef()

    useEffect(() => {
        // 2. Stocker l'interval dans la référence
        setIntervalRef.current = setInterval(() => {
            setCount((prevCount) => {
                return prevCount + 1
            })
        }, 1000)
      
    }, [])

    // 3. Ainsi, la fonction "stopincrement aura accés à l'interval"
    const stopincrement = () => { clearInterval(setIntervalRef.current) }

    return (
        <div>
            {count}
            <button onClick={() => stopincrement()}>Stop</button>
        </div>
    )
}




export default InputBis
