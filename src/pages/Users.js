import react, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../conponenet/UserList';

const Users = () => {
   const [users, setUsers] = useState([]);
   useEffect(() => {
      axios
         .get('https://jsonplaceholder.typicode.com/users')
         .then((Response) => {
            console.log(Response);
            setUsers(Response.data);
         }, []);
   });
   return (
      <>
         <h1>Users</h1>
         <UserList users={users} />
      </>
   );
};

export default Users;
