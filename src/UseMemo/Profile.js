import React from 'react'

function Profile({count,profile}) {
    console.log("Jesuis dans le composant Profile")
    return (
        <div>
            <ul className="list-group">
                <li className="list-groupt-item">User ID: {profile.id}</li>
                <li className="list-groupt-item">Nom: {profile.name}</li>
                <li className="list-groupt-item">Pseudo:{profile.username}</li>
                <li className="list-groupt-item">Email:{profile.email}</li>
            </ul>
        </div>
    )
}
 export default React.memo(Profile)