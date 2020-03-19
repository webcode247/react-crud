import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../context';


const EditUserForm = () => {
    const context = useContext(Context);
    const {singleUser, updateUser} = context;

    
    
    const [ formUser, setformUser ] = useState(singleUser);

    useEffect( () => {
        
        // to make dom aware of update when editform content replaced
        setformUser( singleUser );
    }, [singleUser]);

    const handleUserChange = e => {
        const target = e.target;
        setformUser({ ...formUser, [ target.name ] : target.value });
    };
    

    const handleUserSubmit = e => {
        e.preventDefault();
        updateUser(formUser.id, formUser)
    };
    
    return (
        <div>
            <form onSubmit={handleUserSubmit} >
                <div>
                    <input type="text" placeholder="Name" 
                      name="name" value={formUser.name}
                      onChange={handleUserChange} 
                    />
                </div>
                <div>
                    <input type="text" placeholder="Username" 
                      name="username" value={formUser.username}
                      onChange={handleUserChange} 
                    />
                </div>
                <div><button type="submit">Update</button></div>
                <p id="error"></p>
            </form>
        </div>
    );
}

export default EditUserForm;