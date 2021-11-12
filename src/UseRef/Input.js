import React, {useRef, useState} from 'react'


// Accéder et manipuler un élement du DOM et Récupérer la valeur d'un élément

function Input() {

    const [name, setName] = useState("")

    const userNameRef =  useRef(null)
  
    const handleSubmit = () => {
        // Accéder et manipuler un élement du DOM
        console.log(userNameRef.current.focus())
        // Récupérer la valeur d'un élément
        setName(userNameRef.current.value)
        console.log("name:", name)
    }

    return (
        <div>
            <input type="text" ref={userNameRef}/>
            <button onClick={handleSubmit}>Focus</button>
        </div>
    )
}

export default Input

