import React, {useContext} from 'react'
import {ColorContext, UserContext} from './MyContext'


const ContentData = () => {

    const user = useContext(UserContext)
    const color = useContext(ColorContext)
    return (
       
        <div>
            <ul>           
                <li>Nom: {user.name}</li>
                <li>Age: {user.age}</li>
                <li>Color: {color} </li>
            </ul>
        </div>

     )
     
}

export default ContentData




// Méthode sans Hooks

// const ContentData = () => {
//     return (
//         <>
//         <UserContext.Consumer>
//             {
//                 user => {
//                     return(
//                     <div>
//                     <ul>
//                         <li>Nom: {user.name}</li>
//                         <li>Age: {user.age}</li>
//                         <ColorContext.Consumer>
//                             {
//                                 color => {
//                                     return(
//                                         <li>Color: {color} </li>
//                                     )
//                                 }
//                             }
//                         </ColorContext.Consumer>
//                     </ul>
//                 </div>

//                     )
//                 }
//             }
//         </UserContext.Consumer>
      
//         </>
//     )
// }

// export default ContentData
