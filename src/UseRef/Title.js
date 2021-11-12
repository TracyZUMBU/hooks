import React, {useRef} from 'react'

// Permet de changer la valeur d'une vaariable sans re-render le composant
function Title() {

    const h1Renders = useRef(0)
    console.log('h1Renders:', h1Renders)
    // la valeur de la référence h1Renders va changer (cela est visible dans la console. Mais l'affichage ne changera pas le contenu de <p> sera tjrs 0)
    setInterval(() => {
       h1Renders.current++
       console.log(h1Renders.current) 
    }, 1000);
    return (
        <div>
            <p>{h1Renders.current}</p>
        </div>
    )
}

export default Title
