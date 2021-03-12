import React from 'react';
import Users from '../pages/Users';

const UserList = ({ users }) => {
   console.log(users);
   return (
      <div>
         {users.map((user) => {
            return <div key={user.id}>{user.name}</div>;
         })}
      </div>
   );
};

export default UserList;
