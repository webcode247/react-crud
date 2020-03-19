import React, { useContext } from 'react';
import { Context } from '../context';
import { Redirect } from 'react-router-dom';
import UserList from './UserList';
import EditUserForm from './EditUserForm';



const User = () => {

    const context = useContext(Context);
    const { isFilled, username, users, deleteUser, editingMode, editUser } = context;

   

    return (
        <>
        <div style={{width: '90vw', margin: 'auto'}}>
            
            <button style={{float: 'right'}} onClick={() => window.location='/'}>LogOut</button>

            <h4 style={{textAlign: 'center', marginTop: '2em', marginBottom: '3em'}}>
                { !isFilled ? (<Redirect to="/" />) : (`Welcome ${username}`) }
            </h4>

               <div>
                   { editingMode ? ( <EditUserForm  />) : ("") } 
                   <h5>Here is the list of users of your service</h5>
                   <table>
                       <thead>
                           <tr>
                               <th>Name</th>
                               <th>Userame</th>
                               <th>Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                           <UserList users={users} deleteUser={deleteUser} editUser ={editUser} />
                       </tbody>
                   </table>
               </div> 
    </div>
        </>    
    );
};

export default User;