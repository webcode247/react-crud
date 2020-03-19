import React from 'react';


const UserList = ({users, deleteUser, editUser}) => {
    // console.log(users)

    const allUsers = users.map( user => <tr key={user.id}><td>{user.name}</td>
    <td>{user.username}</td>
    <td><button onClick={() => editUser(user)}>Edit</button> &nbsp;
    <button onClick={() => deleteUser(user.id)}>Delete</button></td></tr>)
    return (
        
        <>
            {allUsers}
        </>
    );
}

export default UserList;