import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();


const Provider = props => {

/** For login Page */

    let error = "";

    const initial = { username: "", password: "", isFilled: false };

    const [login, setLogin] = useState(initial);


    const handleChange = e => {
        const target = e.target;
        setLogin({ ...login, [target.name] : target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if ( !login.username.trim() || !login.password.trim() ) {
            error = "No field should be empty";
            return document.getElementById("error").innerHTML = error;
        }
        else if( login.password.length >= 6 && login.password.includes('@')) {
            
            setLogin({...login, isFilled: true})
        }
        else {
            error = "Password must be at least 6 characters long including any of (@, _, *, ?)";
            return document.getElementById("error").innerHTML = error;
        }
    };


   /** For UserList  */

   /*const userData = [
       {id: 1, name: 'Henry', username: 'Tienry' },
       {id: 2, name: 'Ibraheem', username: 'Sterling' },
       {id: 3, name: 'Sadio', username: 'Manne' }
   ];*/


   
   const [ users, setUsers ] = useState([]);
    
   useEffect( () => {
       const fetcher = async() => {
           let data = await fetch('https://jsonplaceholder.typicode.com/users');
            let result = await data.json();
             setUsers(result)
       }
       fetcher();
   },[]);


   const deleteUser = id => {
       setEditingMode(false);
       setUsers( users.filter( user => user.id !== id ) );
   };

   const [ editingMode, setEditingMode ] = useState(false);
   const initUser = { id: null, name: '', username: '' };
   const [ singleUser, setSingleUser ] = useState(initUser);

   const editUser = user => {
       setEditingMode(true);
       setSingleUser( {id: user.id, name: user.name, username: user.username} )
   };

   const updateUser = (id, usertoupdate) => {
       setEditingMode(false);
       setUsers( users.map( user => user.id === id ? usertoupdate : user ) );
   };

   

    return(
        <Context.Provider value={{ ...login,  handleChange, handleSubmit, 
             users, deleteUser, editUser,
             editingMode, singleUser, updateUser
            }}>
            {props.children}
        </Context.Provider>
    );
};

export { Context, Provider }