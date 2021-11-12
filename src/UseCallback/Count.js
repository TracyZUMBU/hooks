import React from 'react'

const Count = ({count, bgColor, text}) => {
    console.log(text)
    const progress = {width: `${count}%`}
    return (
        <>
            <p className="h1">{count}%</p>
            <div className="progress">
                <div className={`progress-bar progress-bar-striped bg-${bgColor}`} role="progressbar" style={progress}>
                    
                </div>
            </div>
        </>
    )
}

export default Count
//export default React.memo(Count)
