import React from 'react'

const Button = ({btnColor, increment, children, handleClick}) => {
    console.log(`btn ${children}`)
    return (
        <button onClick={()=> handleClick(increment)}className={`btn btn-${btnColor}`}>+ %</button>
    )
}

export default Button
// export default React.memo(Button)
